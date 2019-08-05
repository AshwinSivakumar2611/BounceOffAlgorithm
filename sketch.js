var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400,100,50,50);
  fixedRect.shapeColor="green";
  fixedRect.velocityY=3;
  movingRect=createSprite(400,400,80,50);
  movingRect.shapeColor="green";
  movingRect.velocityY=-3;
  fixedRect.debug=true;
  movingRect.debug=true;
}

function draw() {
  background(0);  
  
  if(movingRect.x-fixedRect.x <fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x <fixedRect.width/2+movingRect.width/2){
    movingRect.velocityX=movingRect.velocityX*(-1);
    fixedRect.velocityX=fixedRect.velocityX*(-1);
  }
  if( movingRect.y-fixedRect.y <fixedRect.height/2+movingRect.height/2&&fixedRect.y-movingRect.y <fixedRect.height/2+movingRect.height/2)
  {
    movingRect.velocityY=movingRect.velocityY*(-1);
    fixedRect.velocityY=fixedRect.velocityY*(-1);
  }
  drawSprites();
}