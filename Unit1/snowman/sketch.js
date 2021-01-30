function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200, 250, 255)
  fill(255);
    ellipse(width/2, height/2 + 75, 150, 150);
    ellipse(width/2, height/2, 100, 100);
    ellipse(width/2, height/2 - 60, 65, 65);

    fill('black');
    ellipse(240, 185, 10, 10);
    ellipse(265, 185, 10, 10);

    fill(250,90,0);
    triangle(250, 190, 300, 195, 250, 200);

    fill('black');
    rect(225, 85, 50, 80);
    rect(210, 165, 80, 10);

    fill('black');
    textSize(14);
    text(mouseX + ", "+ mouseY, 10, 480);

}
