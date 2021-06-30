var ship, ship_sailing, edges;
var seaImage;
var sea;

function preload(){
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(50,160,20,50);
  ship.addAnimation("sailing", ship_sailing);
  edges = createEdgeSprites()

  sea=createSprite(200,180,400,20);
  sea.addImage(seaImage);
  seaImage.x=sea.width/2

  ship.scale = 0.5;
  ship.x = 50
  sea.scale=0.5
}

function draw() {
  background("blue");
  sea.velocityX=-2;
  if(sea.x<0){
    sea.x=200
  }
 // ship.collide(sea);
  drawSprites();
}