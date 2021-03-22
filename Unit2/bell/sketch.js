let state = 0;
let ISUbg;

function setup() {
  createCanvas(1920, 1080);
  textSize(100);
  f1 = loadFont("assets/CCMonsterMash.ttf");
  textAlign(CENTER);

  ISUbg = loadImage("assets/ZoomBG6.jpg");
}

function draw() {
  switch (state) {
	case 0:
  image(ISUbg, 0, 0);

  textFont(f1);
  fill('white');
	text("Ring the bell\nto become a Redbird!", width/2, 250);
  fill(250, 240, 150);
  ellipse(width/2, height-100, 100, 100);
	break;

  case 1:
  image(ISUbg, 0, 0);

  fill(240, 130, 50);
  ellipse(width/2, height-100, 100, 100);
	break;

  case 2:
  image(ISUbg, 0, 0);

  textFont(f1);
  fill('white');
	text("Congratulations!", width/2, 250);
  textSize(200);
  text("Redbird!", width/2, 450);
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
