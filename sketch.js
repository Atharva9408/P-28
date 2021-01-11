
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var ground,P1;
var tree;
var boy;
var stone;
var M1,M2,M3,M4,M5,M6,M7,M8,M9;
var S1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(width/2,height-50,width,20);
  P1=new Ground(200,500,400,300);

  tree=new Tree(1300,height-334,500,600);
  
  boy=new Boy(300,258,250,350);
  
  stone=new Stone(200,258,40,40);
rad=30;
  M1=new Mango(1390,250,rad);
  M2=new Mango(1450,200,rad);
  M3=new Mango(1350,150,rad);
  M4=new Mango(1500,280,rad);
  M5=new Mango(1300,300,rad);
  M6=new Mango(1200,180,rad);
  M7=new Mango(1180,310,rad);
  M8=new Mango(1280,225,rad);
  M9=new Mango(1360,155,rad);

  S1=new Sling(stone.body,boy.body,rad,0)
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  P1.display();
  ground.display();
  tree.display();
  boy.display();
  S1.display();
  stone.display();
  M1.display();
  M2.display();
  M3.display();
  M4.display();
  M5.display();
  M6.display();
  M7.display();
  M8.display();
  M9.display();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
S1.fly()
//S1=null
}

function keyPressed(){
  if (keyCode === 32){
    boy.attach(stone.body);
  }
}

function dectectCollision(stone,mango){
MangoBody=mango.body.position;
StoneBody=stone.body.position;

var dist=distance(StoneBody.x,StoneBody.y,MangoBody.x,MangoBody.y)
if(dist<=Mango.r+stone.r){
  Matter.Body.setStatic(mango.body,false)
}
}