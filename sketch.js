var dog
var dogI
var database
var global 
var foodcount
function preload()
{
dogI=loadImage("dogImg.png")
database=firebase.database()
var dogcount=database.ref("food")
dogcount.on("value",function(data){
  foodcount=data.val().count
})
}

function setup() {
	createCanvas(800,800);
  dog=createSprite(400,400)
  dog.addImage(dogI)
}


function draw() {  
  background("white")
text(foodcount,100,100)
  drawSprites()
  
if(keyDown("UP_ARROW")){
feedthedog()
}

}
function feedthedog(){
  database.ref("food").update({
    count:foodcount-1
  })
}


