var star;//single star
var gravity;
var stars = [];

function setup(){
    createCanvas(420, 340);
    gravity = createVector(0, 0.2);
    star = new Star(10, 300, 20);
}

function draw(){
    background(0, 50);

    for(var i = 0; i < stars.length; i++){
        stars[i].applyForce(gravity);
        stars[i].display();
    }
    star.applyForce(gravity);
    star.display();
}

function mouseReleased(){
    stars.push(new Star(random(10,50), random(200,300), 20));
    console.log("mouse");
}

function touchEnded(){
    stars.push(new Star(random(10,50), random(200,300), 20));
    console.log("touch");
}
