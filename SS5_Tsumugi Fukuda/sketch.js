//Tsu
//RGB Solar System
//hold down the mouse button to make the planets rotate around the sun
//depending on mouseX position color of planets will change


let angle = 0;
function setup() 
{
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() 
{
  background(17, 27, 77);
  noStroke()

  for(let x=0; x<width; x = x+100)
    {
      for(let y=0; y<height; y=y+100)
      {
        fill(255, 254, 219);
        ellipse(x,y,10,10);
      }
    }
  push();
  fill(255, 126, 82);
  circle(width/2,height/2,60);
  noStroke();
  pop();

  push();
  colorMode(HSB);
  noStroke();
  rotate(angle);
  translate(width/2,height/2);
  let hue =map(mouseX, 0, width, 0, 360); //taken from map example from p5.js examples
  fill(hue,80,90);
  for(let i=0; i<height; i=i+60)
  {
    ellipse (0,i,30);
  }
if(mouseIsPressed === true)
{
  angle=angle+1;
}
pop();
}
