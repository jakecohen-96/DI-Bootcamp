class ToDoList():
    def __init__(self):
        self.tasks = []

    def view_tasks(self):
        if not self.tasks:
            print('No items present in the list. Please add some first.')
        else:
            for i, task in enumerate(self.tasks):
                status = '✔️' if task.get('completed') else '❌'
                print(f'{i + 1} - {task['task']}: {status}')

    def add_tasks(self, task):
        new_task = {"task": task, "completed": False}
        self.tasks.append(new_task)
        print(f'"{task}" added!')

    def remove_tasks(self, task_number):
        task_index = task_number - 1
        if 0 <= task_index < len(self.tasks):
            removed_task = self.tasks.pop(task_index)
            print(f'Task of "{removed_task['task']}" removed!')
        else:
            print('Invalid option chosen')

    def complete_tasks(self, task_number):
        task_index = task_number - 1
        if 0 <= task_index < len(self.tasks):
            self.tasks[task_index]['completed'] = True
            print(f'{self.tasks[task_index]["task"]} completed!')
        else:
            print('Invalid option chosen')

    def edit_tasks(self, task_number, new_task):
        task_index = task_number - 1
        if 0 <= task_index < len(self.tasks):
            old_task = self.tasks[task_index]['task']
            self.tasks[task_index]['task'] = new_task
            self.tasks[task_index]['completed'] = False
            print(f'The task "{old_task}" has been updated to "{new_task}". \nIf this task was completed, it has also been changed to "Incomplete"')
        else:  
            print('Invalid option chosen')