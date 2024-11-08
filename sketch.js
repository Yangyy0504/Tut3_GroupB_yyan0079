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
let blackBlocks = [];
let canvas;
let roads = [];
let currentRoadIndex = 0;
let lastRoadChangeTime = 0;
let isCurrentRoadActive = false;
let blackCarX = 0;
let blackCarWidth = 0;
let blackCarY = 0;
let blackCarSpeed = 0.5; // Initial speed of the car
let accelerationRate = 0.1; // Rate at which the car accelerates

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
        case 5:
          blackBlocks.push(new Block(color(0, 0, 0), 558 / row.length * j, 558 / 50 * i, 558 / row.length, 558 / 50));
          break;
        default:
          break;
      }
    }
  }

  // Create Road instances for specified rows
  let roadRows = [8, 18, 22, 28, 31, 36, 42, 47];
  for (let rowIndex of roadRows) {
    roads.push(new Road(rowIndex, roadMetrics[rowIndex].length));
  }

  // Initialize black car size and position
  blackCarWidth = floor(random(6, 11)); // Random width between 6 and 10 cells
  blackCarX = 0; // Start from the leftmost position
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

class Road {
  constructor(row, cols) {
    this.row = row;
    this.cols = cols;
    this.blueBlocks = [];
    this.initializeBlueBlocks();
  }

  initializeBlueBlocks() {
    // Randomly place blue blocks in the road
    for (let i = 0; i < 5; i++) { // Initialize with 5 blue blocks
      let col = floor(random(this.cols));
      this.blueBlocks.push(col);
    }
  }

  updateBlueBlocks() {
    // Move blue blocks to simulate movement
    for (let i = 0; i < this.blueBlocks.length; i++) {
      this.blueBlocks[i] = (this.blueBlocks[i] + 1) % this.cols; // Move right and wrap around
    }
  }

  draw(isCurrentRoad) {
    // Draw the road background color
    for (let col = 0; col < this.cols; col++) {
      let x = 558 / this.cols * col;
      let y = 558 / 50 * this.row;
      if (isCurrentRoad) {
        fill(217, 214, 209); // Gray for current road background
      } else {
        fill(225, 201, 41); // Yellow for normal roads background
      }
      noStroke();
      rect(x, y, 558 / this.cols, 558 / 50);
    }

    // Draw the moving blocks
    for (let col of this.blueBlocks) {
      let x = 558 / this.cols * col;
      let y = 558 / 50 * this.row;
      if (isCurrentRoad) {
        fill(175, 57, 43); // Red for current road moving blocks
      } else {
        fill(57, 86, 151); // Blue for normal roads moving blocks
      }
      noStroke();
      rect(x, y, 558 / this.cols, 558 / 50);
    }
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
  for (let blackBlock of blackBlocks) {
    fill(blackBlock.color);
    noStroke();
    rect(blackBlock.x, blackBlock.y, blackBlock.width, blackBlock.height);
  }
}

function draw() {
  background(242, 243, 238);
  drawAllBuildings();
  drawAllBlocks();
  drawAxisCoordinates();

  // Update and draw roads with moving blue blocks
  let currentTime = millis();
  if (currentTime - lastRoadChangeTime > 3000) {
    isCurrentRoadActive = !isCurrentRoadActive;
    if (isCurrentRoadActive) {
      currentRoadIndex = (currentRoadIndex + 1) % roads.length;
      blackCarX = 0; // Reset black car position when changing current road
      blackCarY = 558 / 50 * (roads[currentRoadIndex].row - 3); // Set black car Y position above the current road
      blackCarSpeed = 0.5; // Reset speed to initial value
    }
    lastRoadChangeTime = currentTime;
  }

  for (let i = 0; i < roads.length; i++) {
    let isCurrentRoad = isCurrentRoadActive && (i === currentRoadIndex);
    roads[i].updateBlueBlocks();
    roads[i].draw(isCurrentRoad);
  }

  // Draw the black car on the rows above the current road
  if (isCurrentRoadActive) {
    let currentRoad = roads[currentRoadIndex];
    let carWidth = (558 / currentRoad.cols) * blackCarWidth;
    fill(0); // Black color for the car
    noStroke();

    // Draw the person shape
    let carXStart = blackCarX;
    let carYStart = blackCarY;
    let cellWidth = 558 / currentRoad.cols;
    let cellHeight = 558 / 50;

    if (frameCount % 30 < 15) { // First frame (050)
      // Top part of the person (050)
      rect(carXStart + cellWidth, carYStart, cellWidth, cellHeight);

      // Middle part of the person (555)
      for (let i = 0; i < 3; i++) {
        rect(carXStart + i * cellWidth, carYStart + cellHeight, cellWidth, cellHeight);
      }

      // Bottom part of the person (050)
      rect(carXStart + cellWidth, carYStart + 2 * cellHeight, cellWidth, cellHeight);

      // Legs part of the person (505)
      rect(carXStart, carYStart + 3 * cellHeight, cellWidth, cellHeight);
      rect(carXStart + 2 * cellWidth, carYStart + 3 * cellHeight, cellWidth, cellHeight);
    } else { // Second frame (550)
      // Top part of the person (050)
      rect(carXStart + cellWidth, carYStart, cellWidth, cellHeight);

      // Middle part of the person (555)
      for (let i = 0; i < 3; i++) {
        rect(carXStart + i * cellWidth, carYStart + cellHeight, cellWidth, cellHeight);
      }

      // Bottom part of the person (050)
      rect(carXStart + cellWidth, carYStart + 2 * cellHeight, cellWidth, cellHeight);

      // Legs part of the person (550)
      for (let i = 0; i < 2; i++) {
        rect(carXStart + i * cellWidth, carYStart + 3 * cellHeight, cellWidth, cellHeight);
      }
    }

    // Update black car position with acceleration
    blackCarX += blackCarSpeed;
    blackCarSpeed += accelerationRate * 1.5; // Accelerate the car

    if (blackCarX > width) {
      blackCarX = -carWidth; // Wrap around when reaching the right edge
      blackCarSpeed = 0.5; // Reset speed when wrapping around
    }
  }
}

function drawAllBuildings() {
  let currentTime = millis();

  // Randomly decide whether to show each building every second
  
  if (currentTime % 4000 < 2000) {
    drawBuildings(92, 52, 24, 13, color(217, 214, 209));
  }
  if (currentTime % 5000 < 2500) {
    drawBuildings(100, 168, 16, 14, color(217, 214, 209));
  }
  if (currentTime % 3000 < 1500) {
    drawBuildings(360, 100, 50, 100.5, color(76, 102, 197));
  }
  if (currentTime % 4500 < 2250) {
    drawBuildings(360, 130, 50, 48, color(175, 57, 43));
  }
  if (currentTime % 3500 < 1750) {
    drawBuildings(375, 145, 25, 20, color(225, 201, 41));
  }
  if (currentTime % 3000 < 1500) {
    drawBuildings(92, 21.90, 24, 68, color(175, 57, 43));
  }
  if (currentTime % 4000 < 2000) {
    drawBuildings(92, 52, 24, 13, color(217, 214, 209));
  }
  if (currentTime % 2500 < 1250) {
    drawBuildings(152, 21.90, 44, 52, color(175, 57, 43));
  }
  if (currentTime % 3500 < 1750) {
    drawBuildings(162, 38.90, 23, 20, color(217, 214, 209));
  }
  if (currentTime % 4500 < 2250) {
    drawBuildings(152, 73.90, 44, 15.8, color(217, 214, 209));
  }
  if (currentTime % 4000 < 2000) {
    drawBuildings(486.5, 112, 36, 33, color(175, 57, 43));
    drawBuildings(95.5, 212, 22.5, 35, color(225, 201, 41));
    drawBuildings(100, 222, 13, 12, color(217, 214, 209));
  }
  if (currentTime % 4500 < 2250) {
    drawBuildings(83, 277.2, 47.6, 35, color(175, 57, 43));
    drawBuildings(166, 256, 36, 56.6, color(225, 201, 41));
    drawBuildings(166, 270, 36, 42.6, color(76, 102, 197));
    drawBuildings(173, 283, 21.5, 16, color(225, 201, 41));
  }
  if (currentTime % 5000 < 2500) {
    drawBuildings(225, 212, 36, 101, color(225, 201, 41));
    drawBuildings(225, 268, 36, 25, color(217, 214, 209));
  }
  if (currentTime % 3500 < 1750) {
    drawBuildings(392, 256, 43, 77, color(175, 57, 43));
    drawBuildings(402, 275, 24, 20, color(217, 214, 209));
    drawBuildings(392, 333, 43, 15, color(217, 214, 209));
  }
  if (currentTime % 2500 < 1250) {
    drawBuildings(152, 21.90, 44, 52, color(175, 57, 43));
    drawBuildings(162, 38.90, 23, 20, color(217, 214, 209));
    drawBuildings(152, 73.90, 44, 15.8, color(217, 214, 209));
  }
  if (currentTime % 4500 < 2250) {
    drawBuildings(498.5, 56, 36, 20, color(76, 102, 197));
    drawBuildings(47, 112, 36, 33, color(76, 102, 197));
  }
  if (currentTime % 5000 < 2500) {
    drawBuildings(83, 160, 47.6, 33, color(225, 201, 41));
    drawBuildings(100, 168, 16, 14, color(217, 214, 209));
  }
  if (currentTime % 3500 < 1750) {
    drawBuildings(360, 100, 50, 100.5, color(76, 102, 197));
    drawBuildings(360, 130, 50, 48, color(175, 57, 43));
    drawBuildings(375, 145, 25, 20, color(225, 201, 41));
  }
  if (floor(currentTime / 4500) % 2 === 0) {
    drawBuildings(83, 277.2, 47.6, 35, color(175, 57, 43));
    drawBuildings(166, 256, 36, 56.6, color(225, 201, 41));
    drawBuildings(166, 270, 36, 42.6, color(76, 102, 197));
    drawBuildings(173, 283, 21.5, 16, color(225, 201, 41));
  }
  if (floor(currentTime / 5000) % 2 === 0) {
    drawBuildings(225, 212, 36, 101, color(225, 201, 41));
    drawBuildings(225, 268, 36, 25, color(217, 214, 209));
  }
  if (floor(currentTime / 3500) % 2 === 0) {
    drawBuildings(392, 256, 43, 77, color(175, 57, 43));
    drawBuildings(402, 275, 24, 20, color(217, 214, 209));
    drawBuildings(392, 333, 43, 15, color(217, 214, 209));
  }
  if (floor(currentTime / 3000) % 2 === 0) {
    drawBuildings(475, 273, 60, 25, color(225, 201, 41));
    drawBuildings(499, 273, 12, 25, color(175, 57, 43));
  }
  if (floor(currentTime / 3000) % 2 === 0) {
    drawBuildings(92, 21.90, 24, 68, color(175, 57, 43));
  }
  if (floor(currentTime / 4000) % 2 === 0) {
    drawBuildings(92, 52, 24, 13, color(217, 214, 209));
  }
  if (floor(currentTime / 2500) % 2 === 0) {
    drawBuildings(152, 21.90, 44, 52, color(175, 57, 43));
    drawBuildings(162, 38.90, 23, 20, color(217, 214, 209));
    drawBuildings(152, 73.90, 44, 15.8, color(217, 214, 209));
  }
  if (floor(currentTime / 4500) % 2 === 0) {
    drawBuildings(498.5, 56, 36, 20, color(76, 102, 197));
    drawBuildings(47, 112, 36, 33, color(76, 102, 197));
  }
  if (floor(currentTime / 5000) % 2 === 0) {
    drawBuildings(83, 160, 47.6, 33, color(225, 201, 41));
    drawBuildings(100, 168, 16, 14, color(217, 214, 209));
  }
  if (floor(currentTime / 3500) % 2 === 0) {
    drawBuildings(360, 100, 50, 100.5, color(76, 102, 197));
    drawBuildings(360, 130, 50, 48, color(175, 57, 43));
    drawBuildings(375, 145, 25, 20, color(225, 201, 41));
  }
  if (currentTime % 4000 < 2000) {
    drawBuildings(392, 333, 43, 15, color(217, 214, 209));
  }
  if (currentTime % 5000 < 2500) {
    drawBuildings(475, 273, 60, 25, color(225, 201, 41));
  }
  if (currentTime % 4500 < 2250) {
    drawBuildings(499, 273, 12, 25, color(175, 57, 43));
  }
}
  if (currentTime % 3000 < 1500) {
    drawBuildings(92, 21.90, 24, 68, color(175, 57, 43));
  }
  if (currentTime % 4000 < 2000) {
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






