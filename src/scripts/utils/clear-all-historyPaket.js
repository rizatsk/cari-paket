import HistoryCekPaketIdb from '../data/historycekpaket-idb';
import HistoryPage from '../views/pages/history';

const clearAll = (button, resiContainer) => {
  button.addEventListener('click', async () => {
    try {
      await HistoryCekPaketIdb.clearAllPaket();
      resiContainer.innerHTML = '';
      await HistoryPage.afterRender();
    } catch (error) {
      console.log(error);
    }
  });
};

export default clearAll;

