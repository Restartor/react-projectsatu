# React + Vite

Halo — ini adalah proyek latihan React + Vite dengan backend Go untuk menyimpan data film.
Mulai serius belajar sejak 12/11/2025.

## Tujuan

Membangun website film (video trailer) sederhana untuk mempelajari konsep dasar React, routing, fetching data dari API, dan menghubungkannya dengan backend Golang.

## Teknologi

- React
- Vite
- JavaScript (JSX)
- HTML & CSS (module CSS)
- React Router
- Golang (backend API sederhana)
- Git & GitHub

## Ringkasan Struktur Proyek (file / folder utama yang dipindai)

- `src/App.jsx` — entry React component yang menggabungkan komponen utama.
- `src/main.jsx` — konfigurasi router (`react-router-dom`) dan mount aplikasi.
- `src/1.Card Components/` — contoh `Card` component.
- `src/2.Diffferent CSS Styles/` — contoh penggunaan CSS module (`Button`).
- `src/3.Props (CardFilm)/cardFilm.jsx` — komponen film yang menggunakan `props`, `useEffect` untuk fetch API, dan `useNavigate`.
- `src/4.Conditional Rendering/UserGreeting.jsx` — contoh conditional rendering dan propTypes.
- `src/5.Rendering List/List.jsx` — contoh rendering list, map, dan handling click events.
- `src/Navigation Bar(iseng)/dropdownMenu.jsx` — contoh navigation / dropdown.
- `src/WebPage/` — halaman genre, movies, video player, dan 404.
- `src/FooterNIH/` — footer site dengan navigasi internal.
- `backend/` — API sederhana ditulis dalam Golang (`main.go`) dan `backend/data/films.go` menyimpan katalog film dalam memori.

## Course yang dipelajari (ringkasan dan kaitannya ke file proyek)

Berikut poin-poin yang dipelajari dan diimplementasikan di proyek ini:

- **Setup React + Vite:** memulai proyek dengan Vite dan konfigurasi dasar — lihat `index.html`, `vite.config.js`, `src/main.jsx`.

- **Komponen (Components):** pembuatan komponen terpisah seperti `Card` dan `CardFilm` (`src/1.Card Components/`, `src/3.Props (CardFilm)/`).

- **Props:** mengirimkan data ke komponen (contoh `CardFilm` menerima `id` sebagai prop dan `List` menerima `bioskop`).

- **State & Hooks (`useState`, `useEffect`):** `CardFilm` memakai `useState` dan `useEffect` untuk fetch data film dari backend.

- **Conditional Rendering:** `UserGreeting.jsx` menunjukkan penggunaan kondisi untuk menampilkan UI berbeda.

- **Rendering Lists:** `List.jsx` menggunakan `map()` untuk merender daftar film dan menangani click untuk membuka link film.

- **Event Handling (Click):** kartu dan item daftar dapat diklik untuk membuka video atau navigasi (contoh pada `CardFilm` dan `List`).

- **Routing (React Router):** `src/main.jsx` menggunakan `createBrowserRouter` dan rute ke `GenrePage`, `MoviesPage`, `VideoWebPage`, serta 404.

- **CSS Modules:** gaya lokal per-komponen menggunakan file `.module.css` di banyak folder.

- **Fetching Data & API:** Backend Go menyediakan endpoint `/api/films` dan `/api/films/:id`; `CardFilm` fetch dari `http://localhost:8080/api/films/:id`.

- **Backend sederhana (Golang):** `backend/main.go` menghidupkan server pada port `:8080` dan `backend/data/films.go` menyimpan katalog film dalam memori.

## Cara Menjalankan (singkat)

1. Jalankan backend Go (dari folder proyek):

```powershell
cd backend
go run .
```

2. Jalankan frontend (Vite):

```powershell
npm install    # jika belum menginstal dependensi
npm run dev
```

Frontend default Vite berjalan di `http://localhost:5173`; backend API di `http://localhost:8080`.

## Perubahan yang saya buat pada README.md (changelog)

- 2025-12-23: Menambahkan dan merinci bagian **"Course yang dipelajari"**, menambahkan ringkasan struktur proyek, penjelasan per-topik yang dipelajari beserta keterkaitannya dengan file/folder proyek, serta menambahkan instruksi singkat menjalankan backend dan frontend.

---

_File ini diperbarui otomatis pada 2025-12-23 oleh COPILOT asisten._
