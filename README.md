# Flower Collection 

## Deskripsi
Program ini adalah halaman web yang menampilkan koleksi bunga dengan fitur filter berdasarkan warna serta slider gambar yang dapat berpindah secara manual melalui tombol navigasi.

## Fitur Utama
1. **Slider Gambar**
   - Menampilkan gambar dalam bentuk carousel.
   - Navigasi menggunakan tombol "next" dan "previous".
   - Tidak ada auto-slide, pengguna harus menggeser gambar secara manual.

2. **Filter Koleksi Bunga**
   - Menyediakan tombol filter untuk menampilkan bunga berdasarkan warna tertentu.
   - Jika tombol "All" diklik, semua bunga akan ditampilkan.
   - Setiap filter akan menyembunyikan bunga yang tidak sesuai dengan kategori yang dipilih.

3. **Footer dengan Media Sosial dan Kontak**
   - Footer ditampilkan secara horizontal (logo dan teks sejajar).
   - Ikon media sosial dan kontak tersedia dengan efek hover.

## Struktur Folder
```
├── index.html  # Halaman utama
├── styles.css  # File CSS untuk desain halaman
├── script.js   # File JavaScript untuk slider dan filter bunga
├── images/     # Folder berisi gambar bunga dan ikon
├── logo/       # Folder berisi logo media sosial dan kontak
└── flowers/    # Folder berisi koleksi gambar bunga
```

## Cara Menggunakan
1. **Menavigasi Slider**
   - Klik tombol panah kanan untuk berpindah ke gambar selanjutnya.
   - Klik tombol panah kiri untuk kembali ke gambar sebelumnya.
   - Tidak ada auto-slide; pengguna harus berpindah secara manual.

2. **Menggunakan Filter Koleksi Bunga**
   - Klik tombol **All** untuk menampilkan semua bunga.
   - Klik salah satu tombol warna (Pink, Purple, Blue, Red, White) untuk menampilkan bunga dengan warna yang dipilih.
   - Tombol yang dipilih akan memiliki efek aktif.

## Teknologi yang Digunakan
- **HTML** → Struktur dasar halaman
- **CSS** → Styling dan tata letak
- **JavaScript** → Interaksi pengguna untuk slider dan filter bunga

## Kode Utama
### **Slider Gambar**
```javascript
const slides = document.querySelectorAll(".hero-sl div");
let currentSlide = 1;

const updateSlides = () => {
    slides.forEach((slide, index) => {
        slide.classList.remove("slide1", "slide-kiri", "slide-kanan");
        if (index === currentSlide) slide.classList.add("slide1");
        else if (index === (currentSlide - 1 + slides.length) % slides.length) slide.classList.add("slide-kiri");
        else if (index === (currentSlide + 1) % slides.length) slide.classList.add("slide-kanan");
    });
};

document.querySelector(".lanjut:nth-child(2)")?.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
});

document.querySelector(".slide2")?.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
});

updateSlides();
```

### **Filter Koleksi Bunga**
```javascript
const buttons = document.querySelectorAll(".flowers button");
const flowerGroups = document.querySelectorAll(".bunga > div");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        flowerGroups.forEach(group => {
            group.style.display = filter === "all" || group.classList.contains(filter) ? "flex" : "none";
        });
    });
});

document.querySelector(".all")?.click();
```

## Kontributor
- **Nama Developer**: [Masukkan nama Anda]
- **GitHub**: [Masukkan tautan GitHub Anda]
- **Email**: [Masukkan email Anda]

---
Program ini dibuat untuk menampilkan koleksi bunga dengan cara yang lebih interaktif dan user-friendly. 🚀

