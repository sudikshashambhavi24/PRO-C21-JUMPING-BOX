var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "yellow";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "red";

    box3 = createSprite(520 , 580, 200, 30)
    box3.shapeColor="blue"

    box4 = createSprite(730 , 580, 200, 30)
    box4.shapeColor="green"

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY = 5
    ball.velocityX = 5

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "yellow";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "red";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityY = 0
        ball.velocityX = 0 
        //write code to stop music
    }  music.stop()

    //write code to bounce off ball from the block3
    if(box3.isTouching(ball) && ball.bounceOff(box3)){
        ball.shapeColor = "blue";
    

    //write code to bounce off ball from the block4
    if(box4.isTouching(ball) && ball.bounceOff(box4)){
        ball.shapeColor = "green";
}


}   
    

    drawSprites();
    }
