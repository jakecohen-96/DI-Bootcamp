const readline = require('readline-sync');
const {
    tasks,
    addTask,
    deleteTasks,
    clearAllTasks,
    editTask,
    editTaskCategory,
} = require('./taskManager');
const {
    searchTasksByKeyword,
    searchTasksByCategory,
    searchTasksByBoth,
} = require('./search');
const { askToGoBack } = require('./utils');

// Menu and Main Loop
const displayMenu = () => {
    console.log('\nWhat would you like to do?');
    console.log('1. View Tasks');
    console.log('2. Add a Task');
    console.log('3. Delete Tasks');
    console.log('4. Edit a Task');
    console.log('5. Edit Task Category');
    console.log('6. Clear All Tasks');
    console.log('7. Search Tasks');
    console.log('8. Exit');
    const choice = readline.question('Please choose an option: ');
    return choice;
};

const viewTasks = (taskList = tasks) => {
    console.log('\nYour To-Do List:');
    if (taskList.length === 0) {
        console.log('No tasks yet!');
        return;
    }
    taskList.forEach((task, index) => {
        console.log(`${index + 1}. ${task.description} [${task.category}]`);
    });
};

while (true) {
    const choice = displayMenu();

    if (choice === '1') {
        viewTasks();
    } 

    else if (choice === '2') {
        const description = readline.question('Enter new task: ');
        const category = readline.question('Enter task category: ');
        addTask(description, category);
        console.log('Task added successfully');
        
    } 

    else if (choice === '3') {
        viewTasks();
        const input = readline.question('Enter the task numbers to delete (comma-separated for multiple): ');
        const taskNumbers = input.split(',').map(num => parseInt(num.trim()));
        deleteTasks(taskNumbers);
        console.log('Tasks deleted successfully!');
    } 

    else if (choice === '4') {
        viewTasks();
        const taskNumber = readline.questionInt('Enter number of task to edit: ');
        const newDescription = readline.question('Please edit task (if empty no changes will be made): ');
        if (newDescription.trim() !== '') {
            editTask(taskNumber, newDescription);
            console.log('Task updated successfully!');
        } else {
            console.log('No changes were made to the task.');
        }
    } 

    else if (choice === '5') {
        viewTasks();

        const input = readline.question('Enter number of task category to update (comma-separated for multiple): ');
        const taskNumbers = input.split(',').map(num => parseInt(num.trim()));
        const newCategory = readline.question('Enter new category: ');
        editTaskCategory(taskNumbers, newCategory);
        console.log('Categories updated successfully');
    } 

    else if (choice === '6') {
        clearAllTasks();
        console.log('All tasks cleared');
    } 

    else if (choice === '7') {
        console.log('\nSearch Options:');
        console.log('1. Search by Keyword');
        console.log('2. Search by Category');
        console.log('3. Search by Both');

        const searchChoice = readline.question('Please select search option: ');

        if (searchChoice === '1') {
            const keyword = readline.question('Enter the keyword: ');
            const results = searchTasksByKeyword(tasks, keyword);
            viewTasks(results);

        } 

        else if (searchChoice === '2') {
            const existingCategories = [...new Set(tasks.map(task => task.category))];
            console.log('Available categories:');
            existingCategories.forEach((cat, index) => {
                console.log(`${index + 1}. ${cat}`);
            });

            const categoryChoice = readline.question('Enter the exact category to search for: ');
            const results = searchTasksByCategory(tasks, categoryChoice);
            viewTasks(results);
        }

        else if (searchChoice === '3') {
            const keyword = readline.question('Enter the keyword: ');
            const category = readline.question('Enter the category: ');
            const results = searchTasksByBoth(tasks, keyword, category);
            viewTasks(results);
        }
    }
    
    else if (choice === '8') {
        console.log('Goodbye!');
        break;
    } 
    
    else {
        console.log('Invalid choice. Please try again.');
    }
}