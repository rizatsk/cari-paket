import {historyPgTemplate} from "../templates/template-creator";
import HistoryCekPaketIdb from "../../data/historycekpaket-idb";
import clearAll from "../../utils/clear-history-initiator";

// import HistoryResiIdb from "../../data/history-resi-idb";
const HistoryPage = {
    async render() {
     return  `<div class="historyContainerPage">
     <button class="clear-Button"> clear </button>
   </div>
   
   `},
  
    async afterRender() {
      
     const allResi = await HistoryCekPaketIdb.getAllPaket();
     console.log(allResi);
     
     const resiContainer = document.querySelector('.historyContainerPage');
      // console.log(resiContainer);
      // taro button disini
      const buttonclear = document.querySelector('.clear-Button');
      clearAll(buttonclear);


      allResi.forEach(resi => {
      // console.log(resi.awb);

      resiContainer.innerHTML += historyPgTemplate(resi)
       
     });

  
    },
  };
  
  export default HistoryPage;