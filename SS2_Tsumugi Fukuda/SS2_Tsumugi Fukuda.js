//TsumugiF
//Supernova
//This sketch is an attempt at showing a star exploding outwards into space, and when the spacebar is pressed the user can watch it repeat again. This is within the space theme due to the star exploding. 

let starX=1;
let starY=1;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  fill(252, 252, 222);
  stroke(252, 252, 222);
  circle(50, 50, 3);
  circle(300, 550, 3);
  circle(578, 476, 3);
  circle(240, 320, 3);
  circle(760, 240, 3);
  circle(680, 120, 3);
  circle(320, 490, 3);
  circle(578, 476, 3);
  circle(140, 520, 3);
  circle(350, 120, 3);
  circle(120, 630, 3);
  circle(mouseX, mouseY, 25); 
  strokeWeight(6);
  let rStroke = random(0, 255);
  let gStroke = random(0,255);
  let bStroke = random(0,255);
  stroke(rStroke,gStroke,bStroke);
  noFill();
  ellipse(mouseX, mouseY, starX, starY);
  starX+=3;
  starY++;
}
function keyPressed() {
  if(key === 'space');
  starX=10;
  starY=1;
}
  