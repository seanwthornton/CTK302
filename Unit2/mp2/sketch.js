// TIME FREEZE 3.02.21 at 10 a.m.

let state = -1;
let timer = 0;
let wand, song2;

let mic;
let vol;

let Sepbc;
let Sepcover;
let Seppage1;
let Seppage2;
let Seppage3;
let Seppage4;
let Seppage5;
let Seppage6;
let Seppage7;
let Seppage8;
let Seppage9;
let Seppage10;
let Seppage11;
let Seppage12;
let Seppage13;
let Seppage14;
let Seppage15;
let Seppage16;
let Seppage17;
let Seppage18;
let Seppage19;
let Seppage20;
let Seppage21;
let Seppage22;
let Seppage23;
let Seppage24;
let Seppage25;
let Seppage26;
let Seppage27;
let Seppage28;

function preload() {
  wand = loadSound("assets/magic.mp3");
  song1 = loadSound("assets/bensbeyond.mp3");

  // wand.pause();
  song1.loop();
  song1.pause();
}

function setup() {
  createCanvas(612, 792);
  f1 = loadFont("assets/biblio.ttf");
  textAlign(CENTER);

  Sepcover = loadImage("assets/Sepcover.jpg");
  Sepbc = loadImage("assets/Sepbc.jpg");
  Sep1 = loadImage("assets/Seppage1.jpg");
  Sep2 = loadImage("assets/Seppage2.jpg");
  Sep3 = loadImage("assets/Seppage3.jpg");
  Sep4 = loadImage("assets/Seppage4.jpg");
  Sep5 = loadImage("assets/Seppage5.jpg");
  Sep6 = loadImage("assets/Seppage6.jpg");
  Sep7 = loadImage("assets/Seppage7.jpg");
  Sep8 = loadImage("assets/Seppage8.jpg");
  Sep9 = loadImage("assets/Seppage9.jpg");
  Sep10 = loadImage("assets/Seppage10.jpg");
  Sep11 = loadImage("assets/Seppage11.jpg");
  Sep12 = loadImage("assets/Seppage12.jpg");
  Sep13 = loadImage("assets/Seppage13.jpg");
  Sep14 = loadImage("assets/Seppage14.jpg");
  Sep15 = loadImage("assets/Seppage15.jpg");
  Sep16 = loadImage("assets/Seppage16.jpg");
  Sep17 = loadImage("assets/Seppage17.jpg");
  Sep18 = loadImage("assets/Seppage18.jpg");
  Sep19 = loadImage("assets/Seppage19.jpg");
  Sep20 = loadImage("assets/Seppage20.jpg");
  Sep21 = loadImage("assets/Seppage21.jpg");
  Sep22 = loadImage("assets/Seppage22.jpg")
  Sep23 = loadImage("assets/Seppage23.jpg");
  Sep24 = loadImage("assets/Seppage24.jpg");
  Sep25 = loadImage("assets/Seppage25.jpg");
  Sep26 = loadImage("assets/Seppage26.jpg");
  Sep27 = loadImage("assets/Seppage27.jpg");
  Sep28 = loadImage("assets/Seppage28.jpg");

  imageMode(CENTER);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  vol = (mic.getLevel()).toFixed(2);

  switch (state) {

    case -1:
      background(56, 101, 106);
      fill('white');
      textSize(100);
      textFont(f1);
      text("Click", width / 2, height / 2 - 150);
      textSize(60);
      textFont(f1);
      text("to start the fun!", width / 2, height / 2);
      break;

    case 0:
      background(40, 16, 32);
      fill('white');
      textSize(60);
      textFont(f1);
      text("Make some noise\nto begin the adventure!", width / 2, height / 2 - 150);
      textSize(36);
      text("But read quickly.", width / 2, height / 2);

      if (vol > .10) {
        state = 1;
        song1.play();
      }
      break;

    case 1:
      background('white');
      image(Sepcover, width / 2, height / 2);
      timer++;
      if (timer > 5 * 60) {
        state = 2;
        timer = 0;
      }
      break;

    case 2:
      background('white');
      image(Sep1, width / 2, height / 2);
      fill('black');
      textSize(18);
      textFont(f1);
      text("1", width / 2, 786);
      timer++;
      if (timer > 7 * 60) {
        state = 3;
        timer = 0;
      }
      break;

    case 3:
      background('white');
      image(Sep2, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("2", width / 2, 786);
      timer++;
      if (timer > 7 * 60) {
        state = 4;
        timer = 0;
      }
      break;

    case 4:
      background('white');
      image(Sep3, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("3", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 5;
        timer = 0;
      }
      break;

    case 5:
      background('white');
      image(Sep4, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("4", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 6;
        timer = 0;
      }
      break;

    case 6:
      background('white');
      image(Sep5, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("5", width / 2, 786);
      timer++;
      if (timer > 16 * 60) {
        state = 7;
        timer = 0;
      }
      break;

    case 7:
      background('white');
      image(Sep6, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("6", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 8;
        timer = 0;
      }
      break;

    case 8:
      background('white');
      image(Sep7, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("7", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 9;
        timer = 0;
      }
      break;

    case 9:
      background('white');
      image(Sep8, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("8", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 10;
        timer = 0;
      }
      break;

    case 10:
      background('white');
      image(Sep9, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("9", width / 2, 786);
      timer++;
      if (timer > 12 * 60) {
        state = 11;
        timer = 0;
      }
      break;

    case 11:
      background('white');
      image(Sep10, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("10", width / 2, 786);
      timer++;
      if (timer > 14 * 60) {
        state = 12;
        timer = 0;
      }
      break;

    case 12:
      background('white');
      image(Sep11, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("11", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 13;
        timer = 0;
      }
      break;

    case 13:
      background('white');
      image(Sep12, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("12", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 14;
        timer = 0;
      }
      break;

    case 14:
      background('white');
      image(Sep13, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("13", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 15;
        timer = 0;
      }
      break;

    case 15:
      background('white');
      image(Sep14, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("14", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 16;
        timer = 0;
      }
      break;

    case 16:
      background('white');
      image(Sep15, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("15", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 17;
        timer = 0;
      }
      break;

    case 17:
      background('white');
      image(Sep16, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("16", width / 2, 786);
      timer++;
      if (timer > 12 * 60) {
        state = 18;
        timer = 0;
      }
      break;

    case 18:
      background('white');
      image(Sep17, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("17", width / 2, 786);
      timer++;
      if (timer > 12 * 60) {
        state = 19;
        timer = 0;
      }
      break;

    case 19:
      background('white');
      image(Sep18, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("18", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 20;
        timer = 0;
      }
      break;

    case 20:
      background('white');
      image(Sep19, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("19", width / 2, 786);
      timer++;
      if (timer > 14 * 60) {
        state = 21;
        timer = 0;
      }
      break;

    case 21:
      background('white');
      image(Sep20, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("20", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 22;
        timer = 0;
      }
      break;

    case 22:
      background('white');
      image(Sep21, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("21", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 23;
        timer = 0;
      }
      break;

    case 23:
      background('white');
      image(Sep22, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("22", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 24;
        timer = 0;
      }
      break;

    case 24:
      background('white');
      image(Sep23, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("23", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 25;
        timer = 0;
      }
      break;

    case 25:
      background('white');
      image(Sep24, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("24", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 26;
        timer = 0;
      }
      break;

    case 26:
      background('white');
      image(Sep25, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("25", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 27;
        timer = 0;
      }
      break;

    case 27:
      background('white');
      image(Sep26, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("26", width / 2, 786);
      timer++;
      if (timer > 12 * 60) {
        state = 28;
        timer = 0;
      }
      break;

    case 28:
      background('white');
      image(Sep27, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("27", width / 2, 786);
      timer++;
      if (timer > 10 * 60) {
        state = 29;
        timer = 0;
      }
      break;

    case 29:
      background('white');
      image(Sep28, width / 2, height / 2);
      textSize(18);
      textFont(f1);
      text("28", width / 2, 786);
      timer++;
      if (timer > 8 * 60) {
        state = 30;
        timer = 0;
      }
      break;

    case 30:
      background('white');
      image(Sepbc, width / 2, height / 2);
      fill('white');
      textSize(48);
      textFont(f1);
      text("TIME FREEZE\n3.02.21 at 10 a.m.", width / 2, height / 2 - 150);
      textSize(24);
      text("Music: 'Smile' by Benjamin Tissot.", width / 2, height / 2);
      timer++;
      if (timer > 10 * 60) {
        state = 0;
        timer = 0;
      }
      break;

  }
}


function mouseReleased() {

  if (state == -1) wand.play();

  state = state + 1;
  if (state > 30) {
    state = -1;
    song1.stop();
  }

}

function touchStarted() {
  getAudioContext().resume();
}
