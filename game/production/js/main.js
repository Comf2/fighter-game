const gameArea = document.querySelector("#game-area");
const c = gameArea.getContext("2d");
gameArea.width = window.innerWidth;
gameArea.height = window.innerHeight;

let x = 100;
let y = 100;

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};
//width then height

//plaform x,y,width,height
const MainPlatformDim = {
  width: 1230,
  height: 360,
  pos: {
    x: window.innerWidth / 2 - 1200 / 2,
    y: window.innerHeight / 1.75,
  },
};
const mainPlatform = new Platform(
  MainPlatformDim.pos.x,
  MainPlatformDim.pos.y,
  MainPlatformDim.width,
  MainPlatformDim.height,
  groundSprite
);

const leftPlatform = new Platform(
  MainPlatformDim.pos.x + MainPlatformDim.width / 8,
  MainPlatformDim.pos.y - 140,
  200,
  25,
  platformSprite
);

const rightPlatform = new Platform(
  MainPlatformDim.pos.x +
    MainPlatformDim.width -
    MainPlatformDim.width / 8 -
    200,
  MainPlatformDim.pos.y - 140,
  200,
  25,
  platformSprite
);
const centerPlatform = new Platform(
  window.innerWidth / 2 - 225 / 2 + 5,
  MainPlatformDim.pos.y - 315,
  225,
  25,
  platformSprite
);
let platforms = [mainPlatform, leftPlatform, rightPlatform, centerPlatform];

//player, width,height,x,y
const player = new Player(
  40,
  60,
  MainPlatformDim.pos.x,
  MainPlatformDim.pos.y - 100
);

(function Update() {
  window.requestAnimationFrame(Update);
  c.clearRect(0, 0, gameArea.width, gameArea.height);
  c.fillStyle = "transparent";
  c.fillRect(0, 0, gameArea.width, gameArea.height);

  player.draw();
  player.update();
  player.move();

  platforms.forEach((platform) => {
    platform.draw();
    platform.checkCol();
  });
})();
window.addEventListener("keydown", (e) => {
  let key = e.code;
  switch (key) {
    case "Space":
      player.jump();

      break;
    case "KeyW":
      player.jump();

      break;
    case "KeyD":
      keys.right.pressed = true;

      break;

    case "KeyA":
      keys.left.pressed = true;

      break;
  }
});
window.addEventListener("keyup", (e) => {
  let key = e.code;
  switch (key) {
    case "KeyD":
      keys.right.pressed = false;

      break;

    case "KeyA":
      keys.left.pressed = false;

      break;
  }
});
console.log(keys.left.pressed);

platformSprite.onload = () => {};
