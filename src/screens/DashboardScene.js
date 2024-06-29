import config from "../config";

class DashboardScene extends Phaser.Scene {
    constructor() {
  
      super("DashboardScene");
      this.bg = null;
      this.score = 10;
      this.scoreText = null;
      this.timeRemaining = 2;
      this.time = null;
      this.button = null;

    }
    
    preload() {
      this.load.image("bg","/assets/bg.png");  
    }
  
    create() {
  
      this.bg = this.add.image(0,0,"bg").setOrigin(0,0);
      this.time = this.add.text(
        (config.sizes.width / 2 - 195),
        config.sizes.height / 2 - 70,
       `Welcome Apple Catcher`,{
        font:"40px Arial",
        fill:"#000000"
      });

      this.scoreText  = this.add.text(
        10,
        (config.sizes.height / 2 - 10),
        `This Game Is Developed By Owais Azam`,
      {
        font:"25px Arial",
        fill:"#000000",
        padding: {
            x: 10,
            y: 5
          }
      });

      this.button = this.add.text(
        config.sizes.width / 2 - 70,
        config.sizes.height / 2 + 40,
        'Start Game', {
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

  export default DashboardScene