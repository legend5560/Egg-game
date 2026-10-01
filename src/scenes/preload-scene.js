import Phaser from '../lib/phaser.js';
import { SCENE_KEYS } from '../common/scene-keys.js';
import { IMAGE_ASSETS, TEXTURE_ATLAS_ASSETS } from '../common/assets.js';
import { requireUser } from '../common/auth.js';

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
    // Waits for the saved session, or shows the login form if there isn't one
    const user = await requireUser();

    // Make the player's info available to every scene
    this.registry.set('player', {
      uid: user.uid,
      username: (user.displayName || user.email || '').toLowerCase(),
    });

    this.scene.start(SCENE_KEYS.GAME_SCENE);
  }
}