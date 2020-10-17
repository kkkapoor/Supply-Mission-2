var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bZone, lZone, rZone;
var b,l,r;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	

	//bZone.shapeColor=color(255, 0, 0)
	//lZone.shapeColor=color(255, 0, 0)
	//rZone.shapeColor=color(255, 0, 0)

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.18;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	



	/* bBody = Bodies.rectangle(width/2,height-50,170,20,{restitution:0, isStatic:true});
	World.add(world,bBody);
	
	lBody = Bodies.rectangle(325,height-110,20,100,{restitution:0, isStatic:true});
	World.add(world,lBody);
	
	rBody = Bodies.rectangle(475,height-110,20,100,{restitution:0, isStatic:true});
	World.add(world,rBody);*/



	b = createSprite(width/2,height-50,170,20);
	l = createSprite(325,height-100,20,100);
	r = createSprite(475,height-100,20,100);
	b.shapeColor="red";
	l.shapeColor="red";
	r.shapeColor="red";
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {friction:0, isStatic:true});
	World.add(world, packageBody); 
	
	

	bZone = new zone(400,660);
	lZone = new zone2(325,height-100);
	rZone = new zone3(475,height-100)


	
	//packageBody.setScale(0.8);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 630, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  Engine.update(engine)
  bZone.display();
  lZone.display();
  rZone.display();

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


//rect(bBody.position.x,bBody.position.y,170,20)
//rect(lBody.position.x,lBody.position.y,20,100)
//rect(rBody.position.x,rBody.position.y,20,100)

  keyPressed();
  drawSprites();
  
}
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false)

  }
}















