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
    const unit = Math.min(width, height); // one number everything scales from

    // Background: scaled to cover the whole screen
    const bgScale = Math.max(width / this.bg.width, height / this.bg.height);
    this.bg.setScale(bgScale).setPosition(width / 2, height / 2);

    // Jar: fits 70% of the screen's short side, but never scales above 100%.
    // Centered on the bottom edge, so the bottom half is cut off.
    const jarScale = Math.min(1, (unit * 0.7) / this.jar.width);
    this.jar.setScale(jarScale).setPosition(width / 2, height);

    // Username: font size follows the screen size
    this.nameText.setFontSize(Math.round(unit * 0.06)).setPosition(width / 2, height / 2);
  }
}