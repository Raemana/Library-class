var sanitizer,coronavirus;
function setup() {
  createCanvas(800,400);
  sanitizer = createSprite(700, 200, 85,50);
  coronavirus = createSprite(150, 200,50,85);
  sanitizer.shapeColor = "blue";
  coronavirus.shapeColor = "gold";
  sanitizer.velocityX = -16;
  coronavirus.velocityX = 24;
}

function draw() {
  background(0);
 // object1.x = World.mouseX;
 // object1.y = World.mouseY; 
   drawSprites();
   bounceoff(sanitizer,coronavirus);
   if (isTouching(sanitizer,coronavirus)) {
    sanitizer.shapeColor = "purple";
    coronavirus.shapeColor = "green";
   }
   else{
    sanitizer.shapeColor = "blue";
    coronavirus.shapeColor = "gold";
   }
}
