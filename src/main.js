import "./style.css";
import Phaser from "phaser";
import config from "./config";

import GameScene from "./screens/GameScene";
import GameOverScene from "./screens/GameOverScene";
import DashboardScene from "./screens/DashboardScene";


export default new Phaser.Game({

    type: Phaser.WEBGL,
    width: config.sizes.width,
    height: config.sizes.height,
    canvas: gameCanvas,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: config.speedDown },
        debug: true,
      },
    },
    scene: [
      DashboardScene,
      GameScene,
      GameOverScene,
      
      
    ],

});
