const Calendar = require('node-calendar');
const { loadTasks } = require('./taskManager'); 

const showCalendar = () => {
    const tasks = loadTasks(); // Dynamically fetch tasks
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0-based index for months

    console.log(`\nCalendar for ${today.toLocaleString('default', { month: 'long' })} ${year}`);
    console.log('Mo Tu We Th Fr Sa Su');

    const firstDay = new Date(year, month, 1).getDay(); // Day of the week (0=Sunday)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Last day of the month

    const calendar = [];
    let week = new Array(firstDay).fill('  '); // Start with blanks for the first week

    for (let day = 1; day <= daysInMonth; day++) {
        const dayString = String(day).padStart(2, ' ');
        const tasksOnDay = tasks.filter(task => {
            const taskDate = new Date(task.date);
            return (
                taskDate.getFullYear() === year &&
                taskDate.getMonth() === month &&
                taskDate.getDate() === day
            );
        });
        week.push(tasksOnDay.length > 0 ? `${dayString}*` : dayString);

        if (week.length === 7 || day === daysInMonth) {
            calendar.push(week.join(' '));
            week = [];
        }
    }

    console.log(calendar.join('\n'));
    console.log('\n* Dates with tasks');
};

module.exports = { showCalendar };