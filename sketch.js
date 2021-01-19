var shooter;
var ground;
var backgroundImg;

function preload(){
 backgroundImg=loadImage("background.png") 
}

function setup() {
  createCanvas(1000,400);
  shooter=createSprite(50,350,50,50);
  ground=createSprite(10,390,800,10);
}

function draw() {
  background(backgroundImg);  
  ground.velocityX=-2;

  if(ground.x<0){
    ground.x = ground.width/2
  }
  if(keyDown("space")){
    shooter.velocityY=-10;
  }
  shooter.velocityY=shooter.velocityY+0.8;
  shooter.collide(ground);
  drawSprites();
}