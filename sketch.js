//Create variables here
var dogIm,happyDog,database,foodS,foodStock;
function preload()
{
  dogIm = loadImage("dogImg1.png")
  happyDog = loadImage("dogImg.png")

}

function setup() {
	createCanvas(1000, 400);
  dog = createSprite(250,250)
  dog.addImage(dogIm)
  dog.scale=0.15;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
//feed=createButton("Feed the dog")
//feed.position(700,95)
//addFood=createButton("AddFood")
//addFood.position(800,95)
//writeStock()
//readStock()
 
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  text("foodRemining:"+foodS,170,200)
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



