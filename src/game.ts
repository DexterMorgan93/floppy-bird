import { Application, Container, Graphics } from "pixi.js";
import { Player } from "./player";
import { Background } from "./background";

export class Game extends Container {
  private app: Application;
  player: Player;
  background: Background;
  public gravity = 0.15;
  public speed = 2;

  constructor(app: Application) {
    super();
    this.app = app;

    this.background = new Background();
    this.player = new Player(this);

    this.addChild(this.background);
    this.addChild(this.player);

    const hitArea = new Graphics();
    hitArea.rect(0, 0, this.app.canvas.width, this.app.canvas.height);
    hitArea.fill({ color: 0x000000, alpha: 0 }); // Прозрачный
    hitArea.eventMode = "static";
    hitArea.cursor = "pointer";

    hitArea.on("pointerdown", () => {
      this.player.flap();
    });

    document.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        this.player.flap();
      }
    });

    this.addChild(hitArea);
  }

  handleUpdate() {
    this.player.handleUpdate();
    this.background.handleUpdate();
  }
}
