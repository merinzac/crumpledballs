
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var string1,string2,string3,string4,string5;
var base1,base2,base3,base4,base5;

function preload(){
	
}

function setup() {
  createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ball1 = new Ball(150,420);
  ball2 = new Ball(250,420);
  ball3 = new Ball(350,420);
  ball4 = new Ball(450,420);
 ball5 = new Ball(550,420);

  base1 = new Base(150,220);
  base2 = new Base(250,220);
  base3 = new Base(350,220);
  base4 = new Base(450,220);
  base5 = new Base(550,220);




  string1 = new String({x:150,y:220},ball1.body);
  string2 = new String({x:250,y:220},ball2.body);
  string3 = new String({x:350,y:220},ball3.body);
  string4 = new String({x:450,y:220},ball4.body);
  string5 = new String({x:550,y:270},ball5.body);


//	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("green");
  Engine.update(engine);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  base1.display();
  base2.display();
  base3.display();
  base4.display();
  base5.display();

 string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
 
}



