import orjson

def get_geojson(file_path='../data-collection/data/json/data.geojson'):
    """
    Tries to load a GeoJSON file and return its content as a Python dictionary using orjson for performance.
    """
    try:
        with open(file_path, 'rb') as file:
            data = orjson.loads(file.read())
            return data, 200  # Indicate success with HTTP status code 200
    except FileNotFoundError:
        return {"error": "GeoJSON file not found."}, 404
    except Exception as e:
        return {"error": str(e)}, 500

def parse_geojson(data, county=None):
    """
    Filters the given GeoJSON data for features within the specified state and optionally by county,
    and returns a full GeoJSON structure including the 'crs' object. If county is None or not provided,
    filters by state only.
    """
    geojson_response = {
        "type": "FeatureCollection",
        "crs": {"type": "name", "properties": {"name": "urn:ogc:def:crs:OGC:1.3:CRS84"}},
        "features": []
    }

    if data.get("type") == "FeatureCollection":
        for feature in data.get("features", []):
            properties = feature.get("properties", {})
            # Check if the feature matches the specified state; if county is provided, also check for a county match.
            if properties.get("State") == 'Florida' and (county is None or properties.get("County") == county):
                geojson_response["features"].append(feature)
                
        return geojson_response
    else:
        return {"error": "Invalid GeoJSON data."}
