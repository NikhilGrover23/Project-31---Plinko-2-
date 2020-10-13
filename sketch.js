const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions = [];
var plinkos = [];
var particles = [];
var divisionHeight = 300;
var score = 0;

var ground;

function preload() {

}

function setup(){
    var canvas = createCanvas(480,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,20);

    for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight)); 
    }

    for(var j = 55; j <= width; j = j+50){
      plinkos.push(new Plinko(j,75));
    }

    for(var j = 30; j <= width-10; j = j+50){
      plinkos.push(new Plinko(j,175));
    }

    for(var j = 55; j <= width; j = j+50){
      plinkos.push(new Plinko(j,275));
    }

    for(var j = 30; j <= width-10; j = j+50){
      plinkos.push(new Plinko(j,375));
    }


}

function draw(){
    background("black")
    Engine.update(engine);

    ground.display();

    for (var k = 0; k < divisions.length; k++) {
       divisions[k].display(); 
    }

    for(var j = 0; j < plinkos.length; j++){
      plinkos[j].display();
    }

    if(frameCount%60 === 0){
      particles.push(new Particle(random(width/2-30,width/2+30),10,10));
    }

    for(var i = 0; i < particles.length; i++){
      particles[i].display();
    }
    
    drawSprites();
}