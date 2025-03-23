import * as Pixi from "pixi.js";
import "./style.css";
import { initDevtools } from "@pixi/devtools";
import { Game } from "./game";

const app = new Pixi.Application();

async function setup() {
  await app.init({ width: 1024, height: 768, backgroundColor: "blue" });
  document.body.appendChild(app.canvas);
}

(async () => {
  await setup();

  const game = new Game(app);
  app.stage.addChild(game);
  app.ticker.add(game.handleUpdate, game);

  // document.addEventListener("keydown", (e) => {
  //   game.keyboardProcessor.onKeyDown(e.key);
  // });
  // document.addEventListener("keyup", (e) => {
  //   game.keyboardProcessor.onKeyUp(e.key);
  // });
})();

initDevtools({
  app,
});
