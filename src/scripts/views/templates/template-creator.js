/* eslint-disable max-len */
const pageInputResi = () => `
<div class="mainContent__inputResi">
    <div class="mainContent__inputResi__container container">
        <div class="row__inputResi">
            <div class="col-contentInputResi">
                <p>lacak banyak paket, di satu tempat dengan mudah.</p>
            </div>
            <div class="col-formInputResi">
                <input type="search" id="receiptNumberResi" placeholder="Masukan nomor resi">
            </div>
            <div class="col-buttonDeliveryService">
            </div>
        </div>
    </div>
</div>
<div id="contentTrackResult">
    <div class="contentTrackResult__start-load">
        <p class="header">belum ada paket</p>
        <span>masukan nomor resi dan pilih kurir yang digunakan</span>
    </div>
</div>
<div class="mainContent__cariPaket">
    <h2>Cari Paket</h2>
    <p>Mencari paket dengan mudah dalam 1 halaman website</p>
    <p>dapat mencari paket secara offline kalau sudah pernah mencarinya</p>
    <p>dapat mencari paket di berbagai jasa pengiriman yang tersedia tanpa 
        lagi harus membuka banyak website untuk cek paket di setiap masing 
        masing jasa pengiriman.
    </p> 
    <p>menyediakan riwayat pencarian paket.
        dapat melihat riwayat hasil pencarian paket anda secara offline.
    </p>
</div>
`;

const buttonDeliveryService = (dataCourier) => `
<button id="${dataCourier.id}" class="button-courier">
    <div class="button__deliveryService">
        <img src="logo-kurir/${dataCourier.picture}-small.png" alt="Logo button ${dataCourier.courier}"> 
        <span>${dataCourier.courier}</span>
    </div> 
</button>
`;

const contenReceiptSearchResults = (dataTracking) => `
<div class="content__receipt-search-results">
    <div class="receipt-search-results__container container">
        <div class="col-delivery-status">
            <div class="delivery-status">
                ${dataTracking.history[0].desc}
            </div>
            <div class="delivery-status__courier">
                <span>${dataTracking.summary.courier}</span>
                <img src="logo-kurir/${dataTracking.summary.courier}-small.png" alt="Logo kurir ${dataTracking.summary.courier}">
            </div>
        </div>
        <div class="col-package-data">
            <div>
                <div class="package-data__header">
                    Kode Resi
                </div>
                <div class="package-data__body">
                    ${dataTracking.summary.awb}
                </div>
            </div>
            <div>    
                <div class="package-data__header">
                    Tanggal Pengiriman
                </div>
                <div class="package-data__body">
                    ${dataTracking.summary.date}
                </div>
            </div>
            <div>
                <div class="package-data__header">
                    Pengirim
                </div>
                <div class="package-data__body">
                    ${dataTracking.detail.shipper},${dataTracking.detail.origin}
                </div>
            </div>
            <div>
                <div class="package-data__header">
                    Penerima
                </div>
                <div class="package-data__body">
                    ${dataTracking.detail.receiver},${dataTracking.detail.destination}
                </div>
            </div>
            <div class="package-data__button">
                <button id="buttonDetailTrack">DETAIL</button>
            </div>
        </div>
    </div>
</div>
`;



const contentTrackList = () => `
<div class="content__track-list hidden">
  <div class="track-list__container container">
      <div class="track-list__header">
          Detail Riwayat Track
      </div>
      <div class="track-list__body">
          
      </div>
  </div>
</div>`;

const trackList = (history, historyTrackings) => `
<div class="track-list__card">
    <div class="track-list__card-icon-bullet ${history.date == historyTrackings[0].date ? 'active' : ''} "></div>
    <div class="${history.date == historyTrackings.slice(-1)[0].date ? '' : 'track-list__card-icon'}"></div>
    <div class="track-list__card-time">
        ${history.date}
    </div>
    <div class="track-list__card-description">
        ${history.desc}
    </div>
</div>
`;

const historyPgTemplate =(data) =>`
<div class="historyContainerRow"> 
   <div class="box-resi">
    <a href="${`#/detailHistory/${data.awb}`}" >${data.awb}</a>

   </div>

   <div class="box-waktu">
   </div>
   `;


const nothingNoResi = () => `
<div class="container">
    <div class="nothingData nothingNoResi">
        <h2>nomor resi tidak ditemukan</h2>
        <p>cek kembali nomor resi anda</p>
    </div>
</div>
`;

const nothingInternet = () => `
<div class="container">
    <div class="nothingData nothingNoResi">
        <h2>Internet Anda Terputus !</h2>
        <p>harap periksa internet anda</p>
    </div>
</div>
`;

const pending = () => `
<div class="container">
    <div class="pending">
        <div class="loader"></div>
        <div class="loader-span">
            <span>Sedang Mencari Nomor Resi</span>
        </div>
    </div>
</div>
`;

export {
  pageInputResi,
  buttonDeliveryService,
  contenReceiptSearchResults,
  contentTrackList,
  trackList,
  nothingNoResi,
  nothingInternet,
  pending,
  historyPgTemplate,

};
