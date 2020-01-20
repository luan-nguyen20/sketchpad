const gridContainer = document.querySelector('.gridContainer');

window.onload = createSquareGrid(3);

//create a grid with same number of rows and columns.
//size = row num = column num
function createSquareGrid(size){
    //num of cells = size * size
    for(i=0; i < size*size; i++){ createCell(); }

    //num colums to create = size
    //same as:
    //.gridContainer {
    //  grid-template-columns: repeat(size, 1fr);
    //}
    //fr unit is a fraction of the free space of the grid container.
    gridContainer.style.gridTemplateColumns = 'repeat(' + size + ',1fr)';
}

//create cell and add as child of container
function createCell(){
    let cell = document.createElement('div');
    cell.classList.add('cell');
    gridContainer.appendChild(cell);
}

//mouse hover event listener for cells
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseover',changeBGColor));

//change color by adding class 'hover'
function changeBGColor(e){ e.target.classList.add('hover'); }

//event listener for Clear button
const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click',clear);

//clear by removing class 'hover'
function clear(){
    cells.forEach(cell => cell.classList.remove('hover'));
}