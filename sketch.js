var bullet,wall,speed,thickness,weight,deformation;
function setup() {
  createCanvas(1600,400);
  speed= random(223,321);
  weight =random(30,52);

thickness=random(22,83);

  bullet = createSprite(200, 200, 50, 10);
  bullet.velocityX = speed;

  wall = createSprite(1400,200,thickness,300) ;


}

function draw() {
  background(0);  

  if(wall.x - bullet.x <= (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    deformation = (0.5*speed*speed*weight)/(thickness*thickness*thickness);

    if(deformation > 10){
      wall.shapeColor = "red";
    }
    else{
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}