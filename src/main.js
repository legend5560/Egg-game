import Phaser from './lib/phaser.js';
import { SCENE_KEYS } from './common/scene-keys.js';
import { GameScene } from './scenes/game-scene.js';
import { PreloadScene } from './scenes/preload-scene.js';

/** @type {Phaser.Types.Core.GameConfig} */
const gameConfig = {
  type: Phaser.AUTO,
  parent: 'game-container',
  backgroundColor: '#000000',
  pixelArt: false,              // smooth scaling for HD art

  scale: {
    mode: Phaser.Scale.RESIZE,  // canvas always matches the container
    width: '100%',
    height: '100%',
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
  },

  scene: [],
};

const game = new Phaser.Game(gameConfig);

game.scene.add(SCENE_KEYS.PRELOAD_SCENE, PreloadScene);
game.scene.add(SCENE_KEYS.GAME_SCENE, GameScene);

game.scene.start(SCENE_KEYS.PRELOAD_SCENE);