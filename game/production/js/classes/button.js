class Button {
  constructor(image, x, y, width, height) {
    this.image = image;
    this.width = width;
    this.height = height;
    this.pos = {
      x: x,
      y: y,
    };
  }

  init() {
    c.drawImage(this.image, this.pos.x, this.pos.y, this.width, this.height);
  }
}
