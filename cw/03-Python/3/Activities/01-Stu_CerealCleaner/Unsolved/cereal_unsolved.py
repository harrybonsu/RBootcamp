import os
import csv

cereal_csv = os.path.join("..", "Resources", "cereal.csv")

with open(cereal_csv) as csvfile:
    csvReader = csv.reader(csvfile, delimiter=',')
    # print(csvReader)

    csv_header = next(csvfile)
    print(csv_header)

    for row in csvReader:
        if float(row[7]) >= 5:
            print(row)