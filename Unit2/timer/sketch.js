let myState = 0 ;
let myTimer = 0 ;
let f1 ;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/AmericanCaptain.otf");
  textAlign(CENTER);
}

function draw() {

  switch(myState){
    case 0:
    background(175, 75, 185);
    myTimer++;
    if (myTimer > 2 * 60){
      myTimer = 0;
      myState = 1;
    }
    textSize(200);
    textFont(f1);
    fill(0, 0, random (255));
    text("1", width/2, height/2+50);
    break;

    case 1:
    background(185, 175, 75);
    myTimer++;
    if (myTimer > 2 * 60){
      myTimer = 0;
      myState = 2;
    }
    textSize(300);
    textFont(f1);
    fill(0, random (255), 0);
    text("2", width/2, height/2+75);
    break;

    case 2:
    background(75, 185, 175);
    myTimer++;
    if (myTimer > 2 * 60){
      myTimer = 0;
      myState = 0;
    }
    textSize(400);
    textFont(f1);
    fill(random (255), 0, 0);
    text("3", width/2, height/2+125);
    break;


  }

}
