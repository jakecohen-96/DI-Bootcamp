export class Todo {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getTasks() {
        return this.tasks;
    }

    deleteTask(taskIndex) {
        if (taskIndex >= 0 && taskIndex < this.tasks.length) {
            this.tasks.splice(taskIndex, 1);
        } else {
            console.log('Invalid task index');
        }
    }

    clearTasks() {
        this.tasks = [];
    }
}