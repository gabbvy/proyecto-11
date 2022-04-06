var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var bomb;
var bomba
var coin;
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bomba= loadImage("bomb.png")
  coin = loadImage("coin.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Fondo en movimiento
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//Creando el niño corriendo
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
//Crear límite izquierdo
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//Crear límite derecho
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;

bombGroup = new Group();
}


function draw() {
  background(0);
  path.velocityY = 4;
  
  // Niño moviéndose en el eje X con el mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //El código para restablecer el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  bombs();
  drawSprites();
}
function bombs(){
  if (frameCount%100===0){
  
    bomb= createSprite(200,200);
    bomb.addImage("c",bomba);
    bomb.scale= 0.1;
    bomb.velocityY= 4
    bomb.x=Math.round(random(50,350));
  }
  }