import csv

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

        

# Example usage:
weightedAverage('florida.csv', 'floridaAverages.csv')
