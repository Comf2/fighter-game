//make a big platform class, it will override the check col method
//add collision to every single side, and always be running
//it will toggle
class Platform {
  constructor(x, y, width, height, sprite) {
    this.position = {
      x: x,
      y: y,
    };
    //up makes value less
    (this.sprite = sprite),
      (this.width = width),
      (this.height = height),
      (this.sides = {
        top: this.position.y,
        bottom: this.position.y + this.height,
        left: this.position.x,
        right: this.position.x - this.width,
      });
  }
  draw() {
    c.fillStyle = 'transparent';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
    c.drawImage(
      this.sprite,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  checkCol() {
    if (keys.down.pressed === true) return;
    else if (
      player.sides.bottom <= this.position.y &&
      player.sides.bottom + player.velocity.y >= this.position.y &&
      player.sides.left >= this.position.x &&
      player.position.x <= this.position.x + this.width
    ) {
      player.velocity.y = 0;
    }
  }
}

//adds collision to every side of the platform,
//makes it untogglable
class stagePlatform extends Platform {
  //checks collision of all sides of the platform
  //besides top col
  checkFullCol() {
    //vertical col
    //check if the players x position is within the main platform

    //checking left col 
    if

  }
}
