var canvas;
var music;
var surface1, surface2, surface3, surface4, surface5, surface6, surface7;
var box;

function preload(){
    music = loadSound("music1.mp3");
}

function setup(){
    canvas = createCanvas(1180,600);

    //create 4 different surfaces
  surface1 = createSprite(340, 585, 200, 30);
  surface1.shapeColor = "blue";

  surface2 = createSprite(580, 585, 200, 30);
  surface2.shapeColor= "orange";

  surface3 = createSprite(107, 585, 200, 30);
  surface3.shapeColor = "red";

  surface4 = createSprite(1060, 585, 200, 30);
  surface4.shapeColor = "green";
  
  surface5 = createSprite(820, 585, 200, 30);
  surface5.shapeColor = "yellow";
  
  surface6 = createSprite(400, 15, 200, 30);
  surface6.shapeColor = "rgb(0, 255, 255)";
  
  surface7= createSprite(800, 15, 200, 30);
  surface7.shapeColor = "pink";

    //create box sprite and give velocity
    box = createSprite(400, 300, 35, 35);
    box.shapeColor = "white";
    box.velocityY = 6;
    box.velocityX = 4.9;
}

function draw() {
    background(rgb(128, 170, 255));
  
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
   if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "blue"
    }

    if(surface2.isTouching(box)&& box.bounceOff(surface2)){
        box.shapeColor = "orange";
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "red";
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "green";
    }

    if(surface5.isTouching(box) && box.bounceOff(surface5)){
        box.shapeColor = "yellow";
        box.shapeColor = "yellow";
        box.velocityY = 0;
        box.velocityX = 0;
        music.play();
    }
  
    if(surface6.isTouching(box) && box.bounceOff(surface6)){
        box.shapeColor = "rgb(0, 255, 255)";
    }    
  
     if(surface7.isTouching(box) && box.bounceOff(surface7)){
        box.shapeColor = "pink"
        box.velocityY = 0;
        box.velocityX = 0;
        music.play();
    }
  
   textSize(50);
   fill("white");
   textFont("Comic Sans MS");
   stroke("purple");
   text("Jumping Box",500,300);

  drawSprites();
}
