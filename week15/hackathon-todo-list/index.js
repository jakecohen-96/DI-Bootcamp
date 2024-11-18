const readline = require('readline-sync');
const { 
    tasks, 
    addTask, 
    deleteTasks, 
    clearAllTasks, 
    editTask, 
    editTaskCategory, 
    getNotificationTasks, 
    searchTasksByKeyword, 
    searchTasksByCategory, 
    searchTasksByBoth 
} = require('./taskManager');
const { showCalendar } = require('./calendar');
const { validateDate } = require('./utils');


const showNotifications = () => {
    const { overdueTasks, todayTasks, tomorrowTasks } = getNotificationTasks();
    
    console.log('\nNotifications:');
    if (overdueTasks.length > 0) {
        console.log('\nOverdue Tasks:');
        overdueTasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.description} [${task.category}] (Due: ${task.date})`);
        });
    } else {
        console.log('\nNo overdue tasks.');
    }
    
    if (todayTasks.length > 0) {
        console.log('\nTasks Due Today:');
        todayTasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.description} [${task.category}] (Due: ${task.date})`);
        });
    } else {
        console.log('\nNo tasks due today.');
    }
    
    if (tomorrowTasks.length > 0) {
        console.log('\nTasks Due Tomorrow:');
        tomorrowTasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.description} [${task.category}] (Due: ${task.date})`);
        });
    } else {
        console.log('\nNo tasks due tomorrow.');
    }
};


const displayMenu = () => {
    console.log('\n' + '-'.repeat(30));
    console.log('What would you like to do?');
    console.log('1. View Tasks');
    console.log('2. Add a Task');
    console.log('3. Delete Tasks');
    console.log('4. Edit a Task');
    console.log('5. Edit Task Category');
    console.log('6. Clear All Tasks');
    console.log('7. Search Tasks');
    console.log('8. View Calendar');
    console.log('9. Exit');
    console.log('-'.repeat(30) + '\n');
    const choice = readline.question('Please choose an option: ');
    return choice;
};

// Notify user of tasks
showNotifications();

const viewTasks = (taskList = tasks) => {
    console.log('\n' + '-'.repeat(30));
    console.log('Your To-Do List:');
    if (taskList.length === 0) {
        console.log('No tasks yet!');
        console.log('-'.repeat(30) + '\n');
        return;
    }
    taskList.forEach((task, index) => {
        console.log(`${index + 1}. ${task.description} [${task.category}] (Due: ${task.date})`);
    });
    console.log('-'.repeat(30) + '\n');
};

const askToGoBack = () => {
    const answer = readline.question('Do you want to return to the main menu? (y/n): ').toLowerCase();
    return answer === 'y';
};

while (true) {
    const choice = displayMenu();

    switch (choice) {
        case '1': // View Tasks
            do {
                viewTasks();
            } while (!askToGoBack());
            break;

        case '2': // Add a Task
            do {
                const description = readline.question('Enter new task: ');
                const category = readline.question('Enter task category: ');
                let date;

                while (true) {
                    date = readline.question('Enter task date (YYYY-MM-DD): ');

                    if (!validateDate(date)) {
                        console.log('Invalid date format. Please try again.');
                        continue;
                    }

                    const enteredDate = new Date(date);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0); 

                    if (enteredDate >= today) {
                        break; // Exit the loop if the date is valid and not in the past
                    }

                    console.log('The date cannot be in the past. Please enter a valid date.');
                }

                addTask(description, category, date);
                console.log('Task added successfully');
            } while (!askToGoBack());
            break;

        case '3': // Delete Tasks
            do {
                viewTasks();
                const input = readline.question('Enter the task numbers to delete (comma-separated for multiple): ');
                const taskNumbers = input.split(',').map(num => parseInt(num.trim()));
                deleteTasks(taskNumbers);
                console.log('Tasks deleted successfully!');
            } while (!askToGoBack());
            break;

        case '4': // Edit a Task
            do {
                viewTasks();
                const taskNumber = readline.questionInt('Enter number of task to edit: ');
                const newDescription = readline.question('Please edit task (if empty no changes will be made): ');
                if (newDescription.trim() !== '') {
                    editTask(taskNumber, newDescription);
                    console.log('Task updated successfully!');
                } else {
                    console.log('No changes were made to the task.');
                }
            } while (!askToGoBack());
            break;

        case '5': // Edit Task Category
            do {
                viewTasks();
                const categoryInput = readline.question('Enter number of task category to update (comma-separated for multiple): ');
                const categoryTaskNumbers = categoryInput.split(',').map(num => parseInt(num.trim()));
                const newCategory = readline.question('Enter new category: ');
                editTaskCategory(categoryTaskNumbers, newCategory);
                console.log('Categories updated successfully');
            } while (!askToGoBack());
            break;

        case '6': // Clear All Tasks
            const confirmation = readline.question('Are you sure you want to clear all tasks? This action cannot be undone. (y/n): ').toLowerCase();
            if (confirmation === 'y') {
                clearAllTasks();
                console.log('All tasks cleared');
            } else {
                console.log('Operation cancelled. Returning to the menu.');
            }
            break;

        case '7': // Search Tasks
            do {
                console.log('\nSearch Options:');
                console.log('1. Search by Keyword');
                console.log('2. Search by Category');
                console.log('3. Search by Both');

                const searchChoice = readline.question('Please select search option: ');

                if (searchChoice === '1') {
                    const keyword = readline.question('Enter the keyword: ');
                    const results = searchTasksByKeyword(tasks, keyword);
                    viewTasks(results);

                } else if (searchChoice === '2') {
                    const existingCategories = [...new Set(tasks.map(task => task.category))];
                    console.log('Available categories:');
                    existingCategories.forEach((cat, index) => {
                        console.log(`${index + 1}. ${cat}`);
                    });

                    const categoryChoice = readline.question('Enter the exact category to search for: ');
                    const results = searchTasksByCategory(tasks, categoryChoice);
                    viewTasks(results);

                } else if (searchChoice === '3') {
                    const keyword = readline.question('Enter the keyword: ');
                    const category = readline.question('Enter the category: ');
                    const results = searchTasksByBoth(tasks, keyword, category);
                    viewTasks(results);
                }
            } while (!askToGoBack());
            break;

        case '8': // View Calendar
            do {
                showCalendar();
            } while (!askToGoBack());
            break;

        case '9': // Exit
            console.log('Goodbye!');
            process.exit();

        default:
            console.log('Invalid choice. Please try again.');
    }
}