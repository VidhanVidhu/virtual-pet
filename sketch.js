//Create variables here
var dog,happyDog,database,foodS,foodStock;
function preload()
{
  dog = loadImage("images/dogImg1.png")
  happyDog = loadImage("images/dogImg.png")

}

function setup() {
	createCanvas(500, 500);
 var dog1 = createSprite(250,250)
  dog1.addImage("dog")

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)

if(kewWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  text("Note:Press UP ARROW key to feed Drago Milk!",200,100)
  //add styles here

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
 
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
  food:x
})
}



