//VARIABLE AND UI INITIALIZATION
const grid = document.querySelector("#grid-container");

let gridSize = 24;
let ink = 'color';

document.querySelector('h1').textContent = gridSize;
createGrid(gridSize);


//INITIALIZE EVENT LISTENERS
document.querySelector('#size-btn').addEventListener('click', e => promptSize());
document.querySelector('#black-ink').addEventListener('click', e => ink = 'black');
document.querySelector('#color-ink').addEventListener('click', e => ink = 'color');
document.querySelector('#eraser').addEventListener('click', e => ink = 'eraser');

//FUNCTION DECLARATIONS
function promptSize(){
    let input = 0;

    while(input < 12 || input > 48){
        input = prompt('How many pixels per row (12-48)');
    }

    gridSize = input;
    document.querySelector('h1').textContent = gridSize;
    clearGrid();
    createGrid(input);
}

function createGrid(size){
    for(let i = 0; i < size * size; i++){
        let square = document.createElement('div');
        
        square.classList.add('grid-square');
        square.addEventListener('mouseover', e => {
            if (ink == 'black') square.style.backgroundColor = 'black';
            else if (ink == 'color') square.style.backgroundColor = 'red';
            else if (ink == 'eraser') square.style.backgroundColor = 'white';
        })
    
        square.style.height = (grid.offsetHeight/size) + 'px';
        square.style.width = (grid.offsetWidth/size) + 'px';
    
        grid.appendChild(square);
    }
}

function clearGrid(){
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
}
