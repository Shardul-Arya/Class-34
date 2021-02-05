class Ball {
    constructor(x, y,radius, angle) {
      var options = {
        isStatic: false,
        restitution:0.3,
        friction:0.5,
        density:15
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);
      //Matter.Body.setAngle(this.body, angle);
    }
    display(){
      var angle = this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill(255);
      ellipse(0, 0, this.radius*2);
      pop();
    }
  };