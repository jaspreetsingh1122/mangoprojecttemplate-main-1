
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,80,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1170,130,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,25);
	mango8=new mango(1140,150,25);
	mango9=new mango(1100,230,25);
	mango10=new mango(1200,200,25);
	mango11=new mango(1200,160,25);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone1=new stone(235,420,30)
	sling1=new slingShot(stone1.body,{x:235,y:420})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  groundObject.display();
  sling1.display();
  stone1.display();
}
function mouseDragged(){
	Matter.Body.setPosition(this.stone1,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
	slingShot1.fly()
  }
