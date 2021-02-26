let mic;
let vol;
let c = 'green' ;
let x = 0 ;

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn();  // what does "new" mean?
  mic.start();
}


function draw() {
  background(c);

  // rect(vol*200, 200, 75, 20);
  //   rect(vol*400, 230, 75, 20);
  //     rect(vol*600, 260, 75, 20);

  // x = map(vol,0,1,0,width);
        // rect(x, 300, 75, 20);



  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

// check how loud the input is
  if (vol > .10) { // if the volume is LOUD?
    // do something
    x = x + 5;
    if (x > width) {
      x = 0 ;
    }
  // c = color(random(255), random(255), random(255)) ; // here I'm setting the background to a random color
  }

push();
translate(x,0);
rect(100, 100, 50,50); //put your avatar code in here ... 
rect(75, 150, 100,100);
pop();
  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
