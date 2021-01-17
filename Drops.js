class Drops{
    constructor(x,y){
        var options = {
         isStatic: false,
         friction: 0.1
        }
    this.x= x;
    this.y= y;
    this.r =r
    this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
    World.add(world, this.body);

    if(this.rain.position.y > height){
        Matter.Body.setPosition(this.body, {x:random(0,400), y:(random(0,400))});
    }
    
    }

    display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    fill("blue");
    ellipse(0,0,this.r,this.r);
    pop();
    Engine.update(engine);
    }
}