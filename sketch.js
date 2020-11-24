var track, trackImage;
var hurdle, hurdleImage;
var coin, coinImage;

function preload(){
trackImage = loadImage("runningTrack.png");
hurdleImage = loadImage("hurdle.png");
coinImage = loadImage("coin1.png");
}

function setup() {
  createCanvas(400, 400);
  
 track = createSprite(400,200,400,20);
 //track.addImage("runningTrack",trackImage);
  track.x = track.width /2;
  
  coinsGroup = createGroup();
  hurdlesGroup = createGroup();
}

function draw() {
  background("lightblue");
  spawnHurdles();
  spawnCoins();
  drawSprites();
}

function spawnCoins() {
  if (frameCount % 60 === 0) {
     coin = createSprite(600,100,40,10);
    coin.y = Math.round(random(200,300));
   // coin.addImage(coinImage);
    coin.scale = 0.5;
    coin.velocityX = -3;
    coin.lifetime = 134;
    coinsGroup.add(coin);
  }
}
function spawnHurdles() {
  if (frameCount % 100 === 0) {
     hurdle = createSprite(600,100,40,10);
    hurdle.y = Math.round(random(200,300));
    hurdle.addImage(hurdleImage);
    hurdle.scale = 0.5;
    hurdle.velocityX = -3;
    hurdle.lifetime = 134;
    hurdlesGroup.add(hurdle);
  }
}