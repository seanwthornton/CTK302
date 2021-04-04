// let myCar1 ;
let cars = []
let Bubbles;

function setup() {
  createCanvas(800, 800);
  Bubbles = loadImage("assets/Bubbles3.jpg");
    imageMode(CENTER);

  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car()); //means to spawn a new object, pushing a new car
// }
  noStroke();
}

function draw() {
  background('gray');
  //image
  image(Bubbles, width/2, height/2);
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0){
      cars.splice(i, 1);
    }
  }
}

class Car {

  // constructor
  constructor() {
    // attributes
    this.pos = createVector(width/2, height/2); //spawn point
    this.vel = createVector(random(10), random(10));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(200, 255);
    this.s = random(5, 60);
  }

  // methods
  display() {
    fill(this.r, this.g, this.b, this.a) ;
    ellipse(this.pos.x, this.pos.y, this.s);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5 ;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;
  }
}
