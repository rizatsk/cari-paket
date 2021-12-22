import HistoryCekPaketIdb from "../data/historycekpaket-idb";

const clearAll = (button) => {

    button.addEventListener('click', async () => {
         console.log("masuk1");
      

        await HistoryCekPaketIdb.clearPaket();
        window.location.reload();

        
      });
   
  };

  export default clearAll;
  