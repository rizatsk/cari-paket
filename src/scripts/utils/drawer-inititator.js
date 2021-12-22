const DrawerInitiator = {
  init({button, drawer, content, buttonOpen, buttonClose}) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, buttonOpen, buttonClose);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, buttonOpen, buttonClose);
    });
  },

  _toggleDrawer(event, drawer, buttonOpen, buttonClose) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    buttonOpen.classList.toggle('hidden');
    buttonClose.classList.toggle('hidden');
  },

  _closeDrawer(event, drawer, buttonOpen, buttonClose) {
    event.stopPropagation();
    drawer.classList.remove('open');
    const conditionButtonOpen = buttonOpen.classList.contains('hidden');
    const conditionButtonClose = buttonClose.classList.contains('hidden');

    if (conditionButtonOpen) {
      buttonOpen.classList.remove('hidden');
    }

    if (conditionButtonClose === false) {
      buttonClose.classList.add('hidden');
    }
  },
};

export default DrawerInitiator;
