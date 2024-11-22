const greet = require('./greeting');
const displayMessage = require('./colorful-message');
const readFileContent = require('./read-file');

const message = greet('Jake');
displayMessage(message);

const filePath = './files/file-data.txt';
readFileContent(filePath);