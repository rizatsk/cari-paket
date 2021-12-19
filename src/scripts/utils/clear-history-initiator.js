import HistoryCekPaketIdb from "../data/historycekpaket-idb";
import { contentTrackList } from "../views/templates/template-creator";
import { historyPgTemplate } from "../views/templates/template-creator";

const clearAll = (button, contentHistory, allResi) => {
      // console.log("masuk");
      // console.log(button);
    // button.addEventListener('click', () => {
    //   console.log('ok');
    // });
    button.addEventListener('click', async () => {
         console.log("masuk1");
        // console.log(Button);

        await HistoryCekPaketIdb.clearPaket();

        allResi.forEach(resi => {
          // console.log(resi.awb);
          
          contentHistory.innerHTML = '';
          // contentHistory.innerHTML += historyPgTemplate(resi);
          
        });
        
      });
   
  };

// const clearAll = {
//   init({button}) {
//     button.addEventListener('click', (e) => {
//       this._clear(button);
//     });
//     console.log("masuk");
//   },
//   _clear(button) {
//   console.log(button)
//   },
// };
  export default clearAll;
  