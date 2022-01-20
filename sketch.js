
function preload(){
  marioImg= loadAnimation("sprite_00.png","sprite_01.png","sprite_02.png",
  "sprite_03.png","sprite_04.png","sprite_05.png","sprite_06.png","sprite_07.png",
  "sprite_08.png","sprite_09.png","sprite_10.png","sprite_11.png","sprite_12.png");
  backgroundImage = loadImage("jungle.jpg");
 RocksImg= loadImage("rocks-48279_1280.png")
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //creating background
  scene = createSprite(0,0,width,height);
  scene.addImage(backgroundImage);
  scene.scale= 4
  Mario = createSprite(110,height-300,40,40)
  Mario.addAnimation("mario",marioImg)
Mario.scale = 2

  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 
    
    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  spawnRocks()



  drawSprites()
  
   
  
  
  
    
}
function spawnRocks()
{if (frameCount%300==0){
  var rocks = createSprite(width,height-300,20,20)
  rocks.addImage(RocksImg)
  rocks.velocityX=-5
rocks.scale=0.2
}
}

// Creating  arrows for bow
 