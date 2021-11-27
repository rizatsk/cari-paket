/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-inititator';
import ShowTrackList from '../utils/show-track-list';

/* eslint-disable require-jsdoc */
class App {
  constructor({button, drawer, content}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  detailClick() {
    // ShowTrackList(button, content);
  }

  async renderPage() {
    const url = UrlParser.parseActiveUtlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
