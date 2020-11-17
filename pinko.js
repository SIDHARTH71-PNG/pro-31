class Pinko {
    constructor(x, y, radius) {
      var options= {
          isStatic: true
      }
      this.radius = radius;
      this.body = Bodies.circle(x, y, radius/2, options);
      
      World.add(world, this.body);
    }
    display(){

      fill(255, 255, 255);
      var po = this.body.position;
      push();
      translate(po.x, po.y);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius);
      pop();

    }
}