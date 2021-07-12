let bubbles = [];
let terrain = [];

function preload() {
  for (let i = 0; i <8; i++) {
    terrain[i] = loadImage("assets/terrain" + i + ".png");
  }
  // terrain[0] = loadImage("assets/dirt.png");
  // terrain[1] = loadImage("assets/forest.png");
  // terrain[2] = loadImage("assets/grass.png");
  // terrain[3] = loadImage("assets/hills.png");
  // terrain[4] = loadImage("assets/mountains.png");
  // terrain[5] = loadImage("assets/sand.png");
  // terrain[6] = loadImage("assets/swamp.png");
  // terrain[7] = loadImage("assets/water.png");
}

function setup() {
  createCanvas(600, 600);

}

function mousePressed() {
  let r = floor(random(0, terrain.length));
  let b = new Bubble(mouseX, mouseY, terrain[r]);
  bubbles.push(b);
}

function draw() {
  background(0);
  for (let i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].update();
    bubbles[i].display();
  }
}

function Bubble(x, y, terrain) {
  this.x = x;
  this.y = y;
  this.terrain = terrain;

  this.display = function() {
    imageMode(CENTER);
    image(this.terrain, this.x, this.y);
  }

  this.update = function() {
    this.x = this.x ;
    this.y = this.y ;
  }
}
