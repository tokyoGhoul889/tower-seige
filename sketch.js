
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var floor1, floor2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15
var ball, ballImg;
var sling;

function preload()
{
  ballImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  floor1 = new Floor(width/2-100, height/2+150, 300, 20);
  floor2 = new Floor(width/2+300, height/2-50, 200, 20);

  ball = Bodies.circle(50, 200, 10);
  World.add(world, ball);

  sling = new Sling(this.ball, {x: 100, y: 200});

  box1 = new Box(width/2-230, height/2+20, 30, 40);
  box2 = new Box(width/2-200, height/2+30, 30, 40);
  box3 = new Box(width/2-170, height/2+30, 30, 40);
  box4 = new Box(width/2-140, height/2+40, 30, 40);
  box5 = new Box(width/2-110, height/2+40, 30, 40);
  box6 = new Box(width/2-80, height/2+40, 30, 40);
  box7 = new Box(width/2-50, height/2+80, 30, 40);
  box8 = new Box(width/2-20, height/2+80, 30, 40);
  box9 = new Box(width/2+10, height/2+80, 30, 40);
  box10 = new Box(width/2-215, height/2+80, 30, 40);
  box11 = new Box(width/2-185, height/2+120, 30, 40);
  box12 = new Box(width/2-155, height/2+120, 30, 40);
  box13 = new Box(width/2-125, height/2+120, 30, 40);
  box14 = new Box(width/2-95, height/2+120, 30, 40);
  box15 = new Box(width/2-65, height/2+120, 30, 40);
  
}

function draw() {
  background(57,43,44);  
  Engine.update(engine);
  drawSprites();
  floor1.display();
  floor2.display();

  fill(135, 205, 235);
  box1.display();

  fill(255, 190, 200);
  box2.display();
  box3.display();

  fill(65, 220, 210);
  box4.display();
  box5.display();
  box6.display();

  fill(130, 130, 130);
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  fill(135, 205, 235);
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  
  
 
  sling.display();

  imageMode(CENTER);
  image(ballImg, ball.position.x, ball.position.y, 40, 40);

}

function mouseDragged(){
      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}