const container = document.getElementById('container');
const containerSize = container.clientHeight;

const button = document.getElementById('button');
button.addEventListener('click', () => {
  gridSize = prompt("Enter the size of the grid");
  clearGrid();
  makeGrid(gridSize);
});

let gridSize = 16;  //16x16 is the size of our initial grid


//Creates the grid based on gridSize
function makeGrid(gridSize) {
  for (let i = 0; i < gridSize*gridSize; i++) {
    let div = document.createElement('div');
    div.classList.add('grid');
    container.style.cssText = `grid-template-rows: repeat(${gridSize}, auto);                                           grid-template-columns: repeat(${gridSize}, auto)`;
    setBackground(div);
    container.appendChild(div);
  }
}

//Gets a random number from 1 to 255
function getRandomNumber() {
  return Math.floor(Math.random() * 255) + 1;
}

function clearGrid() {
  while(container.firstChild) {
    container.firstChild.remove();
  }
}

function setBackground(div) {
  //Get random values for rgb
  let r = getRandomNumber();
  let g = getRandomNumber();
  let b = getRandomNumber();

  let rChange = r * 0.1;
  let gChange = g * 0.1;
  let bChange = b * 0.1;
  
  div.addEventListener('mouseenter', () => {
    div.style.background = `rgb(${r}, ${g}, ${b})`;
    r = r-rChange;
    g = g-gChange;
    b = b-bChange;
  });
}

makeGrid(gridSize);