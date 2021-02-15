# The list of candies to print to the screen
candy_list = [
    "Snickers", 
    "Kit Kat", 
    "Sour Patch Kids", 
    "Juicy Fruit", 
    "Swedish Fish", 
    "Skittles", 
    "Hershey Bar", 
    "Starbursts", 
    "M&Ms"
]

# The amount of candy the user will be allowed to choose
allowance = 5

# The list used to store all of the candies selected inside of
candy_cart = []

# Print out options

    #candy_cart.append(candy_list[int(selected)])

                       
i = 0
for candy in candy_list:
    print("[" + str(i) + "] " + candy)

    i = i + 1

want_more = "yes"
while want_more == "yes" and len(candy_cart) <5:

    selected_item = int(input("Pick a number: "))

    candy_cart.append(candy_list[selected_item])

    want_more = input("Do you want more candies?")
  
print(f"I brought home with me {candy_cart}")  