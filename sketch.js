const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload() {
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

var drops = [];
var maxDrops = 100;
var thunder;

function setup(){
    createCanvas(800,975);
    engine = Engine.create();
    world = engine.world;

    thunder = createSprite(200, 50, 15, 20);
    var rand = random(0, 400);
    thunder.x = rand;

    batman = new Boy(365, 610);

    droplet = new Drops();

    for(var d = 0; d < maxDrops; d++){
        drops.push(new Drops(random(0, 400), random(0, 400)));
    }
}

function draw(){
    background(100);

    droplet = new Drops(random(0, 400), 0);
    droplet.display();

    batman.display();

    for (var d = 0; d < drops.length; d++){
        drops[d].display();
        droplet.reposition();
    }

    if(frameCount % 20 === 0){
        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: thunder.addImage(thunder1);
                  break;
          case 2: thunder.addImage(thunder2);
                  break;
          case 3: thunder.addImage(thunder2);
                  break;
          case 4: thunder.addImage(thunder4);
                  break;
          default: break;
        }
    }

    drawSprites();
}   

