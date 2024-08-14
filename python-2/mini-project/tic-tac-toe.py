# will use comments whenever possible
# int. of board, strings returning in a list of lists (easy to manage) of possible outcomes (3*3)

board = [[" " for _ in range(3)] for _ in range(3)]

#let's make the board (thank you google)

def display_board():
    for row in board:
        print(" | ".join(row))
        print("---|---|---")

# getting the players input and placing it on the board
# a function with a while loop, here we ask the player for an input in which the program
# will loop until it is given a valid input.

def player_input(player):
    while True:
        try:
            row = int(input(f"player {player}, enter the row (1-3): ")) - 1
            col = int(input(f"player {player}, enter the column (1-3): ")) - 1
            if row >= 0 and row < 3 and col >= 0 and col < 3 and board[col][row] == " ":
                board[col][row] = player
                break
