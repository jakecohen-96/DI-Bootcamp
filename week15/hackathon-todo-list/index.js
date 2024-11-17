const fs = require('fs');
const readline = require('readline-sync');

const filePath = './tasks.json';

// loading tasks from file
const loadTasks = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

// save tasks to file
const saveTasks = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
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
    if (tasks.length === 0) {
        console.log('No tasks yet, please add some first');
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
};

// first menu option functionality
const addTask = () => {
    const task = readline.question('Enter a new task please: ');
    tasks.push(task);
    saveTasks(task);
    console.log('Task added succefully!');
    
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