# 🕌 Ibadah Time

**Ibadah Time** adalah aplikasi frontend berbasis web yang dirancang untuk membantu pengguna memantau dan meningkatkan kualitas ibadah harian secara personal dan reflektif. Aplikasi ini menggabungkan fitur jadwal sholat, pelacakan ibadah, catatan refleksi, serta konten islami terpercaya dalam satu pengalaman digital yang modern dan ramah pengguna.

Aplikasi ini dikembangkan menggunakan **React + Vite** dengan pendekatan **mobile-first**, sehingga nyaman digunakan di perangkat mobile, tablet, maupun desktop.

---

## 🎯 Tujuan Aplikasi

- Membantu pengguna **melacak pelaksanaan sholat secara personal**
- Mendorong **konsistensi dan kesadaran ibadah**, bukan sekadar checklist
- Menyediakan **ruang refleksi pribadi** yang aman dan fleksibel
- Menyajikan **konten islami harian** yang relevan dan mudah diakses
- Memberikan pengalaman pengguna yang interaktif dan modern (gamification ringan)

---

## ✨ Fitur Utama

### 🕒 Jadwal Sholat Digital
- Menampilkan jadwal sholat harian berdasarkan lokasi pengguna
- Pengingat masuk waktu sholat

### ✅ Personal Prayer Tracker
- Checklist sholat harian

### 📝 Refleksi & Catatan Pribadi
- Catatan refleksi harian terkait ibadah
- Membantu pengguna mengevaluasi dan memahami progres spiritualnya

### 📚 Ensiklopedia Islam Harian
- Informasi islami singkat yang muncul secara berkala
- Topik seputar ibadah, adab, dan nilai-nilai Islam

### 🔗 Rekomendasi Konten Islami
- Kumpulan akun ustadz, komunitas, dan media kajian
- Tautan ke platform eksternal (YouTube, Instagram, dll)

---

## 🧱 Teknologi yang Digunakan

- **React** (Frontend UI)
- **Vite** (Build tool)
- **React Router DOM** (Routing halaman)
- **Public Prayer Time API** (jadwal sholat)
- **CSS** (styling responsif)

---

## 📁 Struktur Folder (Ringkas)

```text
src/
├── components/      # Komponen reusable (Navbar, Card, Modal, dll)
├── pages/           # Halaman utama (Home, Tracker, Refleksi, dll)
├── hooks/           # Custom hooks (prayer tracker, API, dll)
├── styles/          # Global & component styles
├── App.jsx
└── main.jsx
