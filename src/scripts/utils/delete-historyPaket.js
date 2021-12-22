/* eslint-disable max-len */
import HistoryCekPaketIdb from '../data/historycekpaket-idb';
import HistoryPage from '../views/pages/history';

const deleteHistory = async (buttons, resiContainer) => {
  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      const awb = button.id;
      try {
        await HistoryCekPaketIdb.deletePaket(awb);
        resiContainer.innerHTML = '';
        await HistoryPage.afterRender();
      } catch (error) {
        console.log(error);
      }
    });
  });
};

export default deleteHistory;
