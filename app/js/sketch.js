/*
*
*
*
*/

//defining our Splatter object
var Splatter = function(){
//data
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(20, 40);
    this.xspeed = random(1,3);
    this.yspeed = random(1,3);
    this.col = color(random(0,255), random(0,255), random(0,255));
//functions
    this.checkBounds = function(){//wrap the edges of the canvas to create consistant splatter movement

    };
    this.move = function(){
        this.x += random(-1*this.xspeed, this.xspeed);
        this.y += random(-1*this.xspeed, this.xspeed);
        //this.checkBounds();
    };
    this.display = function(){
        this.move();
        noStroke();
        fill(this.col);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };
}//end Splatter()

var numBlobs = 5;
var blobs = [];

function setup(){
    var cnv = createCanvas(600, 600);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    //frameRate(5);
    background(200, 0, 200);
    for(var i = 0; i < numBlobs; i++){
        blobs[i] = new Splatter();
    }
}//end setup()

function draw(){
    //numBlobs = blobs.length;
    background(200, 0, 200);
    for(var i = 0; i < numBlobs; i++){
        blobs[i].display();
    }
    checkCollision();
}//end draw()

function checkCollision(){
    for(var i = 0; i < numBlobs; i++){
        var splat1 = blobs[i];
        for(var j = i+1; j < numBlobs; j++){
            var splat2 = blobs[j];
            var dx = splat2.x - splat1.x;
            var dy = splat2.y - splat1.y;
            var dist = sqrt(sq(dx)+sq(dy));
            if(dist < (splat1.diameter/2)+(splat2.diameter/2)){
                var tempCol = splat1.col;
                splat1.col = splat2.col;
                splat2.col = tempCol;
            }
        }//end inner for loop
    }//end outer for loop
}//end checkCollision()

function touchEnded(){
    var b = new Splatter();
    blobs.push(b);
    numBlobs += 1;
}

function mousePressed(){
    var b = new Splatter();
    blobs.push(b);
    numBlobs += 1;
}
