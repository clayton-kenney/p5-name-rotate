let myFont;
function preload() {
  myFont = loadFont('Montserrat-Regular.ttf');
}
function setup() {
  createCanvas(windowWidth, windowHeight , WEBGL);
  textFont(myFont);
  textSize(width/4)
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  let time = millis()
  rotateX(time / 1000);
  rotateY(time/ 2000);
  text('//CLAYTON KENNEY',mouseX,mouseY)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}