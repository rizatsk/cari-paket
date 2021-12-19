import HistoryCekPaketIdb from "../data/historycekpaket-idb";

const clearAll = (Button) => {
    console.log("masuk");
    console.log(Button);
    Button.addEventListener('click', async () => {
         console.log("masuk1");
        // console.log(Button);
        
        // await HistoryCekPaketIdb.clearPaket();
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
  