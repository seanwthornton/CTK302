function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
}

function draw() {
  background(51);

  loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      pixels[index+0] = x;
      pixels[index+1] = 0;
      pixels[index+2] = y;
      pixels[index+3] = 255;
    }
  }



  updatePixels();

}
