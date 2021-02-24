let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textSize(48);
  textAlign(CENTER);
}

function draw() {
  fill('white');
  switch (state) {
    case 0:
      background('grey');
      text("How do you tell\nif a vampire is sick?", width / 2, height / 2);
      break;
      //no code here
    case 1:
      background('black');
      text("By how much\nthey are coffin ...", width / 2, height / 2);
      break;

  }

  timer++; //must reset the timer
  if (timer > 3 * 60) {
    state++;
    timer = 0;

    if (state > 1) {
      state = 0;
    }
  }
}
