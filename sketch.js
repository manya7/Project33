const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var particles = [];
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;
var count=0;
var particle;

var play;
var end;
var gameState=play;


function setup() {
  createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  ground = new Ground(width/2,height,width,20);


   for (var  a = 0;  a <=width;  a =  a + 80) {
     divisions.push(new Divisions( a, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var b = 75; b <=width; b=b+50) 
    {
    
       plinkos.push(new Plinko(b,75));
    }

    for (var c = 50; c<=width-10; c=c+50) 
    {
    
       plinkos.push(new Plinko(c,175));
    }

     for (var d = 75; d <=width; d=d+50) 
    {
    
       plinkos.push(new Plinko(d,275));
    }

     for (var e = 50; e <=width-10; e=e+50) 
    {
    
       plinkos.push(new Plinko(e,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
     mouse();
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*/if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }/*/
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   text(500,180,520)
   text(50,100,520)
   text(100,20,520)
   text(500,260,520)
   text(1000,340,520)
   text(200,420,520)
   text(100,500,520)
   text(500,580,520)
   text(1000,660,520)
   text(200,740,520)
  

  }


  function mouse(){
    if (mouseIsPressed) {
      if(gameState===play){
        count=count+1;
     particles.push(new Particle(mouseX, 10,10));
       // particle=new Particle(mouseX,10,10) 
      }    }
  
  }


  
