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

    // Background
    this.add.image(width / 2, height / 2, ASSET_KEYS.BACKGROUND).setDepth(0);

    // Jar: centered on the bottom edge, so half of it is cut off
    this.add.image(width / 2, height, ASSET_KEYS.JAR).setDepth(10);

    // Player's username, set in PreloadScene after login
    const player = this.registry.get('player');

    this.add
      .text(width / 2, height / 2, player?.username || 'Player', {
        fontFamily: 'Arial, sans-serif',
        fontSize: '24px',
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
      })
      .setOrigin(0.5)
      .setDepth(100);
  }
}