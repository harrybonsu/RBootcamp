# Modules
import os
import csv

# Prompt user for video lookup
video = input("What show or movie are you looking for? ")

# Set path for file
csvpath = os.path.join("..", "Resources", "netflix_ratings.csv")

found = False

with open(csvpath) as csvfile:
    csvreader = csv.reader(csvfile, delimiter=",")  

    if row[0] == video:
        print(row[0] + " is rated " + row[1] + " with a rating of " + row[5])
        
        found = True

        break
    

