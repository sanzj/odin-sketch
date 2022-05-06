let grid = document.querySelector("#grid-container");
console.log(grid.offsetHeight);
console.log(grid.offsetWidth);


for(let i = 0; i < 16*16; i++){
    let square = document.createElement('div');
    
    square.classList.add('grid-square');
    square.addEventListener('mouseover', e => {
        square.style.backgroundColor = 'black';
    })

    square.style.height = (grid.offsetHeight/16) + 'px';
    square.style.width = (grid.offsetWidth/16) + 'px';

    grid.appendChild(square);
}