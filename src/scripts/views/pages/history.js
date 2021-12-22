/* eslint-disable max-len */
import {buttonClearAllHistory, contentHistoryNothing, pageDataHistoryPaket, pageHistory} from '../templates/template-creator';
import HistoryCekPaketIdb from '../../data/historycekpaket-idb';
import clearAll from '../../utils/clear-all-historyPaket';
import deleteHistory from '../../utils/delete-historyPaket';

const HistoryPage = {
  async render() {
    return pageHistory();
  },

  async afterRender() {
    const allResi = await HistoryCekPaketIdb.getAllPaket();
    const contentButtonClearAll = document.querySelector('.clear-button-container');
    const resiContainer = document.querySelector('.contentHistory');

    contentButtonClearAll.innerHTML = '';
    resiContainer.innerHTML = contentHistoryNothing();

    if (allResi.length > 0) {
      contentButtonClearAll.innerHTML += buttonClearAllHistory();
      resiContainer.innerHTML = '';

      allResi.forEach((resi) => {
        resiContainer.innerHTML += pageDataHistoryPaket(resi);
      });

      const buttonClearAllHistoryPaket = document.querySelector('.clearAll-button');
      const buttonDeleteHistoryPaket = document.querySelectorAll('.deleteHistory-button');

      clearAll(buttonClearAllHistoryPaket, resiContainer);
      deleteHistory(buttonDeleteHistoryPaket, resiContainer);
    }
  },
};

export default HistoryPage;
