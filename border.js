class Border {
    constructor(x,y,width,height) {
      var options= {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var posit = this.body.position;
      rectMode(CENTER);
      fill(130, 0, 0);
      rect(posit.x, posit.y, this.width, this.height);
    }
};