/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {
  pageInputResi,
  pending,
} from '../templates/template-creator';
import TrackingDataResults from '../../data/tracking-data-results';


const Dashboard = {
  async render() {
    return pageInputResi();
  },

  async afterRender() {
    const enterReceiptNumber = document.querySelector('#receiptNumberResi');
    const courierButtons = document.querySelectorAll('.button-courier');
    const contentTrackResult = document.querySelector('#contentTrackResult');

    courierButtons.forEach((courierButton) => {
      courierButton.addEventListener('click', async () => {
        const courier = courierButton.id;
        const numberResi = enterReceiptNumber.value;

        if (!numberResi) {
          console.log('Anda belum memasukan nomor resi !');
          return false;
        }

        contentTrackResult.innerHTML = '';
        contentTrackResult.innerHTML += pending();

        TrackingDataResults(numberResi, courier);
      });
    });
  },
};

export default Dashboard;
