function Star(x, y, diameter_){

    this.position = createVector(x, y);
    this.velocity = createVector(random(2,5), random(-10,-5));
    this.accel = createVector(0,0);
    this.diameter = diameter_;
    this.explode = false;
    this.dust = [];

    this.createDust = function(){
        for(var i = 0; i < 5; i++){
            this.dust[i] = new Star((random(-30,30)+this.position.x), (random(-30,30)+this.position.y), 5);
        }//end for loop
    }//end createDust()

    this.applyForce = function(force){
        this.accel.add(force)
    };//end applyForce()

    this.update = function(){
        this.velocity.add(this.accel);
        this.position.add(this.velocity);
        this.accel.mult(0);
        if(this.position.x >= width/2){
            this.explode = true;
        }
        if(this.position.y > height){
            this.explode = false;
        }
        if(this.explode){
            this.createDust();
            for(var i = 0; i < this.dust.length; i++){
                this.dust[i].velocity.add(this.accel);
                this.dust[i].position.add(this.velocity);
                this.dust[i].accel.mult(0);
            }//end for loop
        }
        //console.log(this.explode);
    };//end update()

    this.display = function(){
        fill(255);
        noStroke();
        this.update();
        if(this.explode){
            for(var i = 0; i < this.dust.length; i++){
                ellipse(this.dust[i].position.x, this.dust[i].position.y, this.dust[i].diameter, this.dust[i].diameter);
            }
        }
        if(!this.explode){
            ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
        }
    };//end display()
}//end Star()
