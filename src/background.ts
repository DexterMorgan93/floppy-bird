import { Assets, Container, TilingSprite, Texture } from "pixi.js";

export class Background extends Container {
  private tiling!: TilingSprite;
  private gameSpeed = 2;

  constructor() {
    super();
    this.loadAsset();
  }

  private async loadAsset() {
    const texture: Texture = await Assets.load("background_single.png");

    // Создаём TilingSprite и добавляем его внутрь Background-контейнера
    this.tiling = new TilingSprite({
      texture,
      width: 1024,
      height: 768,
    });

    this.addChild(this.tiling);
  }

  public handleUpdate(): void {
    if (this.tiling) {
      this.tiling.tilePosition.x -= this.gameSpeed;
    }
  }
}
