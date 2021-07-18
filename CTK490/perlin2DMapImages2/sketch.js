let tileSize = 40;
let scl = 0.1;
let ocean = "#008dc4";
let sand = "#eecda3";
let grass = "#7ec850";
let forest = "#325d17";
let hills = "#4e7c31";
let mountains = "#676767";

function setup() {
  createCanvas(1920, 1080);
  noStroke();
  colorMode (HSB);
for (let i = 0; i < width/tileSize; i ++) {
  for (let j = 0; j < height/tileSize; j++) {
    fill(pickColor(i, j));
    rect(i * tileSize, j * tileSize, tileSize, tileSize);

  }
}
}

function draw() {

}

// function keyPressed() {
//   if (key == ' ') {
//     noiseSeed(millis());
//     drawTerrain();
//   }
// }

function pickColor(i, j) {
  let h = noise(i * scl, j * scl);
  let c = "#facade";

  if (h < 0.3) {
    c = ocean;
  } else if (h < 0.4) {
      c = sand;
    }else if (h < 0.5) {
      c = grass;
    }else if (h < 0.6) {
      c = hills;
    } else if (h < 0.7) {
      c = forest;
    }else {
    c = mountains;
  }
  return color(c);
}
//
// function drawMap() {
//   for(let i = 0; i < width; i++) {
//     for(let j = 0; j < height; j++) {
//       set(i, j, map[i][j])
//     }
//   }
//   updatePixels();
// }
