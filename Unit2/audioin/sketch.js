var mic;
var vol;
var c = 'green';
var x = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {
  background(c);

  rect(vol * 200, 200, 75, 20);
  rect(vol * 400, 230, 75, 20);
  rect(vol * 600, 260, 75, 20);

  x = map(vol, 0, 1, 0, width);
  rect(x, 300, 75, 20);

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .20) { // if the volume is LOUD?
    // do something
    c = color(random(255), random(255), random(255)); // here I'm setting the background to a random color
  }

  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);

}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
