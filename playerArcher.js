class PlayerArcher{
  constructor(x, y, width, height,angle) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    }
    
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("assets/playerArcher.png");
    World.add(world,this.body);
    Matter.Body.setAngle(this.body, -PI / 2);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    if (keyIsDown("UP_ARROW")&&angle< -1.2) {
      angle-= -0.1;
      Matter.Body.setAngle(this.body, angle);
    }
   
    if (keyIsDown("DOWN_ARROW")&&angle>-1.9) {
     angle+=0.1;
     Matter.Body.setAngle(this.body, angle);
    }
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();

    
  }
}
