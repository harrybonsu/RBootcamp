# Initial variable to track shopping status
shopping = 'y'

# List to track pie purchases
pie_purchases = [0,0,0,0,0,0,0,0,0,0]

# Pie List
pie_list = ["Pecan", "Apple Crisp", "Bean", "Banoffee", "Black Bun",
            "Blueberry", "Buko", "Burek", "Tamale", "Steak"]

# Display initial message
print("Welcome to the House of Pies! Here are our pies:")
    
i = 0
for pie in pie_list:
    print("[" + str(i) + "]" + pie)
    i = i + 1

# While we are still shopping...
while shopping == "y":
    cust_choice = int(input("select the number you want: "))
    pie_purchases[cust_choice] = pie_purchases[cust_choice] + 1
    shopping = input("Shop More? y(es) or n(o)")

x = 0
for pie in pie_list:
    print(str(pie_purchases[x]) + " " + pie_list[x])
    x=x+1


# Loop end here
# Once the pie list is complete
#print("------------------------------------------------------------------------")
#print("You purchased a total of " + str(len(pie_purchases)) + ".") 