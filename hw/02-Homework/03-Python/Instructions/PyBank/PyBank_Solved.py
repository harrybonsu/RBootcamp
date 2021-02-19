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

# appending total months and profit/loss to their lists  
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

#print(greatest_inc_month)






    
# Assign values to variables   
#Tot_months = str(budget_data[0])
#Total = int(budget_data[1])
#Av_change = int(budget_data[2])
#Gr_inc_Profits = int(budget_data[3])
#Gr_dec_Profits = int(budget_data[3])

