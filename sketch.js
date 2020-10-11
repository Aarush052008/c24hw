var paper1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper1 = new paper(50,620);
	box1 = new Dustbin(600,650,80,10)
	box2 = new Dustbin(640,605,10,80)
	box3 = new Dustbin(560,605,10,80)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15})
	}
}



