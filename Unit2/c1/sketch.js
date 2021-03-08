let mic;
let vol;
// let c = 'green';
let x = 0;

function setup() {
  createCanvas(720, 500);
  f1 = loadFont("assets/AmericanCaptain.otf");
  // textAlign(CENTER);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {
  background(100, 150, 100);

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .10) { // if the volume is LOUD?
    // do something
    x = x + 25;
    if (x > width) {
      x = -300;
    }
    // c = color(random(255), random(255), random(255)) ; // here I'm setting the background to a random color
  }

  push();
  translate(x, 0);
  //Sep avatar
  //body
  noStroke();
  fill(220, 220, 200);
  rect(width / 2 - 33, height / 2 + 35, 65, 105);
  //pants
  noStroke();
  fill(100, 80, 60);
  rect(width / 2 - 33, height / 2 + 140, 65, 25);
  rect(width / 2 - 33, height / 2 + 140, 20, 85);
  rect(width / 2 + 13, height / 2 + 140, 20, 85);
  //feet
  noStroke();
  fill(150, 200, 100);
  triangle(327, 475, 347, 475, 320, 490);
  triangle(374, 475, 394, 475, 400, 490);
  //arm
  stroke(220, 220, 200);
  strokeWeight(15);
  noFill();
  arc(325, 350, 40, 120, 90, -HALF_PI);
  arc(390, 350, 40, 120, -HALF_PI, 45);
  //hands
  noStroke();
  fill(150, 200, 100);
  ellipse(310, 388, 25, 25);
  ellipse(407, 388, 25, 25);
  //head
  fill(150, 200, 100);
  //ears
  stroke(130, 180, 80);
  strokeWeight(4);
  triangle(250, 220, 300, 225, 290, 260);
  triangle(415, 225, 465, 220, 430, 260);
  noStroke();
  fill(180, 180, 80);
  triangle(260, 226, 290, 245, 290, 260);
  triangle(415, 255, 458, 225, 430, 260);
  //face
  noStroke();
  fill(200, 200, 180);
  ellipse(width / 2, height / 2 + 30, 85, 35);
  fill(130, 180, 80);
  ellipse(width / 2, height / 2, 150, 85);
  fill(150, 200, 100);
  ellipse(width / 2, height / 2, 150, 75);
  //nose
  noStroke();
  fill(180, 180, 80);
  quad(360, 240, 385, 260, 360, 266, 335, 260);
  //eyes
  fill('black');
  noStroke();
  ellipse(width / 2 - 35, height / 2, 5, 12);
  ellipse(width / 2 + 35, height / 2, 5, 12);
  //mouth
  stroke(120, 170, 70);
  strokeWeight(3);
  noFill();
  arc(370, 270, 50, 20, 0, 40);
  // rect(100, 100, 50, 50); //put your avatar code in here ...
  // rect(75, 150, 100, 100);
  pop();
  // extra stuff for debugging
  fill('white');
  textSize(18);
  textFont(f1);
  textAlign(CENTER);
  text("Click the screen first to give permission for mic input.\nMy volume is " + vol, width / 2, 60);

}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
