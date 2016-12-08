function Firework() { 
//creates constructor function for firework
  //this.hu = random(150, 250);
  this.firework = new Particle(random(width), height, this.hu, true);
  this.exploded = false;
  this.particles = [];
  
  //defines when the particle is done = when firework is exploded & have faded out
  this.done = function() {
    //makes sure firework explodes at 0, state of having exploded
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  // update function adds gravity and updates firework 
  this.update = function() {
   //exploded = boolean variable that tracks when particles explode
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
    //explodes 
      if (this.firework.vel.y >= 0) {
        this.exploded = true; 
        this.explode(); 
      }
    }
    //takes particles away by working backwards
    for (var i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity); 
      //means that the particles wont stay up, they'll come back down, affected by gravity
      this.particles[i].update();
      //splice= deletes something from an array
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }



  }

  this.explode = function() {
    for (var i = 0; i < 120; i++) {
      // new function that makes 100 particles 
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
      this.particles.push(p);
    }
  }

  //
  this.show = function() {
    if (!this.exploded) {
      this.firework.show();
    }
   //the moment the particle reaches the top, it makes 100 new particles
    for (var i = 0; i < this.particles.length; i++) { //length means wont show unexisting particles
      this.particles[i].show();
    }

  }

   
}
