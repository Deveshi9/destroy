const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ball;
function preload() {
bg_Img = loadImage("bg.png") 
hero_img= loadImage("Superhero-02.png")
}

function setup() {
  createCanvas(1100,600);
 engine =Engine.create();
 world = engine.world;
 ground  =new Ground(400,490,800,20)
rynx = Bodies.circle (200,200,40)
sling = new slingshot(this.rynx,{x:250,y:160})
}


function draw() {
  background(bg_Img);
  sling.display();
imageMode(CENTER)
image(hero_img,rynx.position.x,rynx.position.y,40,40)
  Engine.update(engine);
ground.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.rynx,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  sling.fly();
}
function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(this.rynx,{x:100,y:200});
    sling.attach(this.rynx);
  }
}

