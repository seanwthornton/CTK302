let state = 0;
let timer = 0;
let x = 0;
let velocity = 10 ;

function setup() {
  createCanvas(1000, 800);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(100);
  fill('yellow');
  rect(width / 2, height / 2, 200, 600);

  // ellipse(width / 2, height / 2 - 170, 150, 150);
  // ellipse(width / 2, height / 2, 150, 150);
  // ellipse(width / 2, height / 2 + 170, 150, 150);

  //car code
  fill('white');
  ellipse(x, 745, 30, 25);
  fill(100, 150, 125);
  ellipse(x, 740, 10, 10);
  fill(random(255), random(255), random(255));
  ellipse(x, 750, 100, 15);
  x = x + velocity ; //velocity of animation
  if (x > width) {
    x = -100 ; //sets beginning point way off the screen
  }


  switch (state) {

    case 0: //red
      text("0", 100, 100);
      fill('red');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill('grey');
      ellipse(width / 2, height / 2, 150, 150);
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 0 ;
      break;

    case 1: //green
      text("1", 100, 100);
      fill('grey');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      ellipse(width / 2, height / 2, 150, 150);
      fill('green');
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 10 ;
      break;

    case 2: //yellow
      fill('grey');
      ellipse(width / 2, height / 2 - 170, 150, 150);
      fill('yellow');
      ellipse(width / 2, height / 2, 150, 150);
      fill('grey');
      ellipse(width / 2, height / 2 + 170, 150, 150);
      velocity = 5 ;
      break;

  }

  timer = timer + 1;
  if (timer > 100) {
    timer = 0;
    state++;
    if (state > 2) state = 0;
  }

}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;
}
