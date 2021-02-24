let state = 0;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/AmericanCaptain.otf");
  textAlign(CENTER);
}

function draw() {
  switch (state) {

    case 0: //bunch of code to run
      background(125);
      for (let j = 0; j <= height; j++) {
        for (let i = 0; i <= width; i++) {
          noStroke();
          fill(0, random(255), 0);
          rect(i * 40, j * 40, 50, 10);
        }
      }
      stroke(0,random(255),0);
      strokeWeight(10);
      ellipse(width/2, height/2-12, 100, 100);
      textSize(36);
      textFont(f1);
      fill('white');
      text("state 0", width/2, height/2);
      break;

    case 1: //bunch of code to run
      background(150);
      for (let j = 0; j <= height; j++) {
        for (let i = 0; i <= width; i++) {
          noStroke();
          fill(random(255), 0, 0);
          ellipse(i * 40, j * 40, 25, 25);
        }
      }
      stroke(random(255), 0, 0);
      strokeWeight(10);
      ellipse(width/2, height/2-12, 100, 100);
      textSize(36);
      textFont(f1);
      fill('white');
      text("state 1", width/2, height/2);
      break;

    case 2: //bunch of code to run
      background(175);
      for (let j = 0; j <= height; j++) {
        for (let i = 0; i <= width; i++) {
          noStroke();
          fill(0, 0, random(255));
          rect(i * 40, j * 40, 50, 10);
        }
      }
      stroke(0, 0, random(255));
      strokeWeight(10);
      ellipse(width/2, height/2-12, 100, 100);
      textSize(36);
      textFont(f1);
      fill('white');
      text("state 2", width/2, height/2);
      break;

    case 3: //bunch of code to run
      background(200);
      for (let j = 0; j <= height; j++) {
        for (let i = 0; i <= width; i++) {
          noStroke();
          fill(0, random(255), random(255));
          ellipse(i * 40, j * 40, 25, 25);
        }
      }
      stroke(0, random(255), random(255));
      strokeWeight(10);
      ellipse(width/2, height/2-12, 100, 100);
      textSize(36);
      textFont(f1);
      fill('white');
      text("state 3", width/2, height/2);
      break;

    case 4: //bunch of code to run
      background(225);
      for (let j = 0; j <= height; j++) {
        for (let i = 0; i <= width; i++) {
          noStroke();
          fill(random(255), random(255), random(255));
          rect(i * 40, j * 40, 50, 10);
        }
      }
      stroke(random(255), random(255), random(255));
      strokeWeight(10);
      ellipse(width/2, height/2-12, 100, 100);
      textSize(36);
      textFont(f1);
      fill('white');
      text("state 4", width/2, height/2);
      break;

  }

}

function mouseReleased() {
  state = state + 1; //or state++
  if (state > 4) {
    state = 0;
  }
}

function pattern() {
  for (var j = 0; j <= 400; j++) {
    for (var i = 0; i <= 400; i++) {
      fill(0, random(255), 0);
      rect(i * 40, j * 40, 50, 10);
    }
  }
}
