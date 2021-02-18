var balloon, position, background_img;
var database;

function preload(){

background=loadImage("sprites/Hot Air Ballon-01.png")


}

function setup() {
  createCanvas(500,500);

  database = firebase.database();

  balloon = createSprite(400, 200, 50, 50);

  var balloonPosition = database.ref('balloon/position');
    balloonPosition.on("value", readPosition, showError);
}

function draw() {
  background("background_img"); 
  
  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10;
  }
  else if (keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10;
  }
  else if (keyDown(UP_ARROW)){
    balloon.y=balloon.y+10;
  }
  else if (keyDown(DOWN_ARROW)){
    balloon.y=balloon.y-10;
  }

  
  drawSprites();
}


function readPosition(data){
  position = data.val();
  balloon.x = position.x;
  balloon.y = position.y;
}

function showError(){
  console.log("There is an error in reading the database!!");
}