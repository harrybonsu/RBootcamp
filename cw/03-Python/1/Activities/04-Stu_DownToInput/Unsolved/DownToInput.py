# Take input of you and your neighbor
your_name = input("what is your name?")
neighbor_name = input("what is your neighbor's name?")

# Take how long each of you have been coding
your_coding_months = int(input("how many months have you been coding?"))
neighbor_coding_months = int(input("how many month have your neighbor been coding?"))

# Add total month
total_months = your_coding_months+neighbor_coding_months

# Print results

print("your name is " + your_name)
print("your neigbor's name is " + neighbor_name)
print(f"together you have been coding for: {total_months} months")
