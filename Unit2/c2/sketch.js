let state = -1 ;
let timer = 0 ;

let mic;
let vol;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1



  switch(state){

    case -1:
    background(100);
    text('click to start', width/2, height/2);
    break;

    case 0 :
    background(100);
    text("sssshhh", width/2, height/2);
    // check how loud the input is
      if (vol > .20) { // if the volume is LOUD?
        state = 1 ; // do something
      }
    break;

    case 1 :
    background('red');
    text("QUIET DOWN", width/2, height/2);
    timer++;
    if (timer > 3 * 60){
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
