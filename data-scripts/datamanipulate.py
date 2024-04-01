import csv
import json

def weightedAverage(input_filename, output_filename):
    with open(input_filename, 'r', newline='') as input_file, \
         open(output_filename, 'w', newline='') as output_file:
        reader = csv.DictReader(input_file)
        writer = csv.DictWriter(output_file, fieldnames=['State','County','WeightedAverage'])
        writer.writeheader()

        Counties = {}
        for row in reader:
                county = row['County']
                tract = row['\ufeffCensusTract']
                population = int(row['POP2010'])
                food = int(row['LILATracts_1And10'])

                if county not in Counties:
                    Counties[county] = [food*population,population]
                else:
                    existingSum = Counties[county][0]
                    existingPopulation = Counties[county][1]
                    Counties[county] = [existingSum + food*population, existingPopulation+ population]

        for i in Counties:
            percentage = str("{:.3f}".format(Counties[i][0] / Counties[i][1]))
            writer.writerow({'State': "Florida",
                         'County': i,
                         'WeightedAverage': percentage})

def extract_properties(input_file, output_file, properties):

    with open(input_file, 'r') as f:
        data = json.load(f)
        
    filtered_features = {
        "type": "FeatureCollection",
        "features": []
    }
    
    for feature in data["features"]:
        filtered_feature = {
            "type": "Feature",
            "geometry": feature["geometry"],
            "properties": {prop: feature["properties"].get(prop) for prop in properties}
        }
        filtered_features["features"].append(filtered_feature)

    # Write the filtered GeoJSON to the output file
    with open(output_file, 'w') as f:
        json.dump(filtered_features, f, indent=2)


input_file = 'merged_data.geojson'
output_file = 'final.geojson'
properties_to_extract = ['LA1and10', 'POP2010', 'County']

extract_properties(input_file, output_file, properties_to_extract)


    
# weightedAverage('florida.csv', 'floridaAverages.csv')
