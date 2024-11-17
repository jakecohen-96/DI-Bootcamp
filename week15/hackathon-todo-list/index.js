const fs = require('fs');
const readline = require('readline-sync');

const filePath = './tasks.json';

const loadTasks = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

const saveTasks = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

const tasks = loadTasks();

console.log('Welcome to your To-Do List');