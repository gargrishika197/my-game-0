const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,bgImage
var boy , boyanime , boyinjured , boyinjuredImage
var coin , coinImage , blue , blueImage
var plant , pl , plantImage , plImage


function preload(){
	bgImage=loadImage("gamebg.png")
	boyanime=loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png"
	,"boy6.png","boy7.png","boy8.png","boy9.png","boy10.png","boy11.png")
    boyinjuredImage=loadImage("boyinjur.png")
	coinImage=loadImage("coin.png")
	blueImage=loadImage("blue.png")
	plantImage=loadAnimation("plant1.png","plant2.png","plant3.png","plant4.png")
	plImage=loadAnimation("pl1.png","pl2.png","pl3.png","pl4.png")
	
}


function setup() {
 createCanvas(1100,500);


  bg=createSprite(980,285,1100,500)
  bg.addImage(bgImage)
  bg.scale=1.475

  boy=createSprite(50,900)
  boy.addAnimation(boyanime)    
  boyinjured=createSprite(50,900)
  boyinjured.addAnimation(boyinjuredImage)

  coin=createSprite(50,50)
  coin.addAnimation(coinImage)
  blue=createSprite(50,50)
  blue.addAnimation(blueImage)



 engine = Engine.create();
 world = engine.world;
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


  drawSprites();
 
}



