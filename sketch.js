var speed, weight, thickness
var bullet, wall
function setup() {
createCanvas(1600,400);
bullet=createSprite(50,200,50,20);
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor = "grey";
thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);
bullet.shapeColor= "white";
}
function draw() {
  background("black"); 
  bullet.velocityX=speed;
  if (hasCollided(bullet,wall)) 
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);
    if (damage>10) {
      wall.shapeColor= color(255,0,0);
    }
    if (damage<10) {
      wall.shapeColor= color(0,255,0);
    }
    }
 drawSprites();
}
function hasCollided(bullet, wall) {
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true
  }
  return false;
}