class Raycast {
  constructor(dir, x, y, length, target) {
    this.dir = dir;
    this.length = length;
    this.target = target;
    this.pos = {
      x: x,
      y: y,
    };
  }
  fire() {
    if (this.dir === 'up') {
      console.log('ray up');
    } else if (this.dir === 'right') {
      console.log('ray right');
    } else if (this.dir === 'down') {
      console.log('ray down');
    } else if (this.dir === 'left') {
      console.log('ray left');
    }
  }
}
