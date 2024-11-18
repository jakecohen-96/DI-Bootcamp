const readline = require('readline-sync');

const askToGoBack = () => {
    const answer = readline.question('Do you want to return to the main menu? (y/n): ').toLowerCase();
    return answer === 'y';
};


const validateDate = (date) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(date)) return false;

    const [year, month, day] = date.split('-').map(Number);
    const isValid = !isNaN(Date.parse(`${year}-${month}-${day}`));
    return isValid;
};

module.exports = { askToGoBack, validateDate };