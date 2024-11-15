# Initialize the board as a 3x3 list of lists
board = [[" " for _ in range(3)] for _ in range(3)]

# Function to display the Tic Tac Toe board
def display_board():
    for row in board:
        print(" | ".join(row))
        print("---|---|---")

# Function to get the player's input and place their mark on the board
def player_input(player):
    while True:
        try:
            row = int(input(f"Player {player}, enter the row (1-3): ")) - 1
            col = int(input(f"Player {player}, enter the column (1-3): ")) - 1
            if row >= 0 and row < 3 and col >= 0 and col < 3 and board[row][col] == " ":
                board[row][col] = player
                break
            else:
                print("Invalid move. Try again.")
        except ValueError:
            print("Please enter a number between 1 and 3.")

# Function to check whether there is a winner
def check_win():
    # Check rows, columns, and diagonals for a win
    for i in range(3):
        # Check rows and columns
        if board[i][0] == board[i][1] == board[i][2] != " ":
            return board[i][0]
        if board[0][i] == board[1][i] == board[2][i] != " ":
            return board[0][i]

    # Check diagonals
    if board[0][0] == board[1][1] == board[2][2] != " ":
        return board[0][0]
    if board[0][2] == board[1][1] == board[2][0] != " ":
        return board[0][2]

    return None

# Main function to play the game
def play():
    current_player = "X"
    for turn in range(9):
        display_board()
        player_input(current_player)
        
        winner = check_win()
        if winner:
            display_board()
            print(f"Player {winner} wins!")
            return
        
        # Switch players
        current_player = "O" if current_player == "X" else "X"
    
    # If all 9 squares are filled and there's no winner
    display_board()
    print("It's a tie!")

# Start the game
play()