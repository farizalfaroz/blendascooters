/* Edit nomor WhatsApp, katalog, tarif, dan daftar foto di berkas ini. Slug menjadi nilai model= pada URL. */
window.BLENDA_DATA = {
  whatsappNumber: "6282236431311",
  billingMode: "24-hour-blocks",
  scooter: [
    { slug: "scoopy", name: "Honda Scoopy 110 cc", image: "assets/images/motor/scoopy.jpg", ratePerDay: 130000, engine: "110 CC", tagline: "Retro Stylish", year: "2024" },
    { slug: "beat", name: "Honda Beat 110 cc", image: "assets/images/motor/beat.webp", ratePerDay: 130000, engine: "110 CC", tagline: "Modern Retro", year: "2024" },
    { slug: "vario-125", name: "Honda Vario 125 cc", image: "assets/images/motor/vario.webp", ratePerDay: 150000, engine: "125 CC", tagline: "Lincah & Bertenaga", year: "2024" },
    { slug: "vario-160", name: "Honda Vario 160 cc", image: "assets/images/motor/vario-160.webp", ratePerDay: 200000, engine: "160 CC", tagline: "Maxi Nyaman Touring", year: "2024" },
    { slug: "pcx", name: "Honda PCX 160cc", image: "assets/images/motor/pcx.webp", ratePerDay: 220000, engine: "160 CC", tagline: "Elegan & Bagasi Luas", year: "2024" },
    { slug: "adv", name: "ADV 160 cc", image: "assets/images/motor/adv.jpg", ratePerDay: 235000, engine: "160 CC", tagline: "Sporty & Responsif", year: "2024" },
    { slug: "crf", name: "Honda CRF 150", image: "assets/images/motor/crf.jpg", ratePerDay: 300000, engine: "150 CC", tagline: "Iconic Italian Prestige", year: "2024" }
  ],
  gallery: Array.from({ length: 10 }, (_, index) => `assets/images/galeri/gallery-${String(index + 1).padStart(2, "0")}.webp`)
};
