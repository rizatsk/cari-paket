import {openDB} from 'idb';
import CONFIG from '../globals/config';

const {DATABASE_NAME, DATABSE_VERSION, OBJECT_STORE_NAME} = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABSE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {keyPath: 'numberResi'});
  },
});

const HistoryCekPaketIdb = {
  async getPaket(numberResi) {
    return (await dbPromise).get(OBJECT_STORE_NAME, numberResi);
  },
  async getAllPaket() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putPaket(paket) {
    if (!paket.hasOwnProperty('numberResi')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, paket);
  },
  async deletePaket(numberResi) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, numberResi);
  },
  async clearPaket() {
    return (await dbPromise).clear(OBJECT_STORE_NAME);
  },
};

export default HistoryCekPaketIdb;
