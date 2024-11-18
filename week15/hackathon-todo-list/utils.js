const readline = require('readline-sync');

const askToGoBack = () => {
    const answer = readline.question('Do you want to return to the main menu? (y/n): ').toLowerCase();
    return answer === 'y';
};

module.exports = { askToGoBack };