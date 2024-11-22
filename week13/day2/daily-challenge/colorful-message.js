const chalk = require('chalk');

function displayMessage(message) {
    console.log(chalk.blue.bold(message));
}

module.exports = displayMessage;