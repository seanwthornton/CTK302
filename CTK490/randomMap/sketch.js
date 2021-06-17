var squares = [];

function setup() {
  createCanvas(640, 360);

  var overlapping = false;

  var protection = 0;

  while (squares.length < 25){
  // for (var i = 0; i < 25; i++) {
    // var x = random(width);
    // var y = random(height);
    // var r = 32;
    var square = {
      x: 60,
      y: 60,
    };

    var overlapping = false;

    for (var j = 0; j < squares.length; j++) {
      var other = squares[j];
      var d = dist(square.x, square.y, other.x, other.y);
      if (d < square + other) {
        //they are overlapping
        overlapping = true;
        // break;
      }
    }
    // for (var j = 0; j < squares.length; j++) {
    //   var other = squares[j];
    //   var d = dist(square.x, square.y, other.x, other.y);
    //   if (d < square.r + other.r) {
    //     //they are overlapping
    //     overlapping = true;
    //     // break;
    //   }
    // }
    if (!overlapping) {
      squares.push(square);
    }

    protection++;
    if (protection > 10000){
      break;
    }

  }

  for (var i = 0; i < squares.length; i++) {
    fill(255, 0, 150, 100);
    noStroke();
    ellipse(squares[i].x, squares[i].y);

  }
}

function draw() {

}
