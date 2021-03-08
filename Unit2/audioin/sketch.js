var mic;
var vol;
var c = 'green';
var x = 0;

function setup() {
  createCanvas(720, 500);
  f1 = loadFont("assets/AmericanCaptain.otf");
  // textAlign(CENTER);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {
  background(c);

  // fill(0, 0, random(255));
  noStroke();
  fill(100,200,255);
  rect(vol * 200, 200, 100, 40);
  fill(75,175,230);
  rect(vol * 400, 240, 100, 40);
  fill(50,150,205);
  rect(vol * 600, 280, 100, 40);

  push();
  // x = map(vol, 0, 1, 0, width);
    translate(x, 0);
  fill(0,100,155);
  rect(x, 350, 100, 40);
  pop();

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .10) { // if the volume is LOUD?
    // do something
    x = x + 25;
    if (x > width) {
      x = -300;
    }
    c = color(random(255), random(255), random(255)); // here I'm setting the background to a random color
  }

  // extra stuff for debugging
  fill('white');
  textSize(18);
  textFont(f1);
  textAlign(CENTER);
  text("Click the screen first to give permission for mic input.\nMy volume is " + vol, width/2, 60);

}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
