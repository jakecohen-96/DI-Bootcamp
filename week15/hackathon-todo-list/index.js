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

// menu
const displayMenu = () => {
    console.log('\nWhat would you like to do?');
    console.log('1. View Tasks');
    console.log('2. Add a Task');
    console.log('3. Exit');
    const choice = readline.question('Enter your choice: ');
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
        console.log('Goodbye!');
        break;
    }
     else {
        console.log('Invalid choice. Please try again.');
    }
}