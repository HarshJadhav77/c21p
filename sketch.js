var canvas;
var music;
var ball,edges;
var b1,b2,b3,b4

function preload(){
   // music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    ball = createSprite(random(20,750),100,20,20);
    ball.shapeColor = "white";
    ball.velocityX = 5;
    ball.velocityY = 5;
   
    b1 = createSprite(100,575,190,40);
    b1.shapeColor = "green";
    
    b2 = createSprite(300,575,190,40);
    b2.shapeColor = "red";

    b3 = createSprite(500,575,190,40);
    b3.shapeColor = "blue";

    b4 = createSprite(700,575,190,40);
    b4.shapeColor = "yellow";



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

   if(ball.isTouching(b1))
   {
       ball.shapeColor = "green";
   }
   if(ball.isTouching(b2))
   {
       ball.shapeColor = "red";
      // World.Play("music");
   }
   if(ball.isTouching(b3))
   {
       ball.shapeColor = "blue";
   }
   if(ball.isTouching(b4))
   {
       ball.shapeColor = "yellow";
       ball.velocityX = 0;
       ball.velocityY = 0;
   }


    edges = createEdgeSprites();
    ball.bounceOff(edges);
    ball.bounceOff(b1);
    ball.bounceOff(b2);
    ball.bounceOff(b3);
    ball.bounceOff(b4);


    //add condition to check if box touching surface and make it box
    drawSprites();
}
