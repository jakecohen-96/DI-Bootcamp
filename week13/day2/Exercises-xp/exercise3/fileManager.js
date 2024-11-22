const fs = require('fs');

// create and write file
const filePath = './myTextFile.txt';
fs.writeFileSync(filePath, 'This is the content of the file.', 'utf8');
console.log('File created and content written.');

// read file
const fileContent = fs.readFileSync(filePath, 'utf8');
console.log('Reading file Content:', fileContent);

// update file 
fs.appendFileSync(filePath, '\nThis is the updated content.', 'utf8');
console.log('Content appended to the file.');

// verify
const updatedContent = fs.readFileSync(filePath, 'utf8');
console.log('Updated File Content:', updatedContent);