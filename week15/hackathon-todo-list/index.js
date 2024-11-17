const fs = require('fs');
const readline = require('readline-sync');

const filePath = './tasks.json';

// loading tasks from file
const loadTasks = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(filePath, 'utf8');
    try {
        const tasks = JSON.parse(data);
        if (!Array.isArray(tasks)) {
            throw new Error('Data is not an array');
        }
        return tasks;
    } catch (error) {
        console.error('Invalid tasks.json. Resetting to an empty list:', error.message);
        fs.writeFileSync(filePath, JSON.stringify([])); // Reset to empty array
        return [];
    }
};

// save tasks to json
const saveTasks = (tasks) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    } catch (error) {
        console.error('Error saving tasks:', error.message);
    }
};

const tasks = loadTasks();

const deleteTasks = () => {
    if (tasks.length === 0) {
        console.log('No tasks to delete!');
        return;
    }

    console.log('\nYour To-Do List:');
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });

    const input = readline.question('Enter the numbers of the tasks to delete (seperate by comma): ');
    const taskNumbers = input.split(',').map((num) => parseInt(num.trim()));

    // validating task numvers
    const invalidNumbers = taskNumbers.filter((num) => isNaN(num) || num < 1 || num > tasks.length);
    if (invalidNumbers.length > 0) {
        console.log(`Invalid task numbers: ${invalidNumbers.join(', ')}. Please try again.`);
        return;
    }

    // Remove tasks in reverse order to prevent index shifting
    taskNumbers.sort((a, b) => b - a).forEach((num) => {
        const deletedTask = tasks.splice(num - 1, 1);
        console.log(`Task "${deletedTask}" has been deleted.`);
    });

    saveTasks(tasks);
    console.log('Selected tasks have been deleted.');
};

// menu
const displayMenu = () => {
    console.log('\nWhat would you like to do?');
    console.log('1. View Tasks');
    console.log('2. Add a Task');
    console.log('3. Delete Tasks');
    console.log('4. Exit');
    const choice = readline.question('Please choose an option: ');
    return choice;
};

// view tasks
const viewTasks = () => {
    console.log('\nYour To-Do List:');
    if (!Array.isArray(tasks) || tasks.length === 0) {
        console.log('No tasks yet!');
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
};

// first menu option (adding a task) functionality
const addTask = () => {
    const task = readline.question('Enter a new task: ');
    tasks.push(task); 
    saveTasks(tasks); 
    console.log('Task added successfully!');
};

// main loop
while (true) {
    const choice = displayMenu();
    if (choice === '1') {
        viewTasks();
    } 
    else if (choice === '2') {
        addTask();
    }
    else if (choice === '3') {
        deleteTasks();
    }
     else if (choice === '4') {
        console.log('Goodbye!');
        break;
    }
     else {
        console.log('Invalid choice. Please try again.');
    }
}