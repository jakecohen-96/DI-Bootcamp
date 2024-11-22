import { Todo } from './todo.js';

const myTodoList = new Todo();

// Add task
myTodoList.addTask('test taskt');
myTodoList.addTask('test task 2');
console.log('tasks:', myTodoList.getTasks());

// Delete a task
myTodoList.deleteTask(0);
console.log('Tasks after deletion:', myTodoList.getTasks());

// Clear all tasks
myTodoList.clearTasks();
console.log('Tasks after clearing:', myTodoList.getTasks());