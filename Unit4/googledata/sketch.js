let bubbles = [];
let RockBG;
let rock ;

function preload() {
  rock = loadSound("assets/bensaction.mp3");

  rock.loop();
  rock.pause();
}

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  // let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  let url = '1inWQ_v070dJjZA4ZAsSOr57xowL28iMuhTbm3H41EYk'; // this is KEY of the URL from the sheet
  //https://docs.google.com/spreadsheets/d/1inWQ_v070dJjZA4ZAsSOr57xowL28iMuhTbm3H41EYk/edit?usp=sharing

  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(1000, 1000);
  RockBG = loadImage("assets/RockBG2.jpg");
  imageMode(CENTER);
  f1 = loadFont("assets/VerlagBold.otf");
  textSize(24);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  rock.play();

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].name, data[i].album, data[i].band)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  // background('blue');
  image(RockBG, width / 2, height / 2);

  //button
  fill(100, 255, 250);
  stroke(250,10,120);
  strokeWeight(15);
  ellipse(width / 2, height / 2 + 400, 150, 150);

  noStroke();
  textFont(f1);
  fill(250,10,120);
  // textSize(30);
  text("Take\nthe survey!", width / 2, height / 2 + 390);
  // https://docs.google.com/forms/d/1dI8-0392usm1YkJB41MzcrtjEjxFAIiG_c1eOo8dWeg/edit

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }

}


// my Bubble class
class Bubble {

  constructor(myName, myAlbum, myBand) {
    this.name = myName;
    this.album = myAlbum;
    this.band = myBand;
    this.col = color(random(125,255), random(125,255), random(125,255));
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, random(5));
  }


  display() {
    // if (this.shape == "Square") {
    //   rect(this.pos.x, this.pos.y, 50, 50);
    // } else {
    //   ellipse(this.pos.x, this.pos.y, 50, 50);
    // }

    textFont(f1);
    fill(this.col);
    text(this.name, this.pos.x, this.pos.y - 25);
    text(this.album, this.pos.x, this.pos.y);
    text(this.band, this.pos.x, this.pos.y + 25);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.y > width) this.pos.y = 0;
  }

}
function mouseReleased(){

  if ((mouseX > width/2-75)&&(mouseX < width/2+75)&&(mouseY > height / 2 + 325)&&(mouseY < height / 2 + 475)) {

  }
}
