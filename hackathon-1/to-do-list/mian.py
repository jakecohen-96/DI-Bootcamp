from todo_manager import ToDoList

def main_menu():
    print("\nTo-Do List Menu:")
    print("1. View Tasks")
    print("2. Add Task")
    print("3. Remove Task")
    print("4. Mark Task as Completed")
    print("5. Edit Task")
    print("6. Exit")

def main():
    todo_list = ToDoList()
    while True:
        main_menu()
        choice = input("Please choose an option: ")

        if choice == "1":
            todo_list.view_tasks()

        elif choice == "2":
            task = input("Please enter a task to set up")
            todo_list.add_tasks(task)
            todo_list.view_tasks()

        elif choice == "3":
            task_num = input("Please enter the number of the task you wish to delete: ")
            todo_list.remove_tasks(task_num)
            todo_list.view_tasks()
        
        elif choice == "4":
            task_comp = input("Please choose task you wish to mark completed: ")
            todo_list.complete_tasks(task_comp)
            todo_list.view_tasks()

        elif choice == "5":
            task_edit = input("Please enter number of task you wish to edit: ")
            todo_list.edit_tasks(task_edit)
            todo_list.view_tasks()

        elif choice == "6":
            print("Thank you for using the app! Here is your final list. Goodbye!")
            todo_list.view_tasks()
            break

        else:
            print("Invalid option chosen!")
            break


if __name__ == "__main__":
    main()