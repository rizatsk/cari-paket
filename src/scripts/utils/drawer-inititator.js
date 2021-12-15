const DrawerInitiator = {
  init({button, drawer, buttonOpen, buttonClose}) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, buttonOpen, buttonClose);
    });
  },

  _toggleDrawer(event, drawer, buttonOpen, buttonClose) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    buttonOpen.classList.toggle('hidden');
    buttonClose.classList.toggle('hidden');
  },

};

export default DrawerInitiator;
