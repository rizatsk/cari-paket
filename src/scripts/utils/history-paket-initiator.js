const HistoryPaketInitiator = {
  async init({historyPaket, paket}) {
    this._historyPaket = historyPaket;
    this._paket = paket;

    await this._renderHistoryPaket();
  },

  async _renderHistoryPaket() {
    await this._historyPaket.putPaket(this._paket);
  },

};

export default HistoryPaketInitiator;
