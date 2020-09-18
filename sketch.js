const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var trashcan, waste, floor
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	waste=new Paper(200,450,70);
	floor=new Ground(width/2,670,width,20);
	trashcan=new Dustbin(1200,650);
	

	var render = Render.create({
	    element: document.body,
	    engine: engine,
	    options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  waste.display();
  floor.display();
  trashcan.display();

  
  drawSprites()
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(waste.body,waste.body.position,{x:130,y:-145});

    
  	}
}