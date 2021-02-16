let state = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch(state) {

    case 0 : //bunch of code to run
    background(100);
    for (let j = 0; j <= height; j++) {
    for (let i = 0; i <= width; i++) {
      fill(0, random(255), 0);
      rect(i * 40, j * 40, 50, 10);
    }
  }
    text("state 0", 100, 100);
    break ;

    case 1 : //bunch of code to run
    background('red');
    text("state 1", 100, 100);
    break ;

    case 2 : //bunch of code to run
    background('blue');
    text("state 2", 100, 100);
    break ;

    case 3 : //bunch of code to run
    background('green');
    text("state 3", 100, 100);
    break ;

    case 4 : //bunch of code to run
    background('yellow');
    text("state 4", 100, 100);
    break ;

  }

}

function mouseReleased(){
  state = state + 1; //or state++
  if (state > 4){
    state = 0 ;
  }
}

function pattern (){
  for (var j = 0; j <= 400; j++) {
    for (var i = 0; i <= 400; i++) {
      fill(0, random(255), 0);
      rect(i * 40, j * 40, 50, 10);
    }
  }
}
