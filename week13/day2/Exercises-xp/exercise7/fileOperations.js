const fs = require('fs');

const sourceFile = './source.txt';
const destinationFile = './destination.txt';

// reading
fs.readFile(sourceFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('Source file:', data);

    // writing
    fs.writeFile(destinationFile, data, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }
        console.log('Content successfully copied to file.');
    });
});