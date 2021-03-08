let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(100);
  f1 = loadFont("assets/CCMonsterMash.ttf");
  textAlign(CENTER);
}

function draw() {
  switch (state) {
	case 0:
	background(75);
  stroke(220, 180, 90);
  strokeWeight(10);
  textFont(f1);
	text("Ready", 250, 250);
  fill(250, 240, 150);
  ellipse(width/2, height-100, 100, 100);
	break;

  case 1:
	background(100);
  stroke(150, 50, 50);
  strokeWeight(10);
  textFont(f1);
	text("for", 250, 250);
  fill(240, 130, 50);
  ellipse(width/2, height-100, 100, 100);
	break;

  case 2:
	background(random(255));
  stroke(150, 50, 50);
  strokeWeight(10);
  textFont(f1);
	text("Action", 250, 250);
  fill('red');
  ellipse(width/2, height-100, 100, 100);
	break;
  }
 //outside of switch, but before end of draw

}


//button location coded in mouseReleased
//&& = and , || = or
function mouseReleased(){

  if ((mouseX > width/2-50)&&(mouseX < width/2+50)&&(mouseY > height-150)&&(mouseY < height-50)) {

  state = state + 1 ;
  if(state > 2){
    state = 0 ;
  }

  }
}
