let state = 0 ;

function setup() {
  createCanvas(500, 500);
  textSize(48);
  textAlign(CENTER);
}

function draw() {
  fill('white');
  switch(state){
    case 0:
    background('red');
      text("How do you tell\nif a vampire is sick?", width/2, height/2);
    break ;

    case 1:
    background('blue');
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
