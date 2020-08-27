const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14
var block15,block16
var sling,ball,ballImg
var score = 0;
var backgroundImg


function preload(){
      ballImg = loadImage("sprites/polygon.png");
      getBackgroundImg();
   }

function setup() {
  
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  

  //ball = new Ball(100,400,30,30);
  ball=Bodies.circle(100,400,30);
  World.add(world,ball);
  //ball = new polygon(100,400,30,30);
  //World.add(world,ball);
  sling = new Slingshot(this.ball,{x:100,y:390});

  stand1 = new Stand(510,360,250,10);

  block1 = new Block(420,315,30,40);
  block2 = new Block(450,315,30,40);
  block3 = new Block(480,315,30,40);
  block4 = new Block(510,315,30,40);
  block5 = new Block(540,315,30,40);
  block6 = new Block(570,315,30,40);
  block7 = new Block(600,315,30,40);

  block8 = new Block(450,275,30,40);
  block9 = new Block(480,275,30,40);
  block10 = new Block(510,275,30,40);
  block11 = new Block(540,275,30,40);
  block12 = new Block(570,275,30,40);

  block13 = new Block(480,235,30,40);
  block14 = new Block(510,235,30,40);
  block15 = new Block(540,235,30,40);

  block16 = new Block(510,195,30,40);
 

}

function draw() {
  if(backgroundImg)
  background(backgroundImg);

  noStroke();
  textSize(35)
  fill("white")
  

  
  //console.log(ball.speed);

  Engine.update(engine);

  stand1.display("#FF6600");

  //ball.display("#FF6600");

  block1.display("#FF0099");
  block2.display("#FF0099");
  block3.display("#FF0099");
  block4.display("#FF0099");
  block5.display("#FF0099");
  block6.display("#FF0099");
  block7.display("#FF0099");
  
  block8.display("#00FFFF");
  block9.display("#00FFFF");
  block10.display("#00FFFF");
  block11.display("#00FFFF");
  block12.display("#00FFFF");
  
  block13.display("#FFCC33");
  block14.display("#FFCC33");
  block15.display("#FFCC33");

  block16.display("white");
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  
  block13.score();
  block14.score();
  block15.score();

  block16.score();
  imageMode(CENTER);
  image(ballImg,ball.position.x,ball.position.y,40,40);
  
  sling.display();
  text("Score:"+score,750,40);
  console.log("Score:"+score);
  
  drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
 // ball.body.speed = 4.5;
}
function keyPressed(){
  if(keyCode === 32){
     //Matter.Body.setPosition(ball.body, {x:100,y: 400});
     sling.attach(this.ball);
     line(pointA.x, pointA.y, pointB.x, pointB.y);
console.log("inside space")
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(6,18);
  
  if(hour>=0600 && hour<=1900){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}



  