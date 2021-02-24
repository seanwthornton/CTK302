let x = 0 ;
let v = 7 ;
let f1 ;


function setup() {
  createCanvas(1000, 800);
    f1 = loadFont("assets/AmericanCaptain.otf");
}

function draw() {
  background(75, 185, 175);
  // rect(x, 100, 100, 100);
  textSize(120);
  textFont(f1);
  fill(random (255), random (255), random (255));
  text("FREE HUGS HERE", x, height/2);

  x = x + 10 ; //velocity of animation
  if (x > width) {
    x = -1000 ; //sets beginning point way off the screen
  }

}
