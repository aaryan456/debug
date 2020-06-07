var gameState = 0;
var player,playerimg;
var track;
var carImg1,carImg2,carimg3,carImg4,carImg45;
var car,rand;
var carsGroup;
var invisiblegr,invisiblegr2;
var score = 0;
var posY = -5000,posX = -500

function preload(){
  playerimg = loadImage("images/police.png");
  carImg1 = loadImage("images/car1.png");
  carImg2 = loadImage("images/car2.png");
  carImg3 = loadImage("images/car3.png");
  carImg4 = loadImage("images/car4.png");
  carImg5 = loadImage("images/car5.png");
  track = loadImage("images/track2.jpg");
  
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight-170);

  player = createSprite(displayWidth/2+100,1200,40,40);
  player.addImage(playerimg);
  player.scale = 1;
  invisiblegr = createSprite(198,displayHeight/2,40,displayHeight*8);
  invisiblegr2 = createSprite(1260,displayHeight/2,40,displayHeight*8);
  

  carsGroup = new Group();
 
}

function draw(){
  
  image(track, 0,-displayHeight*6,displayWidth-10, displayHeight*9);
  camera.position.x = displayWidth/2;
  camera.position.y = player.y-100; 
  if(gameState === 0){
    player.velocityY = 0
   
    text("press the space key to start the game",displayWidth/2,200);
    invisiblegr.visible = false;
  invisiblegr2.visible = false;
  player.collide(invisiblegr);
  player.collide(invisiblegr2);
  player.scale = 0.6
  }
  if(keyDown("space")){
    gameState = 1
  }
  if(gameState===1){
    
      if(frameCount%2===0){
        rand = random(700,1000);
        car = createSprite(rand,player.y-800,30,30);
        player.velocityY = -20;

  if(keyDown(LEFT_ARROW)){
    player.x -= 17;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x += 17;
  } 
      
  fill("brown");
  noStroke();
  textSize(30);
  text("Your Score: "+ score,190,player.y-200);
     // car.y = 
      //car.x = rand;
      
      car.collide(invisiblegr);
      car.collide(invisiblegr2);
      
      var carswap = random(1,5);
      switch(carswap) {
        case 1: car.addImage(carImg1);
                break;
        case 2: car.addImage(carImg2);
                break;
        case 3: car.addImage(carImg3);
                break;
        case 4: car.addImage(carImg4);
                break;
        case 5: car.addImage(carImg5);
                break;
        default: break;
      }
      //carswap = Math.round(random(1,5));
      carsGroup.scale = 5;
      carsGroup.velocityYEach = 10;
      carsGroup.add(car);
  
      
     // car.lifetime = -100;
  
      if(player.isTouching(carsGroup)||player.y===-4400){
        gameState = 2;
        player.destroy();
        carsGroup.destroyEach();
        score -= 5;
      }
    }
    
  
  //invisiblegr.visible = false;
  //invisiblegr2.visible = false;
  //player.collide(invisiblegr);
  //player.collide(invisiblegr2);
  //player.scale = 0.6
  
 
  
  if(gameState === 2)
    player.velocityY = 0;
    carsGroup.setVelocityYEach(0);
    carsGroup.destroyEach()
    fill("brown");
    noStroke();
    textSize(40);
    text("YOU WIN!!!",500,600)
    

  }
  
  
  

  drawSprites();
}