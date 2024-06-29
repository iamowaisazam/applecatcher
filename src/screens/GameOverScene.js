import config from "../config";

class GameOverScene extends Phaser.Scene {
    constructor() {
  
      super("scene-gameOver");
      this.bg = null;
      this.score = 10;
      this.scoreText = null;
      this.timeRemaining = 2;
      this.time = null;
      this.button = null;

    }

    init(data) {
        this.score = data.score || 0;
    }
  
    preload() {
      this.load.image("bg",config.url+"bg.png");
  
    }
  
    create() {
  
     this.bg = this.add.image(0,0,"bg").setOrigin(0,0);

      this.time = this.add.text((config.sizes.width / 2 - 100),config.sizes.height / 2 - 70,`Game Over`,{
        font:"50px Arial",
        fill:"#000000"
      });

      this.scoreText  = this.add.text((config.sizes.width / 2 - 50),(config.sizes.height / 2 - 10),
      `Your Score Is ${this.score}`,
      {
        font:"25px Arial",
        fill:"#000000",
        padding: {
            x: 10,
            y: 5
          }
      });

      this.button = this.add.text(config.sizes.width / 2 - 50,config.sizes.height / 2 + 30, 'Start Again', {
        fontFamily: 'Arial',
        fontSize: '32px',
        backgroundColor: 'black',
        padding: {
          x: 20,
          y: 10
        },
        color: '#ffffff'
      });

        this.button.setInteractive();
        this.button.on('pointerup', () => {
            this.scene.start('scene-game');
        });
      


    }

    update() {
  

    }


  }

  export default GameOverScene