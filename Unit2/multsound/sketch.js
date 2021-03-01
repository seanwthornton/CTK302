let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadSound("assets/bensjazzfr.mp3");
  song2 = loadSound("assets/benscute.mp3");
  song3 = loadSound("assets/bensukulele.mp3");

  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();

}

function setup() {
  createCanvas(600, 400);
  f1 = loadFont("assets/AbrahamLincoln.ttf");
  textAlign(CENTER);

}

function draw() {
  background(175, 75, 185);

  switch (state) {

    case 0:
      textSize(48);
      textFont(f1);
      fill(250, 250, 255);
      text("1", width / 2, height / 2);
      song1.play();
      state = 1;
      break;

    case 1:
      textSize(48);
      textFont(f1);
      fill(250, 250, 255);
      text("A jazzy French tune", width / 2, height / 2);
      break;

    case 2:
      song2.play();
      state = 3;
      break;

    case 3:
      textSize(48);
      textFont(f1);
      fill(250, 250, 255);
      text("A cute diddy", width / 2, height / 2);
      break;

    case 4:
      song3.play();
      state = 5;
      break;

    case 5:
      textSize(48);
      textFont(f1);
      fill(250, 250, 255);
      text("A ukulele melody", width / 2, height / 2);
      break;
  }
}

function mouseReleased() {
  song1.pause();
  song2.pause();
  song3.pause();

  state++;
  if (state > 5) state = 0;


}


// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}
