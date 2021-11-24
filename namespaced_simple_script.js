// A namespaced p5js script 'namespaced_script.js'
let ballMovingSketch = function(p){
	let ballX = 0;
	let ballSpeed = 1;
 
	p.setup = function() {
		// put setup code here
		p.createCanvas(240, 120);
		p.background(51);
	}
  
	p.draw = function() {
		// put drawing code here
		p.background(51,10);
		p.stroke(255);
		p.strokeWeight(10);
		p.translate(0, p.height/2);
		let ang = 2*p.PI*(ballX/p.width);
		let ballY = p.sin(ang) * p.height/2.5;
		p.circle(ballX, ballY, 10);
		ballX = (ballX + ballSpeed) % p.width;
	}
}
let mysketch1 = new p5(ballMovingSketch, 'sketchDiv1');
let mysketch2 = new p5(ballMovingSketch, 'sketchDiv2');