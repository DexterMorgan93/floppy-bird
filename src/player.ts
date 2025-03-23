import { Container, Graphics } from "pixi.js";
import { Game } from "./game";

export class Player extends Container {
  private game: Game;
  private speedY = 0;

  constructor(game: Game) {
    super();

    this.game = game;

    const view = new Graphics();
    view.setStrokeStyle({
      width: 2,
      color: "yellow",
    });
    view.rect(0, 0, 200, 200);
    view.fill({ color: "red" });
    view.stroke();

    this.position.set(50, 0);
    this.addChild(view);
  }

  handleUpdate() {
    this.y += this.speedY;

    if (this.isTouchingBottom()) {
      this.y = 768 - this.height;
    } else {
      this.speedY += this.game.gravity;
    }
  }

  isTouchingBottom() {
    return this.y >= 768 - this.height;
  }

  isTouchingTop() {
    return this.y <= 0;
  }

  flap() {
    if (!this.isTouchingTop()) {
      this.speedY = -5;
    }
  }
}
