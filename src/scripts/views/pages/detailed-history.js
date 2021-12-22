
/* eslint-disable new-cap */
/* eslint-disable max-len */
import { renderTrackingDataResultsFromHistory,renderTrackingDataResults
} from '../../render/render-page-tracking-result';

import UrlParser from '../../routes/url-parser';


import { dashboardHistory } from '../templates/template-creator';



import HistoryCekPaketIdb from '../../data/historycekpaket-idb';
 
 const DetailHistory = {
   async render() {

    return dashboardHistory();
     
   },
 
   async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log(url.id);
    const awb = url.id.toUpperCase();
    console.log(awb)


    const request = await HistoryCekPaketIdb.getPaket((awb));

       renderTrackingDataResults(request);
       
   //   const colButtonDeliveryService = document.querySelector('.col-buttonDeliveryService');
   //   RenderButtonCourier(dataCourier, colButtonDeliveryService);
 
   //   const enterReceiptNumber = document.querySelector('#receiptNumberResi');
   //   const courierButtons = document.querySelectorAll('.button-courier');
   //   const contentTrackResult = document.querySelector('#contentTrackResult');
   //   TrackingInitiator(courierButtons, enterReceiptNumber, contentTrackResult);
   },
 };
 
 export default DetailHistory;
 
 