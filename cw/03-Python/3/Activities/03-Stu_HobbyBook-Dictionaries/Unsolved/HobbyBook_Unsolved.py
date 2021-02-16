# Dictionary full of info
my_info = {"name": "Bison",
    "age":2,
    "Hobby": ["sleeping", "eating", "barking", "playing catch"],
    "wake_up" : {"Sun": 9, "mon":7, "fri":6}
}

#print(my_info)
# Print out results are stored in the dictionary
print(f'My name is {my_info["name"]}')
print(f'My hobbies are {my_info["Hobby"][2][3]}')
print(f'On Fridays I wake up at {my_info["wake_up"]["fri"]}am')