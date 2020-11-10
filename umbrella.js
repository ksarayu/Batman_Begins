class Boy{
    constructor(x, y){
        var options ={
            isStatic : true
        }

        this.body = Bodies.circle(x,y,10,options);

        this.animation = loadAnimation("images/Walking Frame/walking_1.png", "images/Walking Frame/walking_2.png", 
        "images/WalkingFrame/walking_3.png", "images/Walking Frame/walking_4.png", 
        "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png", 
        "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png");

        World.add(world, this.body);
    }
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        animation(this.animation, 0, 0, 10, 10);
        pop();
    }    
}