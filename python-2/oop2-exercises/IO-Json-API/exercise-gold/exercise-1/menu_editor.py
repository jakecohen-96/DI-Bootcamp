from menu_manager import MenuManager

def load_manager():
    return MenuManager()

def show_user_menu():
    print("\nRestaurant Menu Manager")
    print("1. Show Menu")
    print("2. Add Item to Menu")
    print("3. Remove Item from Menu")
    print("4. Exit")   

def add_item_to_menu(manager):
    name = input('Please add item name: ')
    price = float(input('Please add a price: '))
    manager.add_item(name, price)
    print('added!')

def remove_item_from_menu(manager):
    name = input('Please enter item name to delete: ')
    if manager.remove_item(name):
        print('dome')
    else:
        print('Item not found!')


def show_restaurant_menu(manager):
     print("\nCurrent Menu:")
     for item in manager.menu['items']:
        print(f"{item['name']}: ${item['price']}")        

def main():
    manager = load_manager()