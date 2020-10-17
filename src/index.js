import Control from "./control";
import Player from "./player";

const C_HEIGHT = 250;
const C_WIDTH = 500;
const FRICTION = 0.25;
const SPEED_INCREASER = 0.5;
const SPEED = 5;
const GRAVITY = 0.6;

const context = document.querySelector("canvas").getContext("2d");
context.canvas.height = C_HEIGHT;
context.canvas.width = C_WIDTH;

const control = new Control();
const player = new Player(0, 0, 50, 50);

const loop = () => {
  if (control.right) {
    if (player.velX <= SPEED) {
      player.velX += SPEED_INCREASER;
    }
  }

  if (control.left) {
    if (player.velX >= -SPEED) {
      player.velX -= SPEED_INCREASER;
    }
  }

  if (control.up && !player.jump) {
    player.velY -= 10;
    player.jump = true;
  }

  if (player.x < -player.width) {
    player.x = C_WIDTH + player.width;
  }

  if (player.x > C_WIDTH + player.width) {
    player.x = -player.width;
  }

  if (player.y > C_HEIGHT - player.height) {
    player.jump = false;
    player.velY = 0;
    player.y = C_HEIGHT - player.height;
    console.log("ПАДАЮ");
  } else {
    player.y += player.velY += GRAVITY;
  }

  context.fillStyle = "#3b3b3b";
  context.fillRect(0, 0, C_WIDTH, C_HEIGHT);
  context.fillStyle = "yellow";
  context.fillRect(
    (player.x += player.velX),
    player.y,
    player.width,
    player.height
  );

  if (player.velX >= FRICTION) {
    player.velX -= FRICTION;
  } else if (player.velX <= -FRICTION) {
    player.velX += FRICTION;
  }

  window.requestAnimationFrame(loop);
};
window.requestAnimationFrame(loop);

window.addEventListener("keydown", control.keyListener);
window.addEventListener("keyup", control.keyListener);

alert("dsadsafsa");
