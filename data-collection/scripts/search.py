import orjson

def parse_geojson(file_path):
    # Open and read the GeoJSON file
    with open(file_path, 'rb') as file:
        data = orjson.loads(file.read())

    # Check if the data type is a FeatureCollection
    if data.get("type") == "FeatureCollection":
        features = data.get("features", [])
        filtered_features = []

        for feature in features:
            properties = feature.get("properties", {})
            # Adjust the condition based on the expected structure
            # Here, it's assumed "County" and "State" keys exist and match the desired values
            if properties.get("County") == "Broward":
                filtered_features.append(feature)

        return filtered_features

    return []

# # Assuming the GeoJSON file is named 'data.geojson' and located in the current directory
# filtered_features = parse_geojson("../data/json/data.geojson")
# print(filtered_features)
