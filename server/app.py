from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask_caching import Cache
from dotenv import load_dotenv
import os

from functions import parse_geojson, get_geojson 

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

# Retrieve the LOCALHOST_URL from environment variables
localhost = os.getenv('LOCALHOST_URL', 'http://localhost:5173')  # Default to http://localhost:5173 if not set

# Set up CORS with the loaded localhost URL
cors = CORS(app, resources={r"/*": {"origins": localhost}})

# Configure cache, using simple in-memory cache for this example. For production, consider using Redis or Memcached.
app.config['CACHE_TYPE'] = 'SimpleCache'
app.config['CACHE_DEFAULT_TIMEOUT'] = 10000  # Cache timeout in seconds

cache = Cache(app)

@app.route('/parse', methods=['GET'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
@cache.cached(query_string=True)  # Cache responses based on full query string
def parse_endpoint():
    # Retrieve 'county' from query parameters. Use None as the default value.
    county = request.args.get('county', None)

    # Fetch the GeoJSON data that you want to filter or return. Adjust this function as needed for your application.
    data, _ = get_geojson()  # Assuming get_geojson() returns the full dataset and a status code.

    # If neither state nor county is provided, return the entire dataset.
    if not county or county == 'default':
        return jsonify(data)

    # If 'county' parameter is provided, filter the dataset.
    filtered_features = parse_geojson(data, county=county)
    return jsonify(filtered_features)


if __name__ == '__main__':
    app.run(debug=True)
