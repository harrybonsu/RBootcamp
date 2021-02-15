# Initial variable to track game play
user_play = "y"
start_pos = 0
# While we are still playing...
while user_play == 'y':
    # Ask the user how many numbers to loop through
    user_input = int(input("how many numbers do you want?"))

    # Loop through the numbers. (Be sure to cast the string into an integer.)
    for x in range(start_pos, user_input+start_pos):

        # Print each number in the range
        print(x)

    # Once complete...
    start_pos = user_input+start_pos
    user_play = input("Continue: (y)es or (n)o?")
