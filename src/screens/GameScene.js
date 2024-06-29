import config from "../config";



class GameScene extends Phaser.Scene {
    constructor() {
  
      super("scene-game");
      
      this.player = null;
      this.playerSpeed = config.speedDown + 50;
      this.cursor = null;
      this.apple = null;
      this.score = 0;
      this.scoreText = null;
      this.moneyEmitter = null;
      this.timeRemaining = 10;
      this.timeText = null;
      this.timerEvent = null;

      console.log('====================================');
      console.log('load game');
      console.log('====================================');
  
    }
  
    preload() {
      this.load.image("bg","/assets/bg.png");
      this.load.image("basket","/assets/basket.png");
      this.load.image("apple","/assets/apple.png");
      this.load.image("money", "/assets/money.png"); // Load money particle image
  
    }
  
    create() {

      // gameStop();

      this.timeRemaining = 10;
      this.score = 0;
  
      this.add.image(0,0,"bg").setOrigin(0,0);
      this.apple = this.physics.add.image(0,0,"apple").setOrigin(0,0);
      this.apple.setMaxVelocity(0,config.speedDown);
  
      this.player = this.physics.add.image(0,config.sizes.height - 100,"basket").setOrigin(0,0);
      this.player.setImmovable(true);
      this.player.body.allowGravity = false;
      this.player.setCollideWorldBounds(true);
      this.cursor = this.input.keyboard.createCursorKeys();
  
      this.physics.add.overlap(this.apple,this.player,function(){
        this.score += 1;
        this.apple.setY(0);
        this.apple.setX(Math.floor(Math.random() * 480));
        this.scoreText.setText("Score "+this.score);
        this.moneyEmitter.start();
  
      },null,this);
  
      this.scoreText  = this.add.text(config.sizes.width- 120,10,"Score 0",{
        font:"25px Arial",
        fill:"#000000"
      });
  
      this.timeText = this.add.text(0,10,`Remaining Time: ${this.timeRemaining}`,{
        font:"25px Arial",
        fill:"#000000"
      });
  
      // setInterval(() => {

      //     this.timeRemaining = this.timeRemaining - 1;
      //     this.time.setText(`Remaining Time : ${this.timeRemaining}`);
        
      // }, 1000);

        
            this.timerEvent = this.time.addEvent({

            delay: 1000, // 1 second
            callback: () => {
                if (this.timeRemaining > 0) {
                    this.timeRemaining -= 1;
                    this.timeText.setText(`Remaining Time : ${this.timeRemaining}`);
                } else {
                    this.gameStop();
                }
            },
            loop: true // Repeat continuously
        });
    
  
      this.moneyEmitter = this.add.particles(0,0,"money",{
        x: 0,
        y: 0,
        speed: 100,
        gravityX:config.speedDown -100,
        scale:0.04,
        duration:50,
        emitting:false,
      });
  
      this.moneyEmitter.startFollow(this.player,this.player.width / 2,this.player.height / 2,true);
  
    }
  
    update() {
  
      if(this.apple.y >= config.sizes.height){
        this.apple.setY(0);
        this.apple.setX(Math.floor(Math.random() * 480));
      }
  
      const {left,right} = this.cursor;
      if(left.isDown){
        this.player.setVelocityX(- this.playerSpeed);
      }else if(right.isDown){
        this.player.setVelocityX(this.playerSpeed);
      }else{
        this.player.setVelocityX(0);
      }
  
      // if (this.timeRemaining == 0) {
      //   this.gameStop();
      // }
    }

    gameStop(){

      this.timerEvent.remove();
      this.scene.start("scene-gameOver", { score: this.score });

    }

  }

  export default GameScene