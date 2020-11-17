class Particle {
    constructor(x, y, radius) {
      var options= {
          restitution:0.4,
      }
      this.radius = radius;
      this.body = Bodies.circle(x, y, radius/2, options);
      this.color = color(random(0, 255), random(0, 255), random(0, 255));
      
      World.add(world, this.body);
    }
    display(){

      var p = this.body.position;
      var angle = this.body.angle;
      push();
      translate(p.x, p.y);
      rotate(angle);
      noStroke();
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius, this.radius);
      pop();

    }
}