import pandas as pd
import geopandas as gpd

# Load CSV data
csv_data = pd.read_csv('../src/dataset/florida.csv', dtype={'CensusTract': str})

# Load GeoJSON data
geojson_data = gpd.read_file('../src/dataset/tl_2019_12_tract.json')

# Check first few rows of the GeoJSON DataFrame to confirm column names
print(geojson_data.head())

# Based on the observation, determine the correct column name for merging
# Here, assuming 'GEOID' is the correct column identified from the .head() output
merged_data = geojson_data.merge(csv_data, left_on='GEOID', right_on='CensusTract', how='left')

# Export the merged data to a new GeoJSON file
merged_data.to_file('merged_data.geojson', driver='GeoJSON')
