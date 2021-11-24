// The sketch is wrapped in a function
let woohooSketch = function(p){
  
  // Sketch variables, uninitalised

  // This defines the initial state of the sketch,
  // like variable initalisation and canvas actions
  p.initialiseSketch = function(){
	p.frameCount = 0;
	p.colorMode(p.RGB);
	p.background(255);
  }
 
  // We only need to create the canvas here,
  // everything else goes in initaliseSketch
  p.setup = function() {
    // put setup code here
    p.createCanvas(700, 300);
	p.initialiseSketch();
  }
  
  // Flag to pause the sketch
	let paused = true;
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
		//p.background(255,10);
		p.colorMode(p.HSB, 360);
		p.stroke(p.noise(p.frameCount/100)*360*4 % 360, 180, 360);
		p.strokeWeight(10);
		p.text(createWooHoo(), p.mouseX, p.mouseY);
		//p.translate(0, p.height/2)
		//p.circle(ballX, p.sin(2*ballX*p.PI/p.width)*p.height/2.5, 10);
		//ballX = (ballX + ballSpeed) % p.width;
	}
}

let createWooHoo = function() {
	let woohooWords = ["woo hoo", "woo", "yay", "nice", "haha", "heck yeah", "you did it"];
	let exclamationMarks = ["!", "!!", "!!!", "🎉", "🎈", "🪅", "🎊", ":)", ":D"];
	
	let woohooWordIndex = Math.floor(Math.random()* woohooWords.length);
	let exclamationMarksIndex = Math.floor(Math.random()*exclamationMarks.length);	
	return woohooWords[woohooWordIndex] + exclamationMarks[exclamationMarksIndex];
	
};

// This pauses a given sketch from a button press
let pauseButtonToggle = function(button, sketch){
  if(sketch.isPaused()){
    button.innerText = "Pause";
  }else{
    button.innerText = "Play";
  }
  sketch.pauseToggle();
}

// This resets a given sketch
let resetSketch = function(sketch){
  sketch.initialiseSketch();
}

// Adding the sketch to the html page, sketchDiv is the id of a div in the html file
let mywoohooSketch = new p5(woohooSketch, 'woohooDiv');
// The variable `mysketch` shall be used in onclick events on the html page 