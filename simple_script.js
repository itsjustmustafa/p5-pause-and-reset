// A simple p5js script 'simple_script.js'
let ballX = 0;
let ballSpeed = 1;
 
function setup() {
	// put setup code here
	createCanvas(240, 120);
	background(51);
}
  
function draw() {
	// put drawing code here
	background(51,10);
	stroke(255);
	strokeWeight(10);
	translate(0, height/2);
	let ang = 2*PI*(ballX/width);
	let ballY = sin(ang) * height/2.5;
	circle(ballX, ballY, 10);
	ballX = (ballX + ballSpeed) % width;
}