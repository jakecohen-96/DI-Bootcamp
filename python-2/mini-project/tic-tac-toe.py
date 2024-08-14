# will use comments whenever possible
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
            row = int(input(f"player {player}, enter the row (1-3): ")) - 1
            col = int(input(f"player {player}, enter the column (1-3): ")) - 1
            if row >= 0 and row < 3 and col >= 0 and col < 3 and board[col][row] == " ":
                board[col][row] = player
                break
