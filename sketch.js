const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(2000,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

  //level one
  block1 = new Block(900,100,70,70);
  block2 = new Block(900,100,70,70);
  block3 = new Block(900,100,70,70);
  block4 = new Block(900,100,70,70);
  block5 = new Block(900,100,70,70);
  block6 = new Block(900,100,70,70);
  block7 = new Block(800,100,70,70);
  block8 = new Block(800,100,70,70);
  block9 = new Block(800,100,70,70);
  block10 = new Block(800,100,70,70);
  block11 = new Block(800,100,70,70);
  block12 = new Block(700,100,70,70);
  block13 = new Block(700,100,70,70);
  block14 = new Block(700,100,70,70);
  block15 = new Block(700,100,70,70);
  block16 = new Block(700,100,70,70);
  block17 = new Block(700,100,70,70);
  block18 = new Block(700,100,70,70);
  block19 = new Block(700,100,70,70);
  block20 = new Block(700,100,70,70);

  //ball holder with slings
  ball=new Ball (200,200,40)
  slingShot = new Slingshot(ball.body,{x:450,y:50});

}
function draw() {
  background("pink"); 
 
  ground.display();

  strokeWeight(2);
  stroke(15);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();

 ball.display();

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
