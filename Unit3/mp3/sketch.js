let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let maxCars = 5 ;
let maxTimer = 10 ;

function setup() {
  //all load commands go here ... images, fonts
  // createCanvas(windowWidth, windowHeight);
  createCanvas(500, 500);

  // Spawn an object

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height / 2);

}

function draw() {
  switch (state) {
    case 0:
      background('black');
      fill('white');
      text("Welcome! Click to play!", 100, 100); //make an image
      break;
    case 1:
      game();
      timer++;
      if (timer > maxTimer * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 2: //win
      background('green');
      fill('white');
      text("WIN! Click to play again.", 100, 100); //make an image
      break;

    case 3: //lose
      background('red');
      fill('white');
      text("LOSER! Click to play again.", 100, 100); //make an image
      break;

  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: //they won, and they clicked to start again
    resetGame() ;
      state = 0;
      break;

    case 3: //they lost, and they clicked to start again
    resetGame() ;
      state = 0;
      break;
  }
}

function resetGame() {
  timer = 0 ;
  cars = [] ;
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function game() {
  background(100);
  // do some actions on the object
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    state = 2;
  }


  checkForKeys();

  //frog ... put it here
  fill('green');
  ellipse(frogPos.x, frogPos.y, 75, 75);
}





function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

  if (frogPos.x > width) frogPos.x = 0 ;
  if (frogPos.x < width) frogPos.x = 0 ;
} //its own function, don't put in another function









// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(random(255), random(255), random(255));
    this.width = random(30, 70);
  }

  // methods

  display() { //decide what your objects are ... shape, images, text
    fill(this.col);
    rect(this.pos.x, this.pos.y, this.width, 25); //change this for final!
    // textSize(this.width) ;
    // text("WOOHOO", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
