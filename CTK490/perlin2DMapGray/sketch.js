let tileSize = 20;
// let inc = 0.01;
let scl = 0.1;

function setup() {
  createCanvas(1080, 720);
  noStroke();
  // colorMode (HSB);
for (let i = 0; i < width/tileSize; i ++) {
  for (let j = 0; j < height/tileSize; j++) {
    fill(noise(i * scl, j * scl) * 255);
    rect(i * tileSize, j * tileSize, tileSize, tileSize);

  }
}
}

function draw() {

}

// color(getColor (int x, int y)) {
//   float (v = noise(x * scl, y * scl));
//   if (v < 0.2) {
//     //water
//     return color (155, 255, 255);
//   } else if (v < 0.4) {
//     //sand
//     return color (30, 255, 255);
//   } else if (v < 0.7) {
//     //grass
//     return color (66, 255, 255);
//   } else {
//     //forest
//     return color (80, 255, 255);
//   }
// }
