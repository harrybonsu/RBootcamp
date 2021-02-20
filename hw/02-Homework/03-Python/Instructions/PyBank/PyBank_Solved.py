import os
import csv

# Path to collect data from the Resources folder
PyBank = os.path.join(".", "Resources", "budget_data.csv")

Tot_months = []
Tot_PL = []
Monthly_Change = []

with open(PyBank, newline="", encoding="utf-") as budget_data:
    csvreader = csv.reader(budget_data, delimiter=",")

# skip header to iterate through the values
    header = next(csvreader)

# appending total months and total profit/loss to their lists  
    for row in csvreader:
        Tot_months.append(row[0])
        Tot_PL.append(int(row[1]))

    for i in range(len(Tot_PL)-1):

# monthly profit change
        Monthly_Change.append(Tot_PL[i+1]-Tot_PL[i])

# greatest increase and decrease in profit values
greatest_inc_PL = max(Monthly_Change)
greatest_dec_PL = min(Monthly_Change)



#set the greatest increase and greatest decrease to their corresponding months
greatest_inc_month = Monthly_Change.index(max(Monthly_Change)) + 1
greatest_dec_month = Monthly_Change.index(min(Monthly_Change)) + 1 

# print results

print("Financial Analysis")
print("----------------------------------------")
print(f"Total Months: {len(Tot_months)}")
print(f"Total: ${sum(Tot_PL)}")
print(f"Average Change: {round(sum(Monthly_Change)/len(Monthly_Change),2)}")
print(f"Greatest Increase in Profits: {Tot_months[greatest_inc_month]} (${(str(greatest_inc_PL))})")
print(f"Greatest Decrease in Profits: {Tot_months[greatest_dec_month]} (${(str(greatest_dec_PL))})")


# Create Output Files
output_file = os.path.join("..","PyBank","Fiancial_Analysis.txt")

with open(output_file, "w") as file:

    file.write("Financial Analysis")
    file.write("\n")
    file.write("-------------------")
    file.write("\n")
    file.write(f"Total Months: {len(Tot_months)}")
    file.write("\n")
    file.write(f"Total: ${sum(Tot_PL)}")
    file.write("\n")
    file.write(f"Average Change: {round(sum(Monthly_Change)/len(Monthly_Change),2)}")
    file.write("\n")
    file.write(f"Greatest Increase in Profits: {Tot_months[greatest_inc_month]} (${(str(greatest_inc_PL))})")
    file.write("\n")
    file.write(f"Greatest Decrease in Profits: {Tot_months[greatest_dec_month]} (${(str(greatest_dec_PL))})")