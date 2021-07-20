let cols = 20;
let rows = 20;

let colors = [];

function make2Darray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  createCanvas(1000, 1000);
  colors = make2Darray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      colors[i][j] = random(255);
    }
  }
}
  function draw() {
    background(51);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * 50;
        let y = j * 50;

        fill(colors[i][j]);
        noStroke();
        rect(x, y, 50, 50);
      }
    }
  }
