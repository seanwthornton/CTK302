let x=0;
let x1=0;
let x2=0;

let velocity =2;
let velocity1 =5;
let velocity2 =1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill('purple');
  rect(x,100,50,25);
  x = x+velocity;
  if(x > width) {
    x = 0;
  }

  fill('blue');
  rect(x1,200,50,25);
  x1 = x1+velocity1;
  if(x1 > width) {
    x1 = 0;
  }

  fill('pink');
  rect(x2,300,50,25);
  x2 = x2+velocity2;
  if(x2 > width) {
    x2 = 0;
  }
}
