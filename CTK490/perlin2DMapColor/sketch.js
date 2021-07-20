let terrain = 0;
let tileSize = 40;
let noiseScale = 1 / 150;
let ocean = "#008dc4";
let shore = "#00a9cc";
let sand = "#eecda3";
let grass = "#7ec850";
let stone = "#676767";
let snow = "#fffafa";


function setup() {
  createCanvas(1280, 720);

  noStroke();

  background(0);

  noiseDetail(5, 0.5);

  makeMap();

  drawMap();
}


function makeMap() {
  terrain = [];
  for (let i = 0; i < width; i++) {
    terrain[i] = [];
    for (let j = 0; j < height; j++) {
      terrain[i][j] = pickColor(i, j);
    }
  }
}

function pickColor(i, j) {
  let h = noise((i) * noiseScale,
    (j) * noiseScale);
  let c = "#facade";

  if (h < 0.2) {
    c = ocean;
  } else if (h < 0.3) {
      c = shore;
    }else if (h < 0.4) {
      c = sand;
    }else if (h < 0.5) {
      c = grass;
    } else if (h < 0.6) {
      c = stone;
    }else {
    c = snow;
  }

  return color(c);
}

function drawMap() {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      set(i, j, terrain[i][j])
    }
  }
  updatePixels();
}
