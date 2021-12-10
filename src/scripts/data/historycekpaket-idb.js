import {openDB} from 'idb';
import CONFIG from '../globals/config';

const {DATABASE_NAME, DATABSE_VERSION, OBJECT_STORE_NAME} = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABSE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {keyPath: 'awb'});
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
    if (!paket.hasOwnProperty('awb')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, paket);
  },
  async deletePaket(numberResi) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, numberResi);
  },
};

export default HistoryCekPaketIdb;
