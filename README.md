# 🔧 Sandtara Backend API

Repositori ini berisi kode backend untuk website **Sandtara**, sebuah platform rekomendasi wisata berbasis data yang berfokus di **Denpasar, Bali**.

Backend ini dibangun menggunakan **Node.js**, **Hapi.js**, dan **MongoDB**, serta mendukung integrasi dengan layanan seperti **Midtrans** dan **JWT** untuk keamanan dan transaksi.

---

## 🛠 Tools & Teknologi

- **Node.js + Hapi.js** – Web framework backend  
- **MongoDB + Mongoose** – Basis data dan ORM  
- **Midtrans** – Pembayaran online  
- **JWT + Bcrypt** – Autentikasi dan keamanan  
- **Nodemailer** – Pengiriman email  
- **ExcelJS** – Ekspor data ke Excel  

---

## 🚀 Cara Menjalankan

### 1. Clone repository dan install dependensi:
```bash
git clone https://github.com/Sandtara-Trip/backend.git
cd backend
npm install
```

### 2. Buat file `.env` di root folder dan isi dengan variabel berikut:
```env
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
MIDTRANS_CLIENT_KEY=your_client_key
MIDTRANS_SERVER_KEY=your_server_key
```

### 3. Jalankan server:
```bash
npm run dev     # Mode development (dengan nodemon)
npm start       # Mode produksi
```

---

## 📚 Dokumentasi API

Dokumentasi lengkap tersedia di Postman:  
[**https://documenter.getpostman.com/view/38855699/2sB2x3ptqH**](https://documenter.getpostman.com/view/38855699/2sB2x3ptqH)

---

## 📁 Struktur Folder

```
backend/
├── .env                    # Environment variables
├── .gitignore             # Git ignore rules
├── catatan.md             # Catatan pengembangan
├── catatanku.md           # Catatan pribadi
├── package-lock.json      # Lock file dependencies
├── package.json           # Dependencies & scripts
├── server.js              # Entry point aplikasi
│
├── .vscode/
│   └── settings.json      # VS Code settings
│
└── src/
    ├── server.js          # Konfigurasi server Hapi.js
    │
    ├── config/
    │   ├── cloudinary.js  # Konfigurasi Cloudinary
    │   ├── database.js    # Koneksi MongoDB
    │   └── midtrans.js    # Konfigurasi Midtrans
    │
    ├── controllers/
    │   ├── adminController.js          # Logic admin
    │   ├── authController.js           # Logic autentikasi
    │   ├── destinationController.js    # Logic destinasi wisata
    │   ├── eventController.js          # Logic event/acara
    │   ├── hotelController.js          # Logic hotel
    │   ├── languageController.js       # Logic bahasa
    │   ├── nearbyController.js         # Logic tempat terdekat
    │   ├── orderController.js          # Logic pembelian tiket
    │   ├── recommendationController.js # Logic rekomendasi
    │   ├── roomController.js           # Logic kamar hotel
    │   ├── uploadController.js         # Logic upload file
    │   └── userController.js           # Logic pengguna
    │
    ├── middleware/
    │   ├── admin.js       # Middleware admin authorization
    │   └── auth.js        # Middleware JWT authentication
    │
    ├── models/
    │   ├── Destination.js # Model destinasi wisata
    │   ├── Event.js       # Model event/acara
    │   ├── Hotel.js       # Model hotel
    │   ├── index.js       # Export semua model
    │   ├── Order.js       # Model pemesanan
    │   ├── Review.js      # Model review/ulasan
    │   ├── Room.js        # Model kamar hotel
    │   └── User.js        # Model pengguna
    │
    ├── routes/
    │   ├── admin.js       # Routes admin
    │   ├── auth.js        # Routes autentikasi
    │   ├── destination.js # Routes destinasi
    │   ├── hotel.js       # Routes hotel
    │   ├── index.js       # Export semua routes
    │   ├── language.js    # Routes bahasa
    │   ├── nearby.js      # Routes tempat terdekat
    │   ├── order.js       # Routes pemesanan
    │   ├── recommendation.js # Routes rekomendasi
    │   ├── room.js        # Routes kamar hotel
    │   ├── upload.js      # Routes upload file
    │   └── user.js        # Routes pengguna
    │
    └── utils/
        └── sendEmail.js   # Utility pengiriman email
```