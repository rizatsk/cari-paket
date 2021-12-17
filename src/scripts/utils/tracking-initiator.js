
import TrackingDataResults from '../data/tracking-data-results';
import {pending} from '../views/templates/template-creator';

const TrackingInitiator = (courierButtons, enterReceiptNumber, contentTrackResult) => {
  courierButtons.forEach((courierButton) => {
    courierButton.addEventListener('click', async () => {
      const courier = courierButton.id;
      const numberResi = enterReceiptNumber.value;

      if (!numberResi) {
        console.log('Anda belum memasukan nomor resi !');
        return false;
      }

      contentTrackResult.scrollIntoView(); // untuk focus ketika data resi dicari

      contentTrackResult.innerHTML = '';
      contentTrackResult.innerHTML += pending();

      TrackingDataResults(numberResi, courier);
    });
  });
};

export default TrackingInitiator;
