class Player {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;

    this.position = {
      x: x,
      y: y,
    };
    this.velocity = {
      x: 0,
      y: 0,
      prevVel: 0,
    };

    this.sides = {
      top: this.position.y,
      bottom: this.position.y + this.height,
      left: this.position.x,
      right: this.position.x + this.width,
    };
    this.movement = {
      jumpHeight: -19,
      moveSpeed: 12,
      jumping: {
        maxJumps: 2,
        usedJumps: 0,
      },
    };
  }

  draw() {
    c.fillStyle = '#cfc';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  jump() {
    if (this.velocity.y === 0 && this.velocity.prevVel >= 0) {
      this.movement.jumping.usedJumps = 0;
    }
    if (
      (this.velocity.y === 0 && this.velocity.prevVel >= 0) ||
      this.movement.jumping.usedJumps < this.movement.jumping.maxJumps
    ) {
      this.movement.jumping.usedJumps += 1;
      this.velocity.y = this.movement.jumpHeight;
    }
  }
  move() {
    if (keys.right.pressed) {
      player.velocity.x = this.movement.moveSpeed;
    }

    if (keys.left.pressed) {
      player.velocity.x = -this.movement.moveSpeed;
    }
    if (!keys.left.pressed && !keys.right.pressed) {
      player.velocity.x = 0;
    }
  }
  update() {
    //x val
    this.position.x += this.velocity.x;
    //y vel
    this.velocity.prevVel = this.velocity.y;
    this.position.y += this.velocity.y;

    //updates side values
    this.sides.top = this.position.y;
    this.sides.bottom = this.position.y + this.height;
    this.sides.left = this.position.x;
    this.sides.right = this.position.x + this.width;

    if (this.sides.bottom + this.velocity.y < gameArea.height) {
      this.velocity.y++;
    } else {
      this.velocity.y = 0;
    }
  }
}
