# Write a function that returns the arithmetic average for a list of numbers
def average(numbers):
    num_items = len(numbers)
    total = 0.0
    for i in numbers:
        total = total + i
    return total/num_items

print(average([1, 5, 9]))


# Test your function with the following:
#print(average([1, 5, 9]))
#print(average(range(11)))