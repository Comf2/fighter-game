function checkMenu(currentStage) {
  if (currentStage.name === 'mainMenu') {
    initMenu();
  }
  switch (currentStage.name) {
    case 'mainMenu':
      initMenu();
      break;
    case 'selectMode':
      initSelectMode();
      break;
  }
}

let mainMenuContAlph = 1;
function initMenu() {
  let mainMenuContAlphInt = -0.02;
  //drawing main menu
  c.drawImage(titleSprite, window.innerWidth / 2 - 840 / 2, 50, 840, 320);

  flashMainMenuCont();

  // c.drawImage(
  //   mainMenuCont,
  //   window.innerWidth / 2 - 288.5,
  //   window.innerHeight - 100,
  //   577,
  //   24
  // );
  document.body.onkeydown = () => (currentStage = stages[1]);
}

let mainMenuContOpacity = 1;
let mainMenuContDecreasing = true;
function flashMainMenuCont() {
  const opacityStep = 0.02;
  c.globalAlpha = Math.abs(mainMenuContOpacity);
  c.drawImage(
    mainMenuCont,
    window.innerWidth / 2 - 288.5,
    window.innerHeight - 100,
    577,
    24
  );
  if (mainMenuContDecreasing) {
    mainMenuContOpacity -= opacityStep;
    if (mainMenuContOpacity <= 0) {
      mainMenuContDecreasing = false;
    }
  } else {
    mainMenuContOpacity += opacityStep;
    if (mainMenuContOpacity >= 1) {
      mainMenuContDecreasing = true;
    }
  }
  c.globalAlpha = 1;
}

function initSelectMode() {
  c.drawImage(slctBattleBtn, 45, 45, 1004, 432);
  c.drawImage(slctBottomLftBtn, 50, window.innerHeight - 25 - 432, 900, 432);
  c.drawImage(
    slctBottomrgtBtn,
    window.innerWidth - 45 - 916,
    window.innerHeight - 25 - 360,
    916,
    360
  );
  c.drawImage(slctTopRgtBtn, window.innerWidth - 45 - 812, 45, 812, 340);
  c.drawImage(
    slctSettingsBtn,
    window.innerWidth - 45 - 156,
    window.innerHeight / 2 - 156 / 2,
    156,
    156
  );
  c.drawImage(
    slctStoreBtn,
    window.innerWidth - 45 - 536 - 170,
    window.innerHeight / 2 - 156 / 2,
    536,
    156
  );

  c.drawImage(
    slctCenterCircle,
    window.innerWidth / 2 - 408 / 2,
    window.innerHeight / 2 - 408 / 2,
    408,
    408
  );
}
//102 102
