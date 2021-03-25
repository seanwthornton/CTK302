let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let maxCars = 5;
let maxTimer = 10;
let BallHog1;
let BallHog2;
let BallHog3;
let BallHog4;
let ballhog;
let oink;

function preload() {
  ballhog = loadSound("assets/benscountry.mp3");
  oink = loadSound("assets/oink.mp3");

  ballhog.loop();
  ballhog.pause();
}

function setup() {
  //all load commands go here ... images, fonts
  // createCanvas(windowWidth, windowHeight);
  createCanvas(800, 800);
  BallHog1 = loadImage("assets/BallHog1.jpg");
  BallHog2 = loadImage("assets/BallHog2.jpg");
  BallHog3 = loadImage("assets/BallHog3.jpg");
  BallHog4 = loadImage("assets/BallHog4.jpg");

  imageMode(CENTER);

  // Spawn an object

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 100);

}

function draw() {
  switch (state) {
    case 0:
      image(BallHog1, width / 2, height / 2);
      break;
    case 1:
      ballhog.play();
      game();
      timer++;
      if (timer > maxTimer * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 2: //win
      image(BallHog2, width / 2, height / 2);
      break;

    case 3: //lose
      image(BallHog3, width / 2, height / 2);
      break;

  }
}

function mouseReleased() {
    ballhog.pause();
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: //they won, and they clicked to start again
      resetGame();
      state = 0;
      break;

    case 3: //they lost, and they clicked to start again
      resetGame();
      state = 0;
      break;
  }


  // state = state + 1;
  // if (state > 3) {
  //   state = 0;
  //   ballhog.stop();
  // }
}

function resetGame() {
  timer = 0;
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function game() {
  image(BallHog4, width / 2, height / 2);
  // do some actions on the object
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);

      oink.play() ;
    }
  }

  if (cars.length == 0) {
    state = 2;
  }


  checkForKeys();

  //frog ... put it here ... piggy
  noStroke();
  fill('pink');
  ellipse(frogPos.x - 15, frogPos.y - 55, 10, 20); //ear
  ellipse(frogPos.x + 15, frogPos.y - 55, 10, 20); //ear
  rect(frogPos.x - 6, frogPos.y - 70, 12, 20)
  ellipse(frogPos.x, frogPos.y - 45, 40, 40); //head
  ellipse(frogPos.x, frogPos.y, 60, 80); //body
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

  // if (frogPos.x > width) frogPos.x = 0 ;
  // if (frogPos.x < width) frogPos.x = 0 ;
  // if (frogPos.y > width) frogPos.y = 0 ;
  // if (frogPos.y < width) frogPos.y = 0 ;
} //its own function, don't put in another function

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
    ellipse(this.pos.x, this.pos.y, 25, 25); //change this for final!
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}
