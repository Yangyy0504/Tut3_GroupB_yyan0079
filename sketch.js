let roadMetrics = [
  [0,1,0,2,0,0,1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,1,0,2,0],
  [1,3,1,1,1,1,1,1,3,1,4,1,1,1,1,1,4,1,1,1,1,1,1,1,4,1,4,1,4,1,1,1,1,4,4,1,1,1,4,3,1,4,1,3,4,1,4],

  [0,4,0,4,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,4,0,3,0,4,0,2,0],
  [0,1,0,1,0,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,1,0,4,0],
  [0,1,0,1,0,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,4,0,1,0],
  [0,3,0,2,0,0,3,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,0,0,2,0],
  [0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,3,0,1,0,0,0,1,0],
  [0,1,0,4,0,0,1,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,4,0],

 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

  [0,1,0,4,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,4,0,4,0],
  [0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,3,0,1,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,3,0],
  [0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,4,0],
  [0,1,0,4,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,4,0,1,0],
  [0,2,0,1,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,4,0,1,0,1,0,1,0],
  [0,1,0,1,0,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,4,0,2,0],
  [0,1,0,1,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0],
  [0,4,0,1,0,0,3,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0],

  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,1,0,0,3,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0],
  [0,0,0,1,0,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,1,0],
  [0,0,0,1,0,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,1,0,4,0],

  [1,2,4,3,1,1,3,4,1,1,4,3,1,1,2,4,4,1,2,4,4,4,3,1,1,4,1,4,1,1,2,4,1,4,1,1,3,1,1,2,1,1,4,2,1,2,4],

  [0,0,0,1,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,0,0,2,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,3,0,0,0,4,0,0,0,0,0,0,0,3,0,0,0,0,0,3,0],
  [0,0,0,1,0,0,3,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,4,0],
  [0,0,0,4,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],

 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,2,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0],

[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,3,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,4,0],
  [0,0,0,4,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0],
  [1,3,1,2,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0],
  [0,0,0,4,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,2,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,0,3,0],
  [1,3,1,2,0,0,3,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0],
  [0,0,0,4,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0],
  [0,0,0,1,0,0,2,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,3,1,1,1,4,1,2,0],
  [0,0,0,1,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  
 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,4,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,0,0,1,0,0,3,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0],
  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,0,0,4,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,3,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,1,0],
  [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0]
];

let redBlocks = [];
let yellowBlocks = [];
let blueBlocks = [];
let grayBlocks = [];
let canvas;

function windowResized() {
  resizeCanvas(558, 558);
  canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
}

function setup() {
  canvas = createCanvas(558, 558);
  canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
  for (let i = 0; i < roadMetrics.length; i++) {
    let row = roadMetrics[i];
    for (let j = 0; j < row.length; j++) {
      switch(row[j]) {
        case 1:
          yellowBlocks.push(new Block(color(225, 201, 41), 558 / row.length * j, 558 / 50 * i, 558 / row.length, 558 / 50));
          break;
        case 2:
          redBlocks.push(new Block(color(175,57,43), 558 / row.length * j, 558 / 50 * i, 558 / row.length, 558 / 50));
          break;
        case 3:
          blueBlocks.push(new Block(color(57, 86, 151), 558 / row.length * j, 558 / 50 * i, 558 / row.length, 558 / 50));
          break;
        case 4:
          grayBlocks.push(new Block(color(217, 214, 209), 558 / row.length * j, 558 / 50 * i, 558 / row.length, 558 / 50));
          break;
        default:
          break;
      }
    }
  }
}

class Block {
  constructor(color, x, y, width, height) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

function drawAllBlocks() {
  for (let redBlock of redBlocks) {
    fill(redBlock.color);
    noStroke();
    rect(redBlock.x, redBlock.y, redBlock.width, redBlock.height);
  }
  for (let yellowBlock of yellowBlocks) {
    fill(yellowBlock.color);
    noStroke();
    rect(yellowBlock.x, yellowBlock.y, yellowBlock.width, yellowBlock.height);
  }
  for (let blueBlock of blueBlocks) {
    fill(blueBlock.color);
    noStroke();
    rect(blueBlock.x, blueBlock.y, blueBlock.width, blueBlock.height);
  }
  for (let grayBlock of grayBlocks) {
    fill(grayBlock.color);
    noStroke();
    rect(grayBlock.x, grayBlock.y, grayBlock.width, grayBlock.height);
  }
}

function draw() {
  background(242, 243, 238);
  drawAllBuildings();
  drawAllBlocks();
  drawAxisCoordinates(); 
}

function drawAllBuildings() {
  drawBuildings(83, 33.90, 48, 18, color(225, 201, 41));
  drawBuildings(92, 21.90, 24, 68, color(175, 57, 43));
  drawBuildings(92, 52, 24, 13, color(217, 214, 209));
  
}

function drawBuildings(x, y, width, height, color) {
  fill(color);
  rect(x, y, width, height);
  noStroke();
}

function drawAxisCoordinates() {
  fill(0);
  textSize(12);

  let numRows = roadMetrics.length;
  let numCols = roadMetrics[0].length;

  let cellWidth = width / numCols;
  let cellHeight = height / numRows;


  for (let j = 0; j < numCols; j++) {
    text(`${j}`, j * cellWidth + cellWidth / 2 - 6, 10);
  }

 
  for (let i = 0; i < numRows; i++) {
    text(`${i}`, 2, i * cellHeight + cellHeight / 2 + 4);
  }
}
