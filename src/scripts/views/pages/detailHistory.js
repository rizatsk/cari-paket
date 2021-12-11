
/* eslint-disable new-cap */
/* eslint-disable max-len */
import { renderTrackingDataResultsFromHistory } from '../../render/render-page-tracking-result';

import UrlParser from '../../routes/url-parser';
import {
    pageInputResi,
  } from '../templates/template-creator';
  import dataCourier from '../../data/data-courier.json';
  import RenderButtonCourier from '../../render/render-button-courier';
  import TrackingInitiator from '../../utils/tracking-initiator';
  
  
  const DetailHistory = {
    async render() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        console.log(url)
      return `<p>test</p>`
    },
  
    async afterRender() {
        console.log('test');
    //   const colButtonDeliveryService = document.querySelector('.col-buttonDeliveryService');
    //   RenderButtonCourier(dataCourier, colButtonDeliveryService);
  
    //   const enterReceiptNumber = document.querySelector('#receiptNumberResi');
    //   const courierButtons = document.querySelectorAll('.button-courier');
    //   const contentTrackResult = document.querySelector('#contentTrackResult');
    //   TrackingInitiator(courierButtons, enterReceiptNumber, contentTrackResult);
    },
  };
  
  export default DetailHistory;
  
  