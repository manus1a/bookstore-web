Full Stack Book Store (MERN) Project

>>>Deskripsi Proyek<<<

Ini adalah proyek aplikasi toko buku full stack yang dibangun menggunakan teknologi MERN (MongoDB, Express, React, Node.js). Proyek ini mencakup frontend dan backend yang berfungsi penuh untuk mengelola data buku.

>>>Cara Menjalankan Proyek<<<

>>>Persiapan Umum<<<
Clone atau Ekstrak Folder Proyek:
    - Buka terminal dan navigasikan ke folder proyek.

>>>Menjalankan Frontend<<<
1. Navigasi ke Direktori Frontend:

    cd frontend

2. Buat File Environment Variables:
    - Buat file .env.local di dalam direktori frontend pada level yang sama dengan package.json.
    - Tambahkan variabel lingkungan berikut ke dalam file .env.local:

    VITE_API_KEY="AIzaSyCXvDIC4MPrkaMdeg_O2iij88wLpfj3qBA"
    VITE_Auth_Domain="book-store-mern-app.firebaseapp.com"
    VITE_PROJECT_ID="book-store-mern-app"
    VITE_STORAGE_BUCKET="book-store-mern-app.appspot.com"
    VITE_MESSAGING_SENDERID="205632822247"
    VITE_APPID="1:205632822247:web:b0db0ec66bf6de0bbb3b42"

3. Install Dependencies Node:

    npm install

4. Jalankan Proyek Frontend:

    npm run dev

>>>Menjalankan Backend<<<
1. Navigasi ke Direktori Backend:

    cd backend

2. Install Dependencies Node:

    npm install

3. Buat File Environment Variables:
    - Buat file .env di dalam direktori backend pada level yang sama dengan package.json.
    - Tambahkan variabel lingkungan berikut ke dalam file .env:

    DB_URL="mongodb+srv://helpyourassistant:pqam0Mwv3Vwv8Off@cluster0.qc3bq.mongodb.net/book-store?retryWrites=true&w=majority&appName=Cluster0"
    JWT_SECRET_KEY='bc992a20cb6706f741433686be814e3df45e57ea1c2fc85f9dbb0ef7df12308a669bfa7c976368ff32e32f6541480ce9ec1b122242f9b1257ab669026aeaf16'

    - Catatan: Pastikan untuk mengatur MongoDB dan mengubah URL MongoDB serta kunci rahasia JWT sesuai kebutuhan.

4. Jalankan Proyek Backend:

    npm run start:dev

>>>Teknologi yang Digunakan<<<
- Frontend: React, Vite
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: Firebase
- State Management: Redux (opsional)
- Deployment: Vercel (Frontend), Heroku (Backend) atau platform lain sesuai kebutuhan.

>>>Fitur<<<
- Manajemen Buku: Tambah, edit, hapus, dan lihat buku.
- Otentikasi Pengguna: Daftar, login, dan logout.
- Dashboard Admin: Kelola buku dan pengguna.

>>>Kontribusi<<<
- Jika Anda ingin berkontribusi, silakan fork repository ini, buat branch fitur baru, dan buat pull request. Kami akan senang untuk meninjau perubahan Anda.

>>>Lisensi<<<
- Proyek ini dilisensikan di bawah MIT License.