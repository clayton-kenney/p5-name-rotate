let myFont;
let nc = 255;
let countDown = true;
let x = 1;
let y = 1;
let easing = 0.05;
function preload() {
  myFont = loadFont('/p5/Montserrat-Regular.ttf');
}
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight , WEBGL);
  textFont(myFont)
  textSize(width/16)
  textAlign(CENTER, CENTER);
  canvas.parent('sketch-holder');

}

function draw() {
  background(0);
  let time = millis()
  rotateX(time / 2000);
  rotateY(time/ 2000);
  fill(nc);
  if (countDown) {
    nc-= .5;
      if (nc == 0)
      countDown = false;
    } else {
      nc+= .5;
      if (nc == 255)
        countDown = true;
    }
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;
  text('//CLAYTON KENNEY',mouseX-(windowWidth/2),mouseY-(windowHeight/2))
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}