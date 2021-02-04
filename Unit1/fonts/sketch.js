
let f1, f2 ;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  f1 = loadFont("assets/Myrlissa.otf");
  f2 = loadFont("assets/MysticalSnow.ttf");

}

function draw() {
  background(100);
  textSize(120);
  textFont(f1);
  text("howdy", width/2, height/2);
  textSize(100);
  textFont(f2);
  text("ya'll", width/2, height/2+80);
  // \n=new linebreak—and escape character (don't use spaces)
  // \"=making quotation marks in your copy
  // bounding box=add in two new values for height and width

}
