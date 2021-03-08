let state = -1 ;
let timer = 0 ;

let mic;
let vol;

function setup() {
  createCanvas(720, 500);
  f1 = loadFont("assets/AmericanCaptain.otf");
  textAlign(CENTER);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1



  switch(state){

    case -1:
    background('white');
    text('click to start', width/2, height/2);
    break;

    case 0 :
    background(100,200,255);
    textSize(18);
    textFont(f1);
    fill('white');
    text("Hey, simmer down now.", width/2, height/2);
    // check how loud the input is
      if (vol > .10) { // if the volume is LOUD?
        state = 1 ; // do something
      }
    break;

    case 1 :
    background('red');
    textSize(244);
    textFont(f1);
    fill(random(255), random(255), random(255));
    text("QUIET!", width/2, height/2 + 75);
    timer++;
    if (timer > 6 * 60){
      state = 0;
      timer = 0;
    }
    break;
  }
}

function mouseReleased(){
  if (state == -1) {
    state = 0;
  }
}
function touchStarted() {
  getAudioContext().resume();
}
