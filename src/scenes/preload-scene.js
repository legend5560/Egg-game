import Phaser from '../lib/phaser.js';
import { SCENE_KEYS } from '../common/scene-keys.js';
import { IMAGE_ASSETS, TEXTURE_ATLAS_ASSETS } from '../common/assets.js';
import { waitForParentAuth } from '../common/auth.js';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({
      key: SCENE_KEYS.PRELOAD_SCENE,
    });
  }

  preload() {
    IMAGE_ASSETS.forEach((asset) => {
      this.load.image(asset.assetKey, asset.path);
    });
    TEXTURE_ATLAS_ASSETS.forEach((asset) => {
      this.load.atlas(asset.assetKey, asset.textureURL, asset.atlasURL);
    });
  }

  async create() {
    // Name sent by the website if the game is embedded and the visitor is logged in
    const parentPlayer = await waitForParentAuth();

    this.registry.set('player', {
      uid: parentPlayer?.uid || null,
      username: parentPlayer?.username || 'Player',
    });

    this.scene.start(SCENE_KEYS.GAME_SCENE);
  }
}