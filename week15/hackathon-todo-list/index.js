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

const displayMenu = () => {
    console.log('\nWhat would you like to do?');
    console.log('1. View Tasks');
    console.log('2. Add a Task');
    console.log('3. Exit');
    const choice = readline.question('Enter your choice: ');
    return choice;
};


