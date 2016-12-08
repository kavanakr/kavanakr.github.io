var fireworks = []; //array of fireworks
var gravity; //applies gravity to fireworks 
var song;

function preload() {
  song= loadSound("Popcorn_Popping.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.play();
  gravity = createVector(0, 0.2); //points down
  stroke(255);
  strokeWeight(0);
  background(0);

  
  
  
  
}

function draw() {
   //doesn't get rid of firework's trail
  background(230,15,50);
  textSize(20);
  textFont("Georgia");
  fill(0);
 strokeWeight(0);
 text("Popcorn Machine", 420, 30);
  
 //every frame there is a 3% chance of making a new firework
  if (random(1) < 0.09) { 
    fireworks.push(new Firework()); //puts a new firework object in the array so not too many 
  }
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  
}
}
