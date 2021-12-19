/* eslint-disable new-cap */
import API_ENDPOINT from '../globals/api-endpoint';
import {
  renderTrackingDataResults,
  renderErrorTrackingDataResults,
  renderNothingInternet,
} from '../render/render-page-tracking-result';
import HistoryPaketInitiator from '../utils/history-paket-initiator';
import HistoryCekPaketIdb from './historycekpaket-idb';

const TrackingDataResults = async (numberResi, courier) => {
  try {
    const respone = await fetch(API_ENDPOINT.TRACKING(numberResi, courier));
    const responseJson = await respone.json();
    const dataPaket = responseJson.data;
    if (responseJson.data) {
      renderTrackingDataResults(responseJson.data);
      HistoryPaketInitiator.init({
        historyPaket: HistoryCekPaketIdb,
        paket: {
          numberResi: dataPaket.summary.awb,
          summary: dataPaket.summary,
          detail: dataPaket.detail,
          history: dataPaket.history,
          courier : courier,
        },
      });
    } else {
      renderErrorTrackingDataResults(responseJson.status);
    }
  } catch (error) {
    renderNothingInternet(error);
  }
};

export default TrackingDataResults;
