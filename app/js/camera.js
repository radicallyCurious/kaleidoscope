/*
*
*
*
*/

//which input to use?
var runSensor = false;//sensor from arduino
var runCamera = false;//webcam

//defining our Splatter object
var Splatter = function(){
//data
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 20);
    this.speed = 1;
    this.col = color(random(0,255), random(0,255), random(0,255));
//functions
    this.move = function(){
        this.x += random(-1*this.speed, this.speed);
        this.y += random(-1*this.speed, this.speed);
        //this.checkBounds();
    };
    this.display = function(){
        this.move();
        fill(this.col);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };

}//end Splatter()

var floater;//create a global variable to be made into a Splatter object

function setup(){
    var cnv = createCanvas(600, 600);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    background(200, 0, 200);
    floater = new Splatter();//set floater to a new Splatter object
}//end setup()

function draw(){
    background(200, 0, 200);
    floater.display();

    if (runCamera === true) {
        cameraKaleid();
    } else {
        console.log("no input");
        remove();
    }
}//end draw()

function cameraKaleid(){

}
