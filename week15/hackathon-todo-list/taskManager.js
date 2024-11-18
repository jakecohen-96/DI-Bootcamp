const fs = require('fs');

// Load and save tasks
const filePath = './tasks.json';

const loadTasks = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(filePath, 'utf8');
    try {
        const tasks = JSON.parse(data);
        if (!Array.isArray(tasks)) throw new Error('Data is not an array');
        return tasks;
    } catch (error) {
        console.error('Invalid tasks.json. Resetting to an empty list:', error.message);
        fs.writeFileSync(filePath, JSON.stringify([])); // Reset to empty array
        return [];
    }
};

const saveTasks = (tasks) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    } catch (error) {
        console.error('Error saving tasks:', error.message);
    }
};

const tasks = loadTasks();

const addTask = (description, category) => {
    tasks.push({ description, category });
    saveTasks(tasks);
};

const deleteTasks = (taskNumbers) => {
    taskNumbers.sort((a, b) => b - a).forEach(num => {
        tasks.splice(num - 1, 1);
    });
    saveTasks(tasks);
};

const clearAllTasks = () => {
    tasks.length = 0;
    saveTasks(tasks);
};

const editTask = (taskNumber, newDescription) => {
    tasks[taskNumber - 1].description = newDescription;
    saveTasks(tasks);
};

const editTaskCategory = (taskNumbers, newCategory) => {
    taskNumbers.forEach(num => {
        tasks[num - 1].category = newCategory;
    });
    saveTasks(tasks);
};

module.exports = {
    tasks,
    addTask,
    deleteTasks,
    clearAllTasks,
    editTask,
    editTaskCategory,
    loadTasks,
    saveTasks,
};