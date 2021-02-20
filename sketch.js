var  moverect;

function setup(){
  createCanvas(500,500)
fixrect=createSprite(250,250,50,50);
moverect=createSprite(280,300,50,50);

}
function draw(){
     background(24,56,78);
     moverect.x=mouseX;
     moverect.y=mouseY;
     console.log(fixrect.x-moverect.x);
     if(moverect.x-fixrect.x<moverect.width/2+fixrect.width/2&&
        fixrect.x-moverect.x<moverect.width/2+fixrect.width/2&&
        moverect.y-fixrect.y<moverect.height/2+fixrect.height/2&&
        fixrect.y-moverect.y<moverect.height/2+fixrect.height/2
        ){
         moverect.shapeColor="red";
         fixrect.shapeColor="red";
         
     }
     else{
         moverect.shapeColor="yellow";
         fixrect.shapeColor="yellow";
     }
     drawSprites()

    
    }






















