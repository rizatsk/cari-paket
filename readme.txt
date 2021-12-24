CONTENTS OF THIS FILE
---------------------

* Introduction
*Feature
*Installing App
*Acessing the app
*Using the App


INTRODUCTION
--------------------------
Cari Paket adalah sebuah Aplikasi Cek Resi dari berbagai jasa pengiriman dalam 1 halaman website  yang dapat di install pada homesceeen. 


FEATURE
--------------------------
- Fitur melihat proses pengiriman barang dengan memasukan kode resi atau awb yang di inginkan
- Fitur menyimpan history proses pengiriman 
- Fitur melihat detail proses pengiriman lewat data pada history

INSTALLATION
-------------------------
- Men-download NodeJS
- Men-download / clone this repository to your computer local
- Run npm install
- Meng-update  API KEY terdapat pada folder  src/scripts/globals/config.js folder
- Run  npm run start-dev untuk Developing
- Run npm run build untuk Production

Acessing the App
--------------------------
Aplikasi cari paket dapat di akses melewati tautan 
caripaket.herokuapp.com

Using The App
--------------------------
- Cek proses pengiriman berdasarkan Resi : 
	->Buka halaman dashboard
	->Masukan Kode awb pada input resi
	-> Jika tampil, melihat detail proses pengiriman dengan menekan button Detail

- Melihat history kode resi 
	-> Buka halaman history

- Cek proses pengiriman Lewat History : 
	->Buka halaman History
	-> Tekan kode resi yang di inginkan
	-> Dapat  melihat detail proses pengiriman dengan menekan button Detail
