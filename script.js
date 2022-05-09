//VARIABLE AND UI INITIALIZATION
const grid = document.querySelector("#grid-container");

let gridSize = 24;
let ink = 'black';

document.querySelector('h2').textContent = gridSize + 'x' + gridSize;
createGrid(gridSize);

console.log(grid.offsetHeight);

//INITIALIZE EVENT LISTENERS
document.querySelector('#size-btn').addEventListener('click', promptSize);
document.querySelector('#clear-btn').addEventListener('click', shakeGrid);
document.querySelector('#black-ink').addEventListener('click', () => ink = 'black');
document.querySelector('#color-ink').addEventListener('click', () => ink = 'color');
document.querySelector('#eraser').addEventListener('click', () => ink = 'eraser');

//FUNCTION DECLARATIONS
function promptSize(){
    let input = 0;

    while(input < 12 || input > 48){
        input = prompt('How many pixels per row (12-48)');
        if(input === null) return;
    }

    gridSize = input;
    document.querySelector('h2').textContent = gridSize + 'x' + gridSize;
    clearGrid();
    createGrid(input);
}

function createGrid(size){
    for(let i = 0; i < size * size; i++){
        let square = document.createElement('div');
        
        square.classList.add('grid-square');
        square.addEventListener('mouseover', e => {
            if (ink == 'black') square.style.backgroundColor = 'black';
            else if (ink == 'color') square.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            else if (ink == 'eraser') square.style.backgroundColor = 'white';
        })
    
        square.style.height = (grid.offsetHeight/size) + 'px';
        square.style.width = (grid.offsetWidth/size) + 'px';
    
        grid.appendChild(square);
    }
}

//Deletes grid, only used when remaking right after
function clearGrid(){
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
}

//Doesnt delete the grid but makes all squares white, like shaking an etchasketch
function shakeGrid() {
    let elements = Array.from(grid.children);
    elements.forEach( (el) => el.style.backgroundColor = 'white');
}
