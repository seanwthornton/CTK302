let Sepbc;
let Sepcover;



function setup() {
  createCanvas (800, 1500);
  Sepcover = loadImage("assets/Sepcover.jpg");
  Sepbc = loadImage("assets/Sepbc.jpg");


  imageMode(CENTER);
}

function draw() {
background('white');
image(Sepcover, width/2, height/2, 200, 300);

}
