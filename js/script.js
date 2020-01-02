const container = document.querySelector('#container');
const containerSize = container.clientHeight;
let gridSize = 16;

function initializeGrid() {
  for (let i = 0; i < gridSize*gridSize; i++) {
    let div = document.createElement('div');
    div.classList.add('grid');
    div.style.height = containerSize/gridSize + 'px';
    div.style.width = containerSize/gridSize + 'px';
    container.appendChild(div);
  }
}

initializeGrid();