class ToDoList():
    def __init__(self):
        self.tasks = [
            {"task": "Buy groceries", "completed": False},
            {"task": "Read a book", "completed": False},
            {"task": "Clean the house", "completed": False}
            ]

    def view_tasks(self):
        if not self.tasks:
            print('No items present in the list. Please add some first.')
        else:
            for i, task in enumerate(self.tasks):
                status = '✔️' if task.get('completed') else '❌'
                print(f'{i + 1}, {task['task']} - {status}')

    def add_tasks(self, task):
        pass        

    def remove_tasks(self, task_number):
        pass

    def complete_tasks(self, task_number):
        if 0 <= task_number < len(self.tasks):
            self.tasks[task_number]['completed'] = True
            print(f'{self.tasks[task_number]['task']} completed!')
        else:
            print('Invalid option chosen')

    def edit_task(self, task_number, new_task):
        pass


if __name__ == "__main__":
    todo_list = ToDoList()

    print('tasks before complete: ')
    todo_list.view_tasks()

    todo_list.complete_tasks(1)
    print('completed task 2')

    print('tasks before complete: ')
    todo_list.view_tasks()    