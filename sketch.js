const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var umbrella, maxDrops, drops, thunderImg;

function preload(){
    thunderImg = loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png")
}

function setup(){
   createCanvas(600,600);
   umbrella = new Umbrella(300,200);

   maxDrops = 100;
   for(var i=0; i<maxDrops; i++){
      drops.push(new Drops(random(0,400),random(0,400)));
   }

   Engine.run(engine);
}

function draw(){
    background("black");
    Engine.update(engine);
    umbrella.display();
    drops.display();

    if(frameCount%10 === 0){
        thunderImg.display();
    }

    drawSprites();
}