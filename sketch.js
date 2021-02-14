var cat  ,catAnimation;
var mouse, mouseAnimation;
var garden,gardenAnimation;




function preload() {
    //load the images here
    catAnimation = loadAnimation("tomOne.png","tomTwo.png","tomThree.png");

    mouseAnimation  = loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png");

    gardenAnimation = loadAnimation("garden.png");

}

function setup(){
    createCanvas(1000,800);

    garden = createSprite( 500,400,1000,800);
    garden.addAnimation("garden.png",gardenAnimation);

    cat = createSprite(500,400,3,2);
    catAnimation = loadAnimation("tomOne.png","tomTwo.png","tomThree.png");
    
    mouse = createSprite(200,150,3,2);
    mouseAnimation  = loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png");
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
