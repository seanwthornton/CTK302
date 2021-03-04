let state = 0 ;
let coffin, vamp;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/StampingNico.ttf");
  textSize(48);
  textAlign(CENTER);

  coffin = loadImage("assets/coffin.png");
  vamp = loadImage("assets/vamp.png");
}

function draw() {
  fill('white');
  switch(state){
    case 0:
    background('red');
    image(vamp, 0, 0);
    textFont(f1);
    fill(250, 250, 255);
      text("How do you tell\nif a vampire is sick?", width/2, height/2);
    break ;

    case 1:
    background('black');
    image(coffin, 0, 0);
    textFont(f1);
    fill(250, 250, 255);
    text("By how much\nthey are coffin ...", width/2, height/2);
    break ;

  }//everything in a state change needs to be in the switch {}s
}

  function mouseReleased(){
    state = state + 1 ; //state++
    if (state > 1) {
      state = 0 ;
    }
  }
