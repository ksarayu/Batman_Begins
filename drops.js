class Drops{
    constructor(x, y){
        var options ={
            restitution: 0.3,
            friction: 0.1,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,5,options);

        //this.height = height;

        World.add(world, this.body);
    }

    reposition(){
        if(this.body.y > displayHeight){
            Matter.Body.setPosition(this.body, {x: random(0, 400), y: 0})
        }
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body, 0, 0, 5, 5);
        pop();
    }
}