function Particle(x, y, hu, firework) {
  this.pos = createVector(x, y);  //position
  this.firework = firework; 
  this.lifespan = 255; //adds fadeout in firework
  //this.hu = hu; //hue value
  
  

  if (this.firework) {
    this.vel = createVector(0,random(-14, -7)); //negative number means it will point up
    //random means all particles will go up at different heights between -12, -8
    //starts at 0, bottom of page
    
  } else { //velocity
    this.vel = p5.Vector.random2D(); //makes particles go in any random direction
    this.vel.mult(random(1, 7)); //initial value makes the particles explode randomly instead of a perfect circle
  }
  this.acc = createVector(0, 0); //acceleration 

  //function of adding force to the acceleration
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  // takes velocity and adds to position, takes acceleration and adds to velocity
  this.update = function() {
    //if not the seed firework
    if (!this.firework) {
      this.vel.mult(0.7); //slows down burst
      this.lifespan -= 7; //how fast the particles disapear 
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); //multiplies the acceleration to clear out each time


  }

  //defines when the particle is done, so that it will be erased
  this.done = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    
   //if its not the seed firework, do this to the stroke which will add fadeout
   // ! means not 
   if (!this.firework) { 
      strokeWeight(8); //stroke of explosion
      stroke(250,255,65, this.lifespan);
    } else {
      strokeWeight(6); //stroke of seed firework
      stroke(102, 51, 0);
    }
    point(this.pos.x, this.pos.y);
  }

}
