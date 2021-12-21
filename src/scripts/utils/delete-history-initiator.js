
import HistoryCekPaketIdb from "../data/historycekpaket-idb";
const deleteAHistory = (buttons) => {

        buttons.forEach(button => {
                button.addEventListener('click', async () => {
                 
                    const awb = button.id;
                
                    await HistoryCekPaketIdb.deletePaket(awb);
                    window.location.reload();
                });  
        });
    
    };

export default deleteAHistory;
