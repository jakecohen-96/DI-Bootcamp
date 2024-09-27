const colors = [
'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 
    'pink', 'gray', 'black', 'white', 'cyan'
];

let selectedColor = 'black';

const palette = document.getElementById('palette');
colors.forEach(color => {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = color;
    colorDiv.addEventListener('click', () => {
        selectedColor = color;
    });
    palette.appendChild(colorDiv);
});

const grid = document.getElementById('grid');
for (let i = 0; i < 400; i++) { const cell = document.createElement('div');
    cell.addEventListener('click', () => {
        cell.style.backgroundColor = selectedColor;
    });
    grid.appendChild(cell);
}

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('#grid div');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});