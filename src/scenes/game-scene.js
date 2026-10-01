import Phaser from '../lib/phaser.js';
import { SCENE_KEYS } from '../common/scene-keys.js';
import { ASSET_KEYS } from '../common/assets.js';

export class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: SCENE_KEYS.GAME_SCENE,
    });
  }

  /**
   * @public
   * Tied to the Phaser Scene lifecycle. Will run one time after the PRELOAD
   * logic is finished. Runs each time the Phaser Scene restarts.
   * @returns {void}
   */
  create() {
  const { width, height } = this.scale;

  this.add.image(width / 2, height / 2, ASSET_KEYS.BACKGROUND);

  // 1. Bright box at the jar's spot: proves this position is on-screen and drawn on top
  this.add.rectangle(width / 2, height - 50, 100, 100, 0xff0000).setDepth(50);

  // 2. The jar, pinned to the middle of the screen so position can't be the issue
  const jar = this.add.image(width / 2, height / 2, ASSET_KEYS.JAR).setDepth(20);

  console.log('JAR KEY:', ASSET_KEYS.JAR);
  console.log('exists:', this.textures.exists(ASSET_KEYS.JAR));
  console.log('size:', jar.width, jar.height);
  console.log('all textures:', this.textures.getTextureKeys());
}
}
