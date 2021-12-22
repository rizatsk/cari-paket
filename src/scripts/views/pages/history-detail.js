/* eslint-disable max-len */
import {contentHistoryDetail, pageDataHistoryDetailPaket} from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import HistoryCekPaketIdb from '../../data/historycekpaket-idb';
import {renderTrackingDataResults} from '../../render/render-page-tracking-result';

const HistoryDetail = {
  async render() {
    return pageDataHistoryDetailPaket();
  },

  async afterRender() {
    const historyDetail = document.querySelector('.contentHistoryDetail');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const awb = url.id.toUpperCase();

    historyDetail.innerHTML = contentHistoryDetail(awb);

    const contentTrackResult = document.querySelector('.historyDetailContainerPage');

    const request = await HistoryCekPaketIdb.getPaket(awb);
    renderTrackingDataResults(request, contentTrackResult);
  },
};

export default HistoryDetail;

