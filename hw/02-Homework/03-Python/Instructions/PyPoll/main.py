import os
import csv

# Path to collect data from the Resources folder
PyPoll = os.path.join(".", "Resources", "election_data.csv")


#set variables
candidates = []
Khan_tot_votes = 0
Correy_tot_votes = 0
Li_tot_votes = 0
Otooley_tot_votes = 0
Tot_Votes = 0

with open(PyPoll, newline="", encoding="utf-") as election_data:
    csvreader = csv.reader(election_data, delimiter=",")

# skip header to iterate through the values
    header = next(csvreader)
    
    # count total votes per candidate
    for row in csvreader:

        candidates.append(row[2])

        Tot_Votes = Tot_Votes + 1

        if  row[2] == 'Khan':
            Khan_tot_votes = Khan_tot_votes + 1

        elif row[2]  == 'Correy':
            Correy_tot_votes = Correy_tot_votes + 1

        elif row[2] == 'Li':
            Li_tot_votes = Li_tot_votes + 1

        elif row[2] == "O'Tooley":
            Otooley_tot_votes = Otooley_tot_votes + 1
  
# percent of votes polled by each candidate

Khan_Percent = (Khan_tot_votes/Tot_Votes) * 100
Correy_Percent = (Correy_tot_votes/Tot_Votes) * 100
Li_Percent = (Li_tot_votes/Tot_Votes) * 100
Otooley_Percent = (Otooley_tot_votes/Tot_Votes) * 100

candidates = ["Khan", "Correy", "Li","O'Tooley"]
votes = [Khan_tot_votes, Correy_tot_votes, Li_tot_votes, Otooley_tot_votes]

# Find the winner by creating a dictionary with candidates and votes list. 
# Then, use max function to get the winner.
dict_candidates_and_votes = dict(zip(candidates,votes))
winner = max(dict_candidates_and_votes, key=dict_candidates_and_votes.get)


# Print summary Table
print(f"Election Results")
print(f"-----------------------")
print(f"Total Votes: {Tot_Votes}")
print(f"-----------------------")
print(f"Khan: {Khan_Percent:.3f}% ({Khan_tot_votes})")
print(f"Correy: {Correy_Percent:.3f}% ({Correy_tot_votes})")
print(f"Li: {Li_Percent:.3f}% ({Li_tot_votes})")
print(f"O'Tooley: {Otooley_Percent:.3f}% ({Otooley_tot_votes})")
print(f"-----------------------")
print(f"Winner: {winner}")
print(f"-----------------------")

# Create Output Files
output_file = os.path.join("..","PyPoll","Analysis","Election_Results.txt")

with open(output_file, "w") as file:

    file.write("Election_Results")
    file.write("\n")
    file.write("-------------------")
    file.write("\n")
    file.write(f"Total Votes: {Tot_Votes}")
    file.write("\n")
    file.write(f"-----------------------")
    file.write("\n")
    file.write(f"Khan: {Khan_Percent:.3f}% ({Khan_tot_votes})")
    file.write("\n")
    file.write(f"Correy: {Correy_Percent:.3f}% ({Correy_tot_votes})")
    file.write("\n")
    file.write(f"Li: {Li_Percent:.3f}% ({Li_tot_votes})")
    file.write("\n")
    file.write(f"O'Tooley: {Otooley_Percent:.3f}% ({Otooley_tot_votes})")
    file.write("\n")
    file.write(f"-----------------------")
    file.write("\n")
    file.write(f"Winner: {winner}")
    file.write("\n")
    file.write(f"-----------------------")
