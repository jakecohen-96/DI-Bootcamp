from game import play

def get_user_menu_choice():
    print("\nMenu:")
    print('1. Start a new game')
    print('2. Show results')
    print('3. Exit')

    user_choice = input("Please choose an option: ").strip()
    if user_choice in ['1', '2', '3']:
        return user_choice
    else:
        print("Invalid choice, please select 1, 2, or 3.")
        return get_user_menu_choice()
    
def print_results(results):
    print("\nGame Results:")
    print(f"Wins: {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws: {results['draw']}")
    print("Thanks for playing!")
        
def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}
    
    while True:
        choice = get_user_menu_choice()
        
        if choice == '1':
            game = play()
            result = game.play()
            results[result] += 1
        elif choice == '2':
            print_results(results)
        elif choice == '3':
            print_results(results)
            break

# I've seen people use this alot, apparenlty it's good practice so i will use it as well
if __name__ == "__main__":
    main()