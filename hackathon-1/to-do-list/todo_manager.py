class ToDoList():
    def __init__(self):
        self.tasks = []

    def view_task(self):
        if not self.tasks:
            print('No items present in the list. Please add some first.')
        else:
            for i, task in enumerate(self.tasks):
                status = '✔️' if task.get('completed') else '❌'
                print(f'{i + 1}, {task['task']} - {status}')

    def add_task(self, task):
        pass        

    def remove_task(self, task_number):
        pass

    def complete_task(self, task_number):
        pass

    def edit_task(self, task_number, new_task):
        pass


    