
//Tsumugi F
//Prince of all cosmos
//I am going for a space inspired concept theme for the semester, this piece is a recreation of a character from a game where you create stars in space. I am moreso intending to have space be the inspiration that can blossom new ideas coming from the original concept. 
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(37, 90, 130);
  fill(95, 189, 71);

  stroke(0,0,0);
  strokeWeight(5);
rect(100,200,400,200,97);
  fill(22,150, 43);
  arc(255,300,330,230, 40, PI + QUARTER_PI, OPEN);
  arc(430,300,150,193, 11, HALF_PI, OPEN);
  fill(255, 245, 103);
  triangle(320,200,300,100,280,200)
  fill(255, 45, 30);
  circle(300,100,40);
  stroke(255, 245, 103);
  strokeWeight(8);
  fill(252, 243, 198);
  rect(224,250,150,100);
  stroke(0,0,0);
  line(250,300,270,305);
  line(330,305,350,300);
  noStroke();
  fill(247, 189, 45);
  triangle(300,300,310,320,290,320);
  fill(255, 160, 105);
  triangle(300,340,280,330,320,330)
  
}