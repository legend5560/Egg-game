import Phaser from '../lib/phaser.js';
import { SCENE_KEYS } from '../common/scene-keys.js';
import { ASSET_KEYS } from '../common/assets.js';

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_KEYS.GAME_SCENE });
  }

  create() {
    const player = this.registry.get('player');

    // Create once at (0, 0). layout() sizes and places everything.
    this.bg = this.add.image(0, 0, ASSET_KEYS.BACKGROUND).setDepth(0);
    this.jar = this.add.image(0, 0, ASSET_KEYS.JAR).setDepth(10);
    this.nameText = this.add
      .text(0, 0, player?.username || 'Player', {
        fontFamily: 'Arial, sans-serif',
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 4,
      })
      .setOrigin(0.5)
      .setDepth(100);

    this.layout(this.scale.gameSize);
    this.scale.on('resize', this.layout, this);
    this.events.once('shutdown', () => {
      this.scale.off('resize', this.layout, this);
    });
  }

  layout(gameSize) {
    const { width, height } = gameSize;

    // Background: scaled down (or up) to cover the whole screen
    const bgScale = Math.max(width / this.bg.width, height / this.bg.height);
    this.bg.setScale(bgScale).setPosition(width / 2, height / 2);

    // Jar: 60% of the screen width (max 320px), half cut off at the bottom
    const jarWidth = Math.min(width * 0.6, 320);
    this.jar.setScale(jarWidth / this.jar.width).setPosition(width / 2, height);

    // Username: font size follows the screen width
    const fontSize = Phaser.Math.Clamp(Math.round(width / 15), 18, 32);
    this.nameText.setFontSize(fontSize).setPosition(width / 2, height / 2);
  }
}