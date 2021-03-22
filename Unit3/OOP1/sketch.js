let cars = []

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn an object
  for (let i = 0; i < 40; i++) {
    cars.push(new Car());
  }
}

function draw() {
  background('white');

  // do some actions on the object
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
  }

}

// Car class
class Car {

  // constructor and attributes
  constructor() {
    // this.x = random(500);
    // this.y = random(500);
    this.pos = createVector(100, 100); //
    this.vel = createVector(random(-5,5), random(-5,5));
    this.col = color(random(255), random(255), random(255), random(255));
    this.width = random(18, 72);
  }

  // methods

  display() {
    fill(this.col);
    // rect(this.pos.x, this.pos.y, this.width, 25);
    textSize(this.width);
    text("WOW", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height; //this is the loop
  }

}
