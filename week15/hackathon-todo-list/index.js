const fs = require('fs');
const readline = require('readline-sync');

const filePath = './tasks.json';

// Load tasks from file
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

// Save tasks to file
const saveTasks = (tasks) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    } catch (error) {
        console.error('Error saving tasks:', error.message);
    }
};

const tasks = loadTasks();

const deleteTasks = () => {
    while (true) {
        if (tasks.length === 0) {
            console.log('No tasks to delete!');
            return;
        }

        console.log('\nYour To-Do List:');
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });

        const input = readline.question('Enter the numbers of the tasks to delete (separate by comma): ');
        const taskNumbers = input.split(',').map((num) => parseInt(num.trim()));

        // Validate task numbers
        const invalidNumbers = taskNumbers.filter((num) => isNaN(num) || num < 1 || num > tasks.length);
        if (invalidNumbers.length > 0) {
            console.log(`Invalid task numbers: ${invalidNumbers.join(', ')}. Please try again.`);
            continue;
        }

        // Remove tasks in reverse order to prevent index shifting
        taskNumbers.sort((a, b) => b - a).forEach((num) => {
            const deletedTask = tasks.splice(num - 1, 1);
            console.log(`Task "${deletedTask}" has been deleted.`);
        });

        saveTasks(tasks);
        console.log('Selected tasks have been deleted.');

        if (askToGoBack()) break;
    }
};

// Display menu
const displayMenu = () => {
    console.log('\nWhat would you like to do?');
    console.log('1. View Tasks');
    console.log('2. Add a Task');
    console.log('3. Delete Tasks');
    console.log('4. Exit');
    const choice = readline.question('Please choose an option: ');
    return choice;
};

// Ask to go back to the menu
const askToGoBack = () => {
    const answer = readline.question('Do you want to return to the main menu? (y/n): ').toLowerCase();
    return answer === 'y';
};

// View tasks
const viewTasks = () => {
    while (true) {
        console.log('\nYour To-Do List:');
        if (tasks.length === 0) {
            console.log('No tasks yet!');
        } else {
            tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        }

        if (askToGoBack()) break;
    }
};

// Add a task
const addTask = () => {
    while (true) {
        const task = readline.question('Enter a new task: ');
        tasks.push(task); 
        saveTasks(tasks);
        console.log('Task added successfully!');

        if (askToGoBack()) break;
    }
};

// Main loop
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