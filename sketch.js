// The sketch is wrapped in a function
function ballMovingSketch(p){
  
  // Sketch variables, uninitalised
  let ballX;
  let ballSpeed;
  
  // This defines the initial state of the sketch,
  // like variable initalisation and canvas actions
  p.initialiseSketch = function(){
	ballX = 0;
    ballSpeed = 1;
	p.background(51);
  }
 
  // We only need to create the canvas here,
  // everything else goes in initaliseSketch
  p.setup = function() {
    // put setup code here
    p.createCanvas(240, 120);
	p.initialiseSketch();
  }
  
  // Flag to pause the sketch
	let paused = false;
	// Function to read the pause flag externally
	p.isPaused = function(){
		return paused
	}
  
	// This simply toggles the pause flag
	// used to control the sketch's pause state
	p.pauseToggle = function(){
		paused = !paused;
	}
  
	p.draw = function() {
		// If pause flag is true, do nothing in draw
		if(paused){
			return;
		}
		// put drawing code here
		
		// Lets just move a ball across the screen
		p.background(51,10);
		p.stroke(255);
		p.strokeWeight(10);
		p.translate(0, p.height/2)
		p.circle(ballX, p.sin(2*ballX*p.PI/p.width)*p.height/2.5, 10);
		ballX = (ballX + ballSpeed) % p.width;
	}
}
// Adding the sketch to the html page, sketchDiv is the id of a div in the html file
let mysketch = new p5(ballMovingSketch, 'sketchDiv');
// The variable `mysketch` shall be used in onclick events on the html page 