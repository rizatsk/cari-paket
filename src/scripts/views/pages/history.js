import {historyPgTemplate,minireport} from "../templates/template-creator";
import HistoryCekPaketIdb from "../../data/historycekpaket-idb";
import clearAll from "../../utils/clear-history-initiator";
import deleteAHistory from "../../utils/delete-history-initiator";


// import HistoryResiIdb from "../../data/history-resi-idb";
const HistoryPage = {
    async render() {
     return  `<div class="historyContainerPage">
    <div class="clear-button-container"> 
     <button class="clear-button"> Clear All </button>
     </div>
     <div class="contentHistory">
     </div>
   </div>
   
   `},
  
    async afterRender() {
      const buttonclear = document.querySelector('.clear-button');
      
      
     const allResi = await HistoryCekPaketIdb.getAllPaket();
     console.log(allResi);
     
     const resiContainer = document.querySelector('.contentHistory');


      allResi.forEach(resi => {  
        resiContainer.innerHTML += historyPgTemplate(resi);
        
      });
      const delbut= document.querySelectorAll('.delete-button');
      // console.log(delbut);
      deleteAHistory(delbut);
      clearAll(buttonclear); 

      
  
    },
  };
  
  export default HistoryPage;