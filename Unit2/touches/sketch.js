let numberOfTouches;

let STnorm;
let STspace;
let STsupe;

function setup() {
  createCanvas(400, 400);
  f1 = loadFont("assets/CCMonsterMash.ttf");
  textAlign(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  // fill('white');
  textSize(18);
  text(numberOfTouches + ' touches', width / 2, height / 2 - 100);

  switch (numberOfTouches) {
    case 0:
      background(100, 150, 170);
      // fill('white');
      textSize(32);
      textFont(f1);
      text("Hey, touch the screen\nand see me cartooned!", width / 2, height / 2);
      break;

    case 1:
      // fill('white');
      textSize(32);
      textFont(f1);
      text("Mild-mannered Sean", width / 2, height / 2 + 100);
      STnorm = loadImage("assets/STnorm75.png");
      break;

    case 2:
      // fill('white');
      textSize(32);
      textFont(f1);
      text("Space cadet Sean", width / 2, height / 2 + 100);
      STspace = loadImage("assets/STspace75.png");
      break;

    case 3:
      // fill('white');
      textSize(32);
      textFont(f1);
      text("Super Sean!", width / 2, height / 2 + 100);
      STsupe = loadImage("assets/STsupe75.png");
      break;


  }

}

//include a QR code to turn in!!
