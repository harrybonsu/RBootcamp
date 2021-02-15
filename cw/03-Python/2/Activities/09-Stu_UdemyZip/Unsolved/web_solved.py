import os
import csv

udemy_csv = os.path.join("..", "Resources", "web_starter.csv")

# Lists to store data
title = []
price = []
subscribers = []
reviews = []
review_percent = []
length = []

# Use encoding for Windows
# with open(udemy_csv, newline='', encoding='utf-8') as csvfile:
with open(udemy_csv, newline='', encoding='utf-8') as csvfile:
    csvreader = csv.reader(csvfile, delimiter=",")
    for row in csvreader:
        title.append(row[1])
        price.append(row[4])
        subscribers.append(row[5])
        reviews.append(row[6])
        review_percent.append(round(int(row[6])/int(row[5]),2))
        length.append(row[9].split(" ")[0])
        
    
    new_list = zip(title, price, subscribers, reviews, review_percent, length)

    #print(list(new_list))

# set variable for output file
output_file = os.path.join("web_final.csv")
with open(output_file, 'w', newline='') as writefile:
    writer = csv.writer(writefile)

 # add header
    writer.writerow(["Header1", "Header2", "Header3"])
# write to output file
    writer.writerows(new_list)

