// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var windspeed = 0;
var temp = 0;
var desc = 0;
var sun ;
var CollegeBG ;


function setup() {
  createCanvas(1500, 1000);
  CollegeBG = loadImage("assets/college.png");
  imageMode(CENTER);

  f1 = loadFont("assets/VerlagBold.otf");
  textSize(18);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Normal,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=c0c391113c956925d59b4b6fa3df7ccb'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  desc = weather.weather[0].description;


}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(150, 200, 255);

//add something interesting like an icons for the type of forecast.
//sunrise/sunset

      // cloud
      fill(215, 225, 240);
      noStroke();
      ellipse(c4 + 10, 180, 15, 10);
      ellipse(c4, 200, 40, 10);
      ellipse(c4, 190, 80, 20);
      ellipse(c4, 200, 120, 25);
      ellipse(c4 + 30, 210, 80, 20);

      fill(225, 235, 250);
      noStroke();
      ellipse(c3 - 30, 85, 25, 15);
      ellipse(c3, 110, 60, 20);
      ellipse(c3 + 50, 120, 140, 30);
      ellipse(c3, 135, 180, 25);
      ellipse(c3 + 20, 145, 100, 20);

      fill('white');
      noStroke();
      ellipse(c2 + 20, 60, 50, 40);
      ellipse(c2 + 10, 80, 160, 40);
      ellipse(c2 - 20, 70, 30, 35);
      ellipse(c2 - 10, 100, 200, 45);
      ellipse(c2 + 50, 120, 120, 30);

      ellipse(c1 - 20, 35, 100, 100);
      ellipse(c1 - 40, 50, 200, 70);
      ellipse(c1 + 50, 40, 60, 70);
      ellipse(c1 + 10, 70, 350, 70);
      ellipse(c1 + 70, 95, 180, 60);

      //background image
      image(CollegeBG, width / 2, height / 2);

      //weather info
      fill('white');
      textFont(f1);
      text("What is the weather in " + weather.name + "?", 30, 630);
      text("Windspeed is " + windspeed, 30, 660);
      text("Temperature is " + temp, 30, 690);
      text("Forecast is " + desc, 30, 720);

      //thermometer
      fill('red');
      var t = map(temp, -10, 100, 10, height-10);
      rect(width - 50, height - 10, 20, -t);

      fill('white');
      textFont(f1);
      text("100", 1425, 500);
      text("90", 1425, 550);
      text("80", 1425, 600);
      text("70", 1425, 650);
      text("60", 1425, 700);
      text("50", 1425, 750);
      text("40", 1425, 800);
      text("30", 1425, 850);
      text("20", 1425, 900);
      text("10", 1425, 950);


      // move the cloud's x position
      c1 = c1 + windspeed / 10;
      if (c1 > width) c1 = 0;

      c2 = c2 + windspeed / 14;
      if (c2 > width) c2 = 0;

      c3 = c3 + windspeed / 24;
      if (c3 > width) c3 = 0;

      c4 = c4 + windspeed / 30;
      if (c4 > width) c4 = 0;


      break;

  }
}
