# will use comments whenever possible (oh boy)
# int. of board, strings returning in a list of lists (easy to manage) of possible outcomes (3*3)

board = [[" " for _ in range(3)] for _ in range(3)]

#let's make the board (thank you google)

def display_board():
    for row in board:
        print(" | ".join(row))
        print("---|---|---")

# getting the players input and placing it on the board
# a function with a while loop. here we ask the player for an input in which the program
# will loop until it is given a valid input. wherein it will change it to an integer so
# it works with the lists. - 1 because the index starts at 0 and we need to allign with python
# then to check if the move is valid program will check if the placement of the input is not chosen already
# if not it will place it and break


def player_input(player):
    while True:
        try:
            row = input(f"player {player}, enter the row (1-3): ")
            col = input(f"player {player}, enter the column (1-3): ")
    
            if row >= 0 and row < 3 and col >= 0 and col < 3 and board[col][row] == " ":
                board[col][row] = player
                break
            else:
                print("Wrong move try again")

        except ValueError:
            print("Please enter a number between 1 and 3.")

# check who won with a range thats going to iterate over the list to check if there are three spaces taken up
# i.e someone won, pointing out that three empty spaces don't count hence the ! = " "
# telling program to keep going if none of the conditions are met ( return None)

def check_win():
    for i in range(3):

# check rows and columns

        if board[i][0] == board[i][1] == board[i][2] != " ":
            return board[i][0]
        if board[0][i] == board[1][i] == board[2][i] != " ":
            return board[0][i]
        
 # check diagonals 
        
    if board[0][0] == board[1][1] == board[2][2] != " ":
        return board[0][0]
    if board[0][2] == board[1][1] == board[2][0] != " ":
        return board[0][2]
    
    return None

# now we actually play
# start by defining the play function that will call on all the functions we've already made
# the game will start with player X always and will loop for 9 times (all possible outcomes of the game)



def play():
    current_player = "X"
    for turn in range(9):
        # we call two of our first functions, one to represent the board, and one to ask the player
        # for their input 
        display_board()
        player_input(current_player)
        
        # third time we call the check_win() function to go through the conidtions we set up
        # as to conclude who is the winner. If there is a winner it will print the winner name (again f-string)
        # and finally the board function (visual conformation)
        winner = check_win()
        if winner:
            display_board()
            print(f"Player {winner} is the winner!")
            return
        
        # if there is no winner (obviously not after one round) the program will switch players
        current_player = "0" if current_player == "X" else "X"   


    # in the case of a tie it will print that its a tie (obvi the board for visual conformation)

    display_board()
    print("a tie has been made")

# finally we call on the play function to play the game
play() 

