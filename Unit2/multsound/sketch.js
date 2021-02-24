let state = 0;
let timer = 0;

function setup() {
  createCanvas(800, 800);

}

function draw() {
  background(100);

  switch (state) {

    case 0:
      text("1", 100, 100);
      song1.play();
      state = 1
      break;

      case 1:
        text("listen to song 1", 100, 100);
        break;

        case 2:
          song2.play();
          state = 3
          break;

          case 3:
            text("listen to song 2", 100, 100);
            break;

            case 4:
              text("3", 100, 100);
              song3.play();
              state = 3
              break;

              case 4:
                text("3", 100, 100);
                song3.play();
                state = 3
                break;
  }

  timer = timer + 1;
  if(timer > 100) {
    timer = 0;
    state++;
    if (state > 2) state = 0;
  }

}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;
}


function touchStarted() {
  getAudioContext().resume();
}//three magic lines of audio code!

//three mp3 files!
