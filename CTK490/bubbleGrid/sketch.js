let bubbles = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 20; i++) {
    let x = 20 + 40 * i;
    let y = 20 + 40 * i;
    bubbles[i] = new Bubble(x, y, 20);
  }
}

function draw() {
  background (0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  show() {
    // stroke(255);
    // strokeWeight(4);
    noStroke();
    fill(random(255));
    ellipse(this.x, this.y, this.r * 2)
  }
}
