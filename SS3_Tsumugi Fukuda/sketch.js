//Tsu
//This is expanding on my Study #2
//Instead of resetting when Spacebar is pressed
//The star instead implodes into itself when space is held
//If held down long enough it will again expand outwards
//Since the implosion and explosions expand and defalte at different rates
//The shape warps into more interesting shapes than the simple ellipse in SS2

let starX=1;
let starY=1;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  fill(252, 252, 222);
  stroke(252, 252, 222);
  circle(mouseX, mouseY, 25); 
  strokeWeight(6);
  let rStroke = random(0, 255);
  let gStroke = random( 0,255);
  let bStroke = random(0,255); 
  stroke(rStroke,gStroke,bStroke);
  noFill();
  ellipse(mouseX, mouseY, starX, starY);
  
  if(keyIsDown(32) === true){
    starX+=3;
    starY++;
  }
  else{
    starX-=2;
    starY-=1;
  } 
}
  
  