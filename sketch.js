var newHeight = 50;
var newWidth = 50;

function setup(){
    createCanvas(600,400);
    background(50);
}

function draw(){
    // background(50);
    if (mouseIsPressed) {
     noStroke();
    fill(150,0,255,200);
    ellipse(mouseX,mouseY,newWidth,newHeight);       
    }
  
}