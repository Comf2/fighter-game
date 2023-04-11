//add a second player
//add class inheritance for weights of characters
//make extremely scalable to make maps easier
//make character sprites
//make scalable to make a main menu
//make a main menu canvas
const gameArea = document.querySelector('#game-area');
const c = gameArea.getContext('2d');
gameArea.width = window.innerWidth;
gameArea.height = window.innerHeight;

let x = 100;
let y = 100;

//TODO: Refactor to a stages file

//changes values based on this current stage
const stageTypes = {
  menu: 'menu',
  battle: 'battle',
};

const stages = [
  {
    name: 'mainMenu',
    background: mainMenuBackgroundSprite,
    type: stageTypes.menu,
    music: [],
  },
  {
    name: 'selectStage',
    background: mainMenuBackgroundSprite,
    type: stageTypes.menu,
    music: [],
  },
  {
    name: 'dreamland',
    background: dreamlandBackgroundSprite,
    type: stageTypes.battle,
    music: [],
  },
];
let currentStage = stages[0];

//make for player one
//make a se
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  down: {
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
const mainPlatform = new stagePlatform(
  MainPlatformDim.pos.x,
  MainPlatformDim.pos.y,
  MainPlatformDim.width,
  MainPlatformDim.height,
  dreamlandGroundSprite
);

const leftPlatform = new Platform(
  MainPlatformDim.pos.x + MainPlatformDim.width / 8,
  MainPlatformDim.pos.y - 140,
  200,
  25,
  dreamlandPlatformSprite
);

const rightPlatform = new Platform(
  MainPlatformDim.pos.x +
    MainPlatformDim.width -
    MainPlatformDim.width / 8 -
    200,
  MainPlatformDim.pos.y - 140,
  200,
  25,
  dreamlandPlatformSprite
);
const centerPlatform = new Platform(
  window.innerWidth / 2 - 225 / 2 + 5,
  MainPlatformDim.pos.y - 315,
  225,
  25,
  dreamlandPlatformSprite
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
  c.fillStyle = 'transparent';
  c.fillRect(0, 0, gameArea.width, gameArea.height);

  checkCurrentStage(c);
  if (currentStage.type === stageTypes.battle) {
    player.draw();
    player.update();
    player.move();

    platforms.forEach((platform) => {
      platform.draw();
      platform.checkCol();
    });
    mainPlatform.checkFullCol();
  } else if (currentStage.type === stageTypes.menu) {
    checkMenu(currentStage);
  }
})();

function checkCurrentStage(c) {
  for (let i = 0; i < stages.length; i++) {
    const stage = stages[i];

    if (stage.name === currentStage.name) {
      //configure backgruond
      c.drawImage(stage.background, 0, 0, gameArea.width, gameArea.height);
      //configure based on stage type
      currentStage.type = stage.type;
    }
  }
}

window.addEventListener('keydown', (e) => {
  let key = e.code;
  switch (key) {
    case 'Space':
      player.jump();

      break;
    case 'KeyW':
      player.jump();

      break;
    case 'KeyD':
      keys.right.pressed = true;

      break;

    case 'KeyA':
      keys.left.pressed = true;

      break;
    case 'KeyS':
      keys.down.pressed = true;
      break;
  }
});
window.addEventListener('keyup', (e) => {
  let key = e.code;
  switch (key) {
    case 'KeyD':
      keys.right.pressed = false;

      break;

    case 'KeyA':
      keys.left.pressed = false;

      break;
    case 'KeyS':
      keys.down.pressed = false;
      break;
  }
});
console.log(keys.left.pressed);
