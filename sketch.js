const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boder1, boder2, boder3, boder4;
var ground1;
var pinko1;

var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {

  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  for(var k = 0; k <= width; k = k + 80) 
  {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <= width; j = j + 50)
  {
    plinkos.push(new Pinko(j, 75, 10));
  }

  for(var j = 15; j <= width-10; j = j + 50)
  {
    plinkos.push(new Pinko(j, 175, 10));
  }

  for(var j = -10; j <= width-20; j = j + 50)
  {
    plinkos.push(new Pinko(j, 275, 10));
  }

  for(var j = -35; j <= width-30; j = j + 50)
  {
    plinkos.push(new Pinko(j, 375, 10));
  }

  boder1 = new Border(width/2-240, height/2, 20, 800);
  boder2 = new Border(width/2, height/2+400, 480, 20);
  boder3 = new Border(width/2+240, height/2, 20, 800);
  boder4 = new Border(width/2, height/2-400, 480, 20);

  ground1 = new Ground(width/2, height/2+380, 490, 20);

}

function draw() {
  background(0);  
  Engine.update(engine);
  drawSprites();

  ground1.display();

  if(frameCount % 60 === 0)
  {
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  for(var j = 0; j < particles.length; j++)
  {
    particles[j].display();
  }

  for(var k = 0; k < divisions.length; k++) 
  {
    divisions[k].display();
  }

  for(var k = 0; k < plinkos.length; k++) 
  {
    plinkos[k].display();
  }

  boder1.display();
  boder2.display();
  boder3.display();
  boder4.display();

}