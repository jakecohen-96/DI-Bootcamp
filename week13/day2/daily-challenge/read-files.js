const fs = require('fs');

function readFileContent(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log('File Content:', content);
}

module.exports = readFileContent;