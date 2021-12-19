import {historyPgTemplate} from "../templates/template-creator";
import HistoryCekPaketIdb from "../../data/historycekpaket-idb";
import clearAll from "../../utils/clear-history-initiator";

// import HistoryResiIdb from "../../data/history-resi-idb";
const HistoryPage = {
    async render() {
     return  `<div class="historyContainerPage">
     <button class="clear-button"> clear </button>
     <div class="contentHistory">
     </div>
   </div>
   
   `},
  
    async afterRender() {
      const buttonclear = document.querySelector('.clear-button');
      
      // buttonclear.addEventListener('click', () => {
      //   console.log('ok');
      // }); 
      
     const allResi = await HistoryCekPaketIdb.getAllPaket();
     console.log(allResi);
     
     const resiContainer = document.querySelector('.contentHistory');
      // console.log(resiContainer);
      // taro button disini
      

      allResi.forEach(resi => {
        // console.log(resi.awb);
        
        resiContainer.innerHTML += historyPgTemplate(resi);
        
      });
      
      console.log(buttonclear);
      clearAll(buttonclear, resiContainer, allResi); 

      
  
    },
  };
  
  export default HistoryPage;