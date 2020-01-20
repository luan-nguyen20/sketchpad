const container = document.querySelector('.gridContainer');

window.onload = createGrid;

let gridArray=[];

function createGrid(cellCount){
    cellCount=256;
    for(i=0; i < cellCount; i++){
        createCell(i);
    }
    //gridArray = Array.from(document.querySelectorAll('.cell'));
    //console.log(document.querySelectorAll('.cell'));
    //console.log(gridArray);
}

//console.log(gridArray);

function createCell(cellNum){
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = cellNum;

    let aspectRatioBoxInside = document.createElement('div');
    aspectRatioBoxInside.classList.add('aspectRatioBoxInside');
    aspectRatioBoxInside.textContent = 'hi';
    cell.appendChild(aspectRatioBoxInside);

    container.appendChild(cell);
    gridArray.push(aspectRatioBoxInside);
    //console.log(gridArray);
}
console.log(gridArray);

//const cells = Array.from(document.querySelectorAll('.cell'));
//console.log(cells);
//console.log(document.querySelectorAll('.cell'));

gridArray.forEach(cell => cell.addEventListener('click',changeBGColor));

function changeBGColor(e){
    //e.target.classList.add('hover');
    //console.log(e.target);
    console.log(e);
}
