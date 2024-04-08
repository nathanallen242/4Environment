import openpyxl
import csv

# Open the Excel workbook
workbook = openpyxl.load_workbook('../../my-react-app/src/dataset/FoodAccessResearchAtlasData2015.xlsx')

# Get the third sheet
sheet = workbook.worksheets[2]  # Sheets are zero-indexed

# Create a CSV file
with open('2015.csv', 'w', newline='') as csvfile:
    csvwriter = csv.writer(csvfile)

    # Iterate through the rows and write them to the CSV file
    for row in sheet.iter_rows():
        csvwriter.writerow([cell.value for cell in row])

print("Conversion completed successfully!")