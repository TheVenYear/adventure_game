class Player {
  constructor(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

  jump = true;
  velX = 0;
  velY = 0;
}

export default Player;
