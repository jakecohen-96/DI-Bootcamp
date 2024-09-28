
let selectedColor = '#000000'
let mouseClick = false;

const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', (event) => {
    selectedColor = event.target.value;
});

const grid = document.getElementById('grid');
for (let i = 0; i < 500; i++) { const cell = document.createElement('div');
    cell.addEventListener('click', () => {
        cell.style.backgroundColor = selectedColor;
    });
    cell.addEventListener('mouseover', () => {
        if (mouseClick) {
            cell.style.background = selectedColor;
        }
    });
    grid.appendChild(cell);
}

document.body.addEventListener('mousedown', () => {
    mouseClick = true;
});
document.body.addEventListener('mouseup', () => {
    mouseClick = false;
});

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('#grid div');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});