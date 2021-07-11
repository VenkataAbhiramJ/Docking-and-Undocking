var iss
var issImage
var background1, space, space1, space2, space3, space4
var hasDocked=false

function preload(){
  space1=loadImage("spacecraft1.png")
  space2=loadImage("spacecraft2.png")
  space3=loadImage("spacecraft3.png")
  space4=loadImage("spacecraft4.png")
  issImage=loadImage("iss.png")
  background1=loadImage("spacebg.jpg")
}



function setup() {
  createCanvas(700,350);
  space=createSprite(280, 240);
  space.addImage(space1)
  space.scale=0.2
  iss=createSprite(330,130)
  iss.addImage(issImage)
  iss.scale=0.8
}

function draw() {
  background(background1);
  if(!hasDocked){
    space.x=space.x+random(-1,1)
    if(keyDown("UP_ARROW")){
      space.y=space.y-2
    }
    if(keyDown("LEFT_ARROW")){
      space.x=space.x-2
    }
    if(keyDown("RIGHT_ARROW")){
      space.x=space.x+2
    }
    if(keyDown("down_ARROW")){
      space.addImage(space2)
    }
  }
  if(space.y<=(iss.y+70)&&space.x<=(iss.x-10)){
    hasDocked=true
    textSize(25)
    fill ("cyan")
    text("docking is successful",300,300)
  }
  drawSprites();
}