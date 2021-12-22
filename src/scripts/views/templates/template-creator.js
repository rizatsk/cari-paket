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
<div id="contentTrackResult" class="container">
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
        <img src="logo-kurir/${dataCourier.picture}-small.png" alt="Logo button ${dataCourier.picture}"> 
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

const pageAboutUs = () => `
<div class="mainContent__aboutus">
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
    <div class="container aboutus__content">
        <h2>Tentang Team Kami</h2>
        <div class="aboutus__content__team">
        </div>
    </div>
</div>
`;

const cardTeam = (team) => `
<div class="aboutus__team_card">
    <div class="aboutus__team_card-header">
        <img src="images/${team.photo}" alt="${team.photo}">
    </div>
    <div class="aboutus__team_card-body">
        <h5>${team.nama}</h5>
        <span>${team.pekerjaan}</span>
        <h6> 
            <a href="https://${team.github}" target="_blank" rel="noopener">${team.github}</a>
        </h6>
        <p>${team.deskripsi}</p>
    </div>
</div>
`;

const pageHistory = () => `
<div class="container historyContainerPage">
    <h2>History Paket</h2> 
    <div class="clear-button-container">
        
    </div>
    <div class="contentHistory">
        
    </div>
</div>
`;

const buttonClearAllHistory = () => `
<button class="clearAll-button">
    Clear All <i class="bi bi-trash2-fill"></i>
</button>
`;

const contentHistoryNothing = () => `
<div class="contentHistory__nothing">
    <h4> tidak ada history </h4>
    <p>silahkan cari paket sesuai dengan jasa pengiriman</p>
</div>
`;

const pageDataHistoryPaket = (resi) => `
<div class="cardHistoryPaket">
    <div class="cardHistoryPaket__header">
        <a href="#/history-detail/${resi.numberResi}">${resi.numberResi}</a>
        <button class="deleteHistory-button" id="${resi.numberResi}">Delete</button>
    </div>
    <div class="cardHistoryPaket__body">
        <div class="history_delivery-status">
            <div class="delivery-status">
                ${resi.history[0].desc}
            </div>
            <div class="delivery-status__courier">
                <span>${resi.summary.courier}</span>
                <img src="logo-kurir/${resi.summary.courier}-small.png" alt="Logo kurir ${resi.summary.courier}">
            </div>
        </div>
    </div>
</div>
`;

const pageDataHistoryDetailPaket = () => `
<div class="container contentHistoryDetail">
</div>
`;

const contentHistoryDetail = (nomorResi) => `
<div class="contentHistoryDetail__header">
    <h3>History paket</h3>
    <p>${nomorResi}</p>
</diV>
<div class="historyDetailContainerPage">
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
  pageAboutUs,
  cardTeam,
  pageHistory,
  buttonClearAllHistory,
  contentHistoryNothing,
  pageDataHistoryPaket,
  pageDataHistoryDetailPaket,
  contentHistoryDetail,
};
