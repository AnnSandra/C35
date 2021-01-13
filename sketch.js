//Create variables here

var dog,dogHappy,database,foodS,foodStock;
var dogImage;
function preload()
{
    //load images here
    dogImage=loadImage("images/dogImg.png");
    dogHappy=loadImage("images/dogImg1.png");
}

function setup() {
    createCanvas(500, 500);
    dog=createSprite(200,250);
    dog.addImage(dogImage);
    dog.scale=0.2;
  
    database=firebase.database();
    foodStock=database.ref("Food");
    foodStock.on("value",readStock);
}


function draw() {  
    background(46,139,87);

    if(keyDown(UP_ARROW)){
        writeStock(foodS)
      
        dog.addImage(dogHappy);

    }
  drawSprites();
  //add styles here
  textSize(20)
  fill("black");
  text("Note:Press the UP ARROW key to feed Drago milk",30,400);


}

function readStock(data){
    foodS=data.val();

}

function writeStock(x){

    if(x<=0){
        x=0;
    }else{
        x=x-1
    }

    database.ref("/").update({
        Food:x
    })

}



