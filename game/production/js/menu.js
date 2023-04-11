function checkMenu(currentStage) {
  if (currentStage.name === 'mainMenu') {
    initMenu();
  }
}

function initMenu() {
  //drawing main menu
  c.drawImage(titleSprite, window.innerWidth / 2 - 840 / 2, 50, 840, 320);
}
