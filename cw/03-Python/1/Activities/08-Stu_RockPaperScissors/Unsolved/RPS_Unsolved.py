# Incorporate the random library
import random

# Print Title
print("Let's Play Rock Paper Scissors!")

# Specify the three options
options = ["r", "p", "s"]

# Computer Selection
computer_choice = random.choice(options)

# User Selection
user_choice = input("Make your Choice: (r)ock, (p)aper, (s)cissors? ")

# Run Conditionals
if (user_choice == "r" and computer_choice == "p"):
    print("you chose rock, computer chose paper")
    print("Sorry. You lose!")

elif (user_choice == "p" and computer_choice == "r"):
    print("you chose paper, computer chose rock")
    print("Sorry. You lose!")
    
else:
    print("play again")
