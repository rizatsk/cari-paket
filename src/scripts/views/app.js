/* eslint-disable camelcase */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-inititator';

/* eslint-disable require-jsdoc */
class App {
  constructor({button, drawer, content, buttonOpen, buttonClose}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._buttonOpen = buttonOpen;
    this._buttonClose = buttonClose;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      buttonOpen: this._buttonOpen,
      buttonClose: this._buttonClose,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUtlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
