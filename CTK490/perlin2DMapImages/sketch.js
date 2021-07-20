let tileSize = 40;
// let inc = 0.01;
let scl = 0.1;
let terrain = [8];

function setup() {
  terrain[0] = loadImage("assets/dirt.png");
  terrain[1] = loadImage("assets/forest.png");
  terrain[2] = loadImage("assets/grass.png");
  terrain[3] = loadImage("assets/hills.png");
  terrain[4] = loadImage("assets/mountains.png");
  terrain[5] = loadImage("assets/sand.png");
  terrain[6] = loadImage("assets/swamp.png");
  terrain[7] = loadImage("assets/water.png");

  createCanvas(1080, 720);
  noStroke();
  drawTerrain();

}

function draw() {
  drawTerrain();
}

function keyPressed() {
  if (key == ' ') {
    noiseSeed(millis());
    drawTerrain();
  }
}

function drawTerrain() {
  for (let i = 0; i < width/tileSize; i ++) {
    for (let j = 0; j < height/tileSize; j++) {
      fill(noise(i * scl, j * scl) * 255);
      rect(i * tileSize, j * tileSize, tileSize, tileSize);
    }
  }
}

color(getColor (x, y)) {
  float (v = noise(x * scl, y * scl));
  if (v < 0.2) {
    //water
    return color (155, 255, 255);
  } else if (v < 0.4) {
    //sand
    return color (30, 255, 255);
  } else if (v < 0.7) {
    //grass
    return color (66, 255, 255);
  } else {
    //forest
    return color (80, 255, 255);
  }
}


// let getTile(int x, int y) {
//   float v + noise(xoff + x * scl, yoff + y * scl);
//   // float (v = noise(x * scl, y * scl));
//   if (v < 0.3) {
//     //water
//     return 8;
//   } else if (v < 0.4) {
//     //sand
//     return 5;
//   } else if (v < 0.7) {
//     //grass
//     return 2;
//   } else {
//     //forest
//     return 1;
//   }
// }
