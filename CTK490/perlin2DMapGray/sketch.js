let tileSize = 40;
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

// function pickColor(i, j) {
//   let h = noise(i * noiseScale, j * noiseScale);
//   let c = "#facade";
//
//   if(h < 0.2) {
//     c = ocean;
//   } else if(h < 0.3) {
//     c = shore;
//   } else if (h < 0.4){
//     c = sand;
//   } else if (h < 0.5) {
//     c = grass;
//   } else if (h < 0.6) {
//     c = stone;
//   } else if (h < 0.7) {
//     c = snow;
//   }
//   return color(c);
// }
//
// function drawMap() {
//   for(let i = 0; i < width; i++) {
//     for(let j = 0; j < height; j++) {
//       set(i, j, map[i][j])
//     }
//   }
//   updatePixels();
// }
