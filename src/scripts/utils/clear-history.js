const clearAll = {
    async init({historyPaket}) {
      this._historyPaket = historyPaket;
     
  
      await this._clearPaket();
    },
  
    async _clearPaket() {
      await this._historyPaket.clear();
    },
  
  };
  export default clearAll;
  