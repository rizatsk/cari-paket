import {historyPgTemplate} from "../templates/template-creator";
import HistoryCekPaketIdb from "../../data/historycekpaket-idb";
// import HistoryResiIdb from "../../data/history-resi-idb";
const HistoryPage = {
    async render() {
     return  `<div class="historyContainer">
   </div>
   `},
  
    async afterRender() {
      
     const allResi = await HistoryCekPaketIdb.getAllPaket();
     console.log(allResi);
     
     const resiContainer = document.querySelector('.historyContainer');
      // console.log(resiContainer);
      allResi.forEach(resi => {
      // console.log(resi.awb);

      resiContainer.innerHTML += historyPgTemplate(resi)
       
     });

    //   const colButtonDeliveryService = document.querySelector('.col-buttonDeliveryService');
    //   RenderButtonCourier(dataCourier, colButtonDeliveryService);
  
    //   const enterReceiptNumber = document.querySelector('#receiptNumberResi');
    //   const courierButtons = document.querySelectorAll('.button-courier');
    //   const contentTrackResult = document.querySelector('#contentTrackResult');
    //   TrackingInitiator(courierButtons, enterReceiptNumber, contentTrackResult);
    },
  };
  
  export default HistoryPage;