// let myCar1 ;
let cars = []
let Bubbles;

function setup() {
  createCanvas(800, 800);
  Bubbles = loadImage("assets/Bubbles1.jpg");
  imageMode(CENTER);

  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car()); //means to spawn a new object, pushing a new car
// }
  noStroke();
}

function draw() {
  background('grey');
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
    this.pos = createVector(width / 2, height - 80);
    this.vel = createVector(random(-.8, .8), random(-10, -5));
    this.r = 255; //random(255);
    this.g = 255; //random(255);
    this.b = 255; //random(255);
    this.a = random(200, 255);
  }

  // methods
  display() {
    fill(this.r, this.g, this.b, this.a) ;
    ellipse(this.pos.x, this.pos.y, 20);
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
