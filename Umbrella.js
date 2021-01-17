class Umbrella{
    constructor(x,y){
        var options ={
            isStatic: true
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage("images/Walking Frame/ walking_1.png");
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(world,this.body);
    }

    display(){
    pos = this.body.position;
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    }
}