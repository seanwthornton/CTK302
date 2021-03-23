let balls = [];
let frogPos;
let state = 0;
let timer = 0;
let maxCars = 5;
let maxTimer = 10;
let BallHog1;
let BallHog2;
let BallHog3;
let BallHog4;
let open, win, lose, ballhog;

function preload() {
  open = loadSound("assets/moose.mp3");
  win = loadSound("assets/bensfunday.mp3");
  lose = loadSound("assets/benssadday.mp3");
  ballhog = loadSound("assets/benscountry.mp3");

  // wand.pause();
  song1.loop();
  song1.pause();
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
    balls.push(new Ball());
  }

  frogPos = createVector(width / 2, height - 100);

}

function draw() {
  switch (state) {
    case 0:
      // background('black');
      image(BallHog1, width / 2, height / 2);
      open.play();
      // fill('white');
      // text("Wanna be the\nBALL HOG? Click my snout to play!", width/2, height/2); //make an image
      break;
    case 1:
      game();
      timer++;
      if (timer > maxTimer * 60) {
        timer = 0;
        state = 3;
        ballhog.play();
      }
      break;

    case 2: //win
      // background('green');
      image(BallHog2, width / 2, height / 2);
      win.play();
      // fill('white');
      // text("What a BALL HOG! Click to play again.", 100, 100); //make an image
      break;

    case 3: //lose
      // background('red');
      image(BallHog3, width / 2, height / 2);
      lose.play();
      // fill('white');
      // text("You're no ball hog! Click to play again.", 100, 100); //make an image
      break;

  }
}

function mouseReleased() {
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
}

function resetGame() {
  timer = 0;
  balls = [];
  for (let i = 0; i < maxCars; i++) {
    balls.push(new Ball());
  }
}

function game() {
  // background(30, 130, 50);
  image(BallHog4, width / 2, height / 2);
  // do some actions on the object
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
    if (balls[i].pos.dist(frogPos) < 50) {
      balls.splice(i, 1);
    }
  }

  if (balls.length == 0) {
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
  strokeWeight(5);
  noFill();
  arc(325, 350, 40, 120, 90, -HALF_PI);
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









// Car class
class Ball {

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

// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}
