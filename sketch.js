  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;

  var engine, world;
  var canvas;
  var palyer, playerBase;
  var computer, computerBase;

  var arrow;
  



  function setup() {
    canvas = createCanvas(1200,800);

    engine = Engine.create();
    world = engine.world;

    playerBase = new PlayerBase(100, random(450, height - 300), 180, 150);
    player = new Player(100, playerBase.body.position.y - 153, 50, 180);
    playerArcher = new PlayerArcher(width - 1055,playerBase.body.position.y - 190,120,120);
    playerArrow = new PlayerArrow(playerArcher.x,playerArcher.y)
  //Create Player Archer Object

    computerBase = new ComputerBase(width - 300,random(450, height - 300),180,150);
    computer = new Computer(width - 280,computerBase.body.position.y - 153,50,180);
    computerArcher = new ComputerArcher(width-324,computerBase.body.position.y - 180,120,120);
    computerArrow = new ComputerArrow(computerArcher.x,computerArcher.y)
    //Create an arrow Object
  }
   

  function draw() {
    background(180);

    Engine.update(engine);

    // Title
    fill("#FFFF");
    textAlign("center");
    textSize(40);
    text("EPIC ARCHERY", width / 2, 100);

  
    playerBase.display();
    player.display();
    playerArcher.display();
    

    computerBase.display();
    computer.display();
    computerArcher.display()
  
    playerArrow.display();
    computerArrow.display();


    //Display arrow();
    
    //if Space (32) key is pressed call shoot function of playerArrow
    if(keyCode === 32){
      //Call shoot() function and pass angle of playerArcher
      playerArrow.shoot(playerArcher.body.angle);

    }
  }



