const container = document.querySelector('.gridContainer');

window.onload = createGrid;

function createGrid(cellNum){
    cellNum=256;
    for(i=0; i < cellNum; i++){
        createCell();
    }
}

function createCell(){
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = 'hello'
    container.appendChild(cell);
}
