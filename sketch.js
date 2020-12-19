var dogIm,happyDog,database,foodS,foodStock;
var lastFed,fedTime,foodObj,feed,addFood;
function preload()
{
  dogIm = loadImage("dogImg1.png")
  happyDog = loadImage("dogImg.png")
}
function setup() {
  database=firebase.database();
  createCanvas(1000, 400);
  foodObj=new Food()
  dog = createSprite(800,200,150,150)
  dog.addImage(dogIm)
  dog.scale=0.15;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
feed=createButton("Feed the dog")
feed.position(700,95)
feed.mousePressed(feedDog)
addFood=createButton("AddFood")
addFood.position(800,95)
addFood.mousePressed(addFoods)
}

function draw() {  
background(46,139,87)
fedTime=database.ref('FeedTime')
fedTime.on("value",function(data){
  lastFed=data.val()
})
if (lastFed>=12){
  text("Last Feed:"+lastFed%12+"PM",350,30)
}else if (lastFed===0){
  text("Last Feed:+12 AM",350,30)
}else {
  text("Last Feed:"+lastFed+"AM",350,30)
}
  drawSprites();
}
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS)
}
function feedDog(){
  dog.addImage(happyDog)
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })

}
function addFoods(){
  foodS++
  database.ref('/').update({
    Food:foodS
  })
}

