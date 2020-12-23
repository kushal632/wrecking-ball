const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world

var ground
var b1,b2,b3,b4,b5,b6,b7,b8,b9

function setup() {
  createCanvas(1200,600);

  engine = Engine.create(); 
  world = engine.world;

 ground = new Ground(600,580,1200,20);

 b1 = new block(560,580,40,40)
 b2 = new block(520,580,40,40)
 b3 = new block(480,580,40,40)
 b4 = new block(560,540,40,40)
 b5 = new block(520,540,40,40)
 b6 = new block(480,540,40,40)
 b7 = new block(560,480,40,40)
 b8 = new block(520,480,40,40)
 b9 = new block(480,480,40,40)
  
}



function draw() {
  background("yellow");  
  Engine.update(engine);
  
 ground.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
}