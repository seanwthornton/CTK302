let x = 0 ;
let v = 7 ;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);
  // rect(x, 100, 100, 100);
  textSize(60);

  text("HULK smash", x, height/2);

  x = x + 10 ; //velocity of animation
  if (x > width) {
    x = -600 ; //sets beginning point way off the screen
  }
}
