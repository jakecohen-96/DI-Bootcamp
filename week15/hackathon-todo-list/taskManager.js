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

const addTask = (description, category, date) => {
    tasks.push({ description, category, date });
    saveTasks(tasks);
};

const clearAllTasks = () => {
    tasks.length = 0;
    saveTasks(tasks); 
};


const getNotificationTasks = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to the start of the day

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const overdueTasks = tasks.filter(task => new Date(task.date) < today);
    const todayTasks = tasks.filter(task => new Date(task.date).toDateString() === today.toDateString());
    const tomorrowTasks = tasks.filter(task => new Date(task.date).toDateString() === tomorrow.toDateString());

    return { overdueTasks, todayTasks, tomorrowTasks };
};


module.exports = {
    tasks,
    addTask,
    clearAllTasks,
    saveTasks,
    loadTasks,
    getNotificationTasks,
};