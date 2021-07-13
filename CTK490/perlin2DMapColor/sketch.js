let map = null;
let noiseScale = 1/150;
let ocean = "#008dc4";
let shore = "#00a9cc";
let sand = "#eecda3";
let grass = "#7ec850";
let stone = "#676767";
let snow = "#fffafa";

function setup() {
  createCanvas(960, 540);
  noStroke();
  background(0);
  noiseDetail(5, 0.5);
  makeMap();
  drawMap();
}

function makeMap() {
  map = [];
  for(let i = 0; i < width; i++) {
    map[i] = [];
    for(let j = 0; j < height; j++) {
      map[i][j] = pickColor(i, j);

      // color(noise(i * noiseScale, j * noiseScale) * 255);
    }
  }
}

function pickColor(i, j) {
  let h = noise(i * noiseScale, j * noiseScale);
  let c = "#facade";

  if(h < 0.2) {
    c = ocean;
  } else if(h < 0.3) {
    c = shore;
  } else if (h < 0.4){
    c = sand;
  } else if (h < 0.5) {
    c = grass;
  } else if (h < 0.6) {
    c = stone;
  } else if (h < 0.7) {
    c = snow;
  }
  return color(c);
}

function drawMap() {
  for(let i = 0; i < width; i++) {
    for(let j = 0; j < height; j++) {
      set(i, j, map[i][j])
    }
  }
  updatePixels();
}
