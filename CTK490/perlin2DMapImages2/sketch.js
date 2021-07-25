let tileSize = 40;
let scl = 0.1;
let terrain = [8];

let ocean = "#008dc4";
let sand = "#eecda3";
let grass = "#7ec850";
let forest = "#325d17";
let hills = "#4e7c31";
let mountains = "#676767";

function preload(){
  terrain[0] = loadImage("assets/dirt.png");
  terrain[1] = loadImage("assets/forest.png");
  terrain[2] = loadImage("assets/grass.png");
  terrain[3] = loadImage("assets/hills.png");
  terrain[4] = loadImage("assets/mountains.png");
  terrain[5] = loadImage("assets/sand.png");
  terrain[6] = loadImage("assets/swamp.png");
  terrain[7] = loadImage("assets/water.png");
}

function setup() {
  // terrain[0] = loadImage("assets/dirt.png");
  // terrain[1] = loadImage("assets/forest.png");
  // terrain[2] = loadImage("assets/grass.png");
  // terrain[3] = loadImage("assets/hills.png");
  // terrain[4] = loadImage("assets/mountains.png");
  // terrain[5] = loadImage("assets/sand.png");
  // terrain[6] = loadImage("assets/swamp.png");
  // terrain[7] = loadImage("assets/water.png");

  createCanvas(1920, 1080);
  // createCanvas(400, 400);

  noStroke();
  // colorMode(HSB);
  for (let i = 0; i < width / tileSize; i++) {
    for (let j = 0; j < height / tileSize; j++) {
      // fill(pickTile(i, j));
      // image(terrain[0], i * tileSize, j * tileSize, tileSize, tileSize);
      // image(terrain[1], 40, 40, 40, 40);
      // fill(random(255));
      // rect(i * tileSize, j * tileSize, tileSize, tileSize);
      image(terrain[getTile(i, j)], i * tileSize, j * tileSize, tileSize, tileSize);
      // image(terrain[0], i * tileSize, j * tileSize, tileSize, tileSize);
      image(terrain[1], 40, 40, 40, 40);

    }

  }
}

function draw() {
  // for (let i = 0; i < width / tileSize; i++) {
  //   for (let j = 0; j < height / tileSize; j++) {
  //     image(terrain[getTile(i, j)], i * tileSize, j * tileSize, tileSize, tileSize);
  //   }
  // }
}

// function keyPressed() {
//   if (key == ' ') {
//     noiseSeed(millis());
//     drawTerrain();
//   }
// }

function getTile(i, j) {
  let h = noise(i * scl, j * scl);
  let c = "#facade";

  if (h < 0.3) {
    c = 7;
  } else if (h < 0.4) {
    c = 5;
  } else if (h < 0.5) {
    c = 2;
  } else if (h < 0.6) {
    c = 3;
  } else if (h < 0.7) {
    c = 1;
  } else {
    c = 4;
  }
  // return color(c);
  // print(c);
  return c;

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
