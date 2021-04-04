// let myCar1 ;
let cars = []
let Doom ;

function setup() {
  createCanvas(612, 792);
  Doom = loadImage("assets/Doomcube.jpg");
  imageMode(CENTER);

  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car()); //means to spawn a new object, pushing a new car
// }
  noStroke();
}

function draw() {
  background('grey');
  image(Doom, width/2, height/2);
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0){
      cars.splice(i, 1);
    }
  }

  // fill('black');
  // textSize(14);
  // text(mouseX + ", "+ mouseY, 10, 390);
}

class Car {

  // constructor
  constructor() {
    // attributes
    this.pos = createVector(110, 370);
    this.vel = createVector(random(-10), random(-10));
    this.r = 0; //random(255);
    this.g = 0; //random(255);
    this.b = 0; //random(255);
    this.a = random(0, 255);
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
