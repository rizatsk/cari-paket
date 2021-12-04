/* eslint-disable new-cap */
/* eslint-disable max-len */

import {
  pageInputResi,
} from '../templates/template-creator';
import dataCourier from '../../data/data-courier.json';
import RenderButtonCourier from '../../render/render-button-courier';
import TrackingInitiator from '../../utils/tracking-initiator';


const Dashboard = {
  async render() {
    return pageInputResi();
  },

  async afterRender() {
    const colButtonDeliveryService = document.querySelector('.col-buttonDeliveryService');
    RenderButtonCourier(dataCourier, colButtonDeliveryService);

    const enterReceiptNumber = document.querySelector('#receiptNumberResi');
    const courierButtons = document.querySelectorAll('.button-courier');
    const contentTrackResult = document.querySelector('#contentTrackResult');
    TrackingInitiator(courierButtons, enterReceiptNumber, contentTrackResult);
  },
};

export default Dashboard;
