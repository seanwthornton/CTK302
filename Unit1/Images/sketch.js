let DoomPSA;
let BlackPanther2;
let SpiderManMM;



function setup() {
  createCanvas (800, 1500);
  DoomPSA = loadImage("assets/DoomPSA.jpg");
  BlackPanther2 = loadImage("assets/BlackPanther2.jpg");
  SpiderManMM = loadImage("assets/SpiderManMM.jpg");

  imageMode(CENTER);
}

function draw() {
background('white');
image(DoomPSA, width/2, height/2, 200, 300);
image(BlackPanther2, width/2, height/2 - 320, 200, 300);
image(SpiderManMM, width/2, height/2 + 320, 200, 300);

}
