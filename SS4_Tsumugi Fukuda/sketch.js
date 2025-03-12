//Tsu
//Thank you from shooting star
//This is a shooting star character
//Which spins around and thanks the user
//It spins for about 6 seconds
//Then stops and says thank you 
//Which then fades in and out 
//No user input is necessary

let font;
let star;
let fade;
let fadeAmount = 1;
let currentTime = 0;
let timer1 = 6100;
let timer2 = 7000;
let angle = 0;

function preload () {
  font = loadFont('Fonts/Afrodite.otf');
  star = loadImage('Images/STAR.png');
}


function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  angleMode(DEGREES);
  textAlign(CENTER);
  textSize(40);
  textFont(font);
  fade=0;
  }

function draw() {
  background(33, 32, 97);
  currentTime = millis();
  push();
  fill(255, 250, 180, fade);
  text('Thank You...', 300, 50);
  if (currentTime> timer2) 
   { if (fade<0) fadeAmount=1;
    if (fade>255) fadeAmount=-1;
    fade += fadeAmount;
   }
   pop();

   push();
   translate (width/2, height/2);
   rotate (angle);
   image(star, 0,0);
   if (currentTime<timer1)
    { angle=angle+1;
   }
   pop();
   
}
