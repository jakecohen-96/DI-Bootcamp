from todo_manager import ToDoList

def main_menu():
    print("\nTo-Do List Menu:")
    print("1. View all Tasks in list")
    print("2. Add a new Task")
    print("3. Remove a Task")
    print("4. Mark Task as Completed")
    print("5. Mark a Task as InComplete")
    print("6. Edit a Task")
    print("7. Clear list")
    print("8. Exit")

def main():
    todo_list = ToDoList()
    while True:
        main_menu()
        choice = input("Please choose an option: ")

        if choice == "1":
            todo_list.view_tasks()

        elif choice == "2":
            task = input("Please enter a task to set up: ")
            todo_list.add_tasks(task)
            todo_list.view_tasks()
            todo_list.save_to_file()

        elif choice == "3":
            task_num = int(input("Please enter the number of the task you wish to delete: "))
            todo_list.remove_tasks(task_num)
            todo_list.view_tasks()
            todo_list.save_to_file()
        
        elif choice == "4":
            task_comp = int(input("Please choose task you wish to mark completed: "))
            todo_list.complete_tasks(task_comp)
            todo_list.view_tasks()
            todo_list.save_to_file()

        elif choice == "5":
            task_incomp = int(input('Please enter number of task you wish to mark incomplete: '))
            todo_list.incomplete_tasks(task_incomp)
            todo_list.view_tasks()
            todo_list.save_to_file()

        elif choice == "6":
            task_edit_numb = int(input("Please enter number of task you wish to edit: "))
            task_edit = input("Please enter what you wish to change it to: ")
            todo_list.edit_tasks(task_edit_numb, task_edit)
            todo_list.view_tasks()
            todo_list.save_to_file()

        elif choice == "7":
            todo_list.clear_all()
            todo_list.save_to_file()

        elif choice == "8":
            if todo_list.tasks:
                print("Thank you for using the app! Here is your final list. Goodbye!")
                todo_list.view_tasks()
            else:
                print("Thank you for using the app!")
            todo_list.save_to_file()
            break

        else:
            print("Invalid option chosen!")
            break


if __name__ == "__main__":
    main()