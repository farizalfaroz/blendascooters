/* Runtime halaman: data produk ada di site-data.js; terjemahan dapat diedit pada objek TEXT. */
(function () {
  "use strict";

  const DATA = window.BLENDA_DATA || { whatsappNumber: "", billingMode: null, scooter: [], gallery: [] };

  const absoluteUrl = (path) => new URL(path, window.location.href).href;

  function currentPageUrl() {
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = "";
    return url.href;
  }

  function setMetaContent(selector, content) {
    const element = document.querySelector(selector);
    if (element) element.setAttribute("content", content);
  }

  function upsertMeta(attribute, key, content) {
    let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, key);
      document.head.append(element);
    }
    element.setAttribute("content", content);
  }

  function setCanonical(url) {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.append(link);
    }
    link.href = url;
    upsertMeta("property", "og:url", url);
  }

  function setJsonLd(id, data) {
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      document.head.append(script);
    }
    script.textContent = JSON.stringify(data);
  }

  function setPageMeta({ title, description, canonical, image, type }) {
    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:type"]', type);
    setMetaContent('meta[property="og:image"]', image);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
    setMetaContent('meta[name="twitter:image"]', image);
    setCanonical(canonical);
  }
  const TEXT = {
    id: {
      pageHome: "Rental Motor Pulau Sumba | Blenda Rent Scooter",
      pageMotor: "Rental Motor Pulau Sumba | Blenda Rent Scooter",
      pageReservation: "Sewa Motor Sumba | Booking Blenda Rent Scooter",
      descriptionHome:
        "Rental motor Pulau Sumba resmi dari Blenda Rent Scooter di Tambolaka. Sewa motor Sumba harian/mingguan dengan helm SNI, jas hujan, dan antar-jemput gratis.",
      descriptionMotor:
        "Sewa motor Sumba di Tambolaka bersama Blenda Rent Scooter. Cek tarif rental motor Pulau Sumba harian, mingguan, dan bulanan, lalu booking via WhatsApp.",
      descriptionReservation:
        "Booking sewa motor Sumba dengan Blenda Rent Scooter di Tambolaka. Isi tanggal, pilih unit rental motor Pulau Sumba, lalu kirim permintaan via WhatsApp.",
      skip: "Langsung ke konten",
      menu: "Menu",
      openMenu: "Buka navigasi",
      closeMenu: "Tutup navigasi",
      languageAria: "Ganti bahasa ke English",
      brandHome: "Blenda Scooter beranda",
      navHome: "Beranda",
      navFleet: "Armada Motor",
      navGallery: "Galeri",
      navBook: "Reservasi",
      navAdvantages: "Keunggulan",
      navTestimonials: "Testimoni",
      navLocation: "Lokasi & Kontak",
      footerNav: "Tautan halaman",
      primaryNav: "Navigasi utama",
      breadcrumbAria: "Breadcrumb",
      heroEyebrow: "Rental Motor Pulau Sumba",
      heroTitle: "Sewa Motor Sumba",
      heroBrand: "Blenda Rent Scooter",
      heroLead:
        "Jelajahi keindahan Pulau Sumba dengan armada prima terawat. Sewa motor Sumba mudah, cepat, dan praktis siap diantar langsung ke lokasi Anda.",
      browseFleet: "Pilih Armada",
      whatsapp: "WhatsApp",
      heroFootnote: "Paket wisata Overland Pulau Sumba ·",
      heroPhotoAlt: "Rental motor Pulau Sumba bersama Blenda Rent Scooter",
      tourPackage: "Paket Wisata",
      tourName: "Paket Overland Pulau Sumba",
      perksEyebrow: "FASILITAS STANDAR MEWAH",
      processTitle: "Kenapa Memilih Blenda Rent Scooter?",
      perksLead:
        "Semua sewa sudah termasuk perlengkapan premium gratis demi kenyamanan, keselamatan, dan kebebasan berkendara Anda selama berlibur di Pulau Sumba.",
      perkOneTag: "Bersih Terjamin",
      perkOneTitle: "Free Helm SNI Bersih",
      perkOneText: "Disediakan 2 unit helm berstandar SNI yang bersih, dicuci, dan wangi setiap pergantian penyewa.",
      perkTwoTag: "Siap Segala Cuaca",
      perkTwoTitle: "Free Jas Hujan",
      perkTwoText: "Bagasi motor sudah dilengkapi Jas Hujan anti rembes",
      perkThreeTag: "Navigasi Mudah",
      perkThreeTitle: "Free Phone Holder",
      perkThreeText:
        "Dudukan ponsel anti-getar dengan penjepit kokoh & pelindung percikan air. Buka Google Maps, Waze, atau Spotify saat berkendara tanpa takut hp jatuh.",
      fleetEyebrow: "KOLEKSI SKUTER TERBAIK",
      fleetTitle: "Pilihan Armada",
      modelCount: "Pilihan Armada",
      cardRateNote: "/ hari",
      viewDetails: "Lihat Detail",
      rentNow: "Sewa Sekarang",
      galleryEyebrow: "DOKUMENTASI",
      galleryTitle: "Galeri Blenda Scooter",
      galleryLead: "Foto perjalanan dan armada Blenda Scooter.",
      reviewsEyebrow: "ULASAN PENGENDARA",
      reviewsTitle: "Apa Kata Mereka yang Sudah Sewa?",
      reviewOne:
        "“Pelayanan Blenda Scooter juara banget! Motor Honda Scoopy diantar langsung ke villa tepat waktu. Helmnya wangi dan bersih, gak ada bau apek.”",
      reviewOneFrom: "Wisatawan dari Jakarta",
      reviewTwo: "“Komunikasi WhatsApp cepat dengan bahasa Inggris yang baik.”",
      reviewTwoFrom: "Wisatawan",
      reviewThree:
        "“Motornya super mulus, kinclong, dan tarikan halus. Tim Blenda ramah banget pas anter motor ke hotel.”",
      reviewThreeFrom: "Wisatawan dari Surabaya",
      reviewFour: "“Unitnya bersih dan nyaman untuk menjelajahi Sumba, proses pemesanan juga mudah.”",
      reviewFourName: "Rahmat Hidayat",
      reviewFourFrom: "Wisatawan",
      reviewFive: "“Motor siap dipakai saat tiba, dan perlengkapan sewa sangat membantu selama perjalanan.”",
      reviewFiveName: "Dewi Lestari",
      reviewFiveFrom: "Wisatawan",
      faqTitle: "Pertanyaan yang Sering Diajukan",
      faqLead: "Semua hal penting seputar sewa motor di Pulau Sumba yang perlu Anda ketahui sebelum memesan.",
      faqQ1: "Apa saja syarat untuk sewa motor di Blenda Scooter?",
      faqA1:
        "Cukup KTP asli / Paspor untuk WNA, SIM C aktif, dan bukti tiket penerbangan atau reservasi penginapan di Sumba. Tanpa jaminan uang tunai atau deposit rumit.",
      faqQ2: "Apakah ada biaya antar-jemput motor ke penginapan?",
      faqA2:
        "Pengantaran dan penjemputan unit GRATIS untuk area Tambolaka dan sekitarnya. Untuk area luar kota dikenakan biaya penyesuaian.",
      faqQ3: "Fasilitas apa saja yang sudah termasuk dalam harga sewa?",
      faqA3:
        "Setiap sewa sudah termasuk 2 helm SNI bersih, 2 jas hujan poncho tebal anti rembes, holder handphone kokoh di stang, dan opsional surfboard rack tanpa biaya tambahan.",
      faqQ4: "Bagaimana jika motor mengalami kendala atau ban bocor di jalan?",
      faqA4:
        "Kami menyediakan layanan emergency roadside assistance 24/7. Tim mekanik kami siap datang ke lokasi Anda untuk perbaikan langsung atau tukar unit motor baru secepatnya.",
      faqQ5: "Bagaimana kebijakan pembatalan atau perubahan jadwal sewa?",
      faqA5:
        "Pembatalan gratis hingga 24 jam sebelum jadwal sewa dimulai. Perubahan tanggal dapat dilakukan kapan saja tanpa biaya tambahan selama ketersediaan unit masih ada.",
      faqContactTitle: "Masih punya pertanyaan lain?",
      faqContactText: "Hubungi tim support WhatsApp kami yang siap melayani 24/7.",
      faqContactCta: "Tanya WhatsApp",
      locationEyebrow: "TEMUKAN KAMI",
      locationTitle: "Kunjungi Blenda Scooter",
      footerLocationTitle: "Lokasi & Jam Kerja",
      addressLabel: "Alamat Kantor & Garasi",
      addressText: "Kota Tambolaka, Sumba Barat Daya, Pulau Sumba",
      hoursLabel: "Jam Operasional",
      hoursText: "Buka Setiap Hari: 24 Jam · Layanan Antar-Jemput: 08.00 – 21.00 WITA",
      contactLabel: "Hubungi Kami",
      socialLabel: "Ikuti Kami di Media Sosial",
      openMaps: "Buka di Google Maps",
      directions: "Petunjuk Arah ↗",
      footerDescription:
        "Blenda Rent Scooter adalah pusat rental motor Pulau Sumba terpercaya. Sewa motor Sumba dengan unit terawat dan helm bersih siap pakai.",
      footerQuick: "Tautan Kilat",
      dailyRate: "Harian",
      perDay: "/ hari",
      weeklyRate: "Mingguan",
      specialDiscount: "Diskon Khusus",
      betterRate: "Tarif Lebih Hemat",
      monthlyPackage: "Paket Bulanan Digital Nomad",
      monthlyNote: "Paling hemat untuk long-stay nomad (~Rp 93.000/hari) dengan servis oli gratis tiap bulan.",
      monthlyRate: "Rp 2.800.000 / bulan",
      benefitsEyebrow: "PAKET FASILITAS BEBAS BIAYA",
      benefitsTitle: "Benefit & Keunggulan Sewa Motor",
      benefitsLead:
        "Setiap unit motor yang Anda sewa dari Blenda Rental otomatis dilengkapi kelengkapan premium tanpa biaya tersembunyi:",
      benefitHelmet: "Helm SNI Bersih",
      benefitHelmetText: "Helm selalu dicuci dan wangi.",
      benefitRain: "Jas Hujan Poncho Tebal",
      benefitRainText:
        "Jas hujan poncho ganda anti rembes berkualitas tinggi untuk antisipasi hujan tropis secara instan.",
      benefitPhone: "1x Phone Holder Kokoh di Stang",
      benefitPhoneText:
        "Penyangga handphone anti goncang & tahan cuaca, memudahkan navigasi Google Maps atau Waze Anda.",
      benefitDelivery: "Antar-Jemput ke Lokasi",
      benefitDeliveryText: "Layanan pengantaran dan penjemputan unit ke lokasi Anda di Tambolaka.",
      benefitSupport: "Ganti Unit Seketika & Bantuan 24/7",
      benefitSupportText:
        "Jaminan pergantian motor langsung di lokasi jika ada kendala mesin atau ban bocor, respons cepat 24 jam.",
      paymentTerms: "KETENTUAN DEPOSIT & PEMBAYARAN",
      paymentTermsTitle: "Ketentuan Deposit & Pembayaran",
      noDownpayTitle: "Tanpa DP Ribet:",
      noDownpayText: "Tidak diperlukan uang muka untuk pemesanan motor reguler.",
      payOnDeliveryTitle: "Bayar Saat Terima Unit:",
      payOnDeliveryText: "Pembayaran tunai / transfer bank / QRIS saat motor diantar ke penginapan Anda.",
      simpleTermsTitle: "Syarat Mudah:",
      simpleTermsText: "Cukup titip KTP / Paspor fisik asli selama durasi masa sewa berlaku.",
      startBooking: "Booking",
      heroCaption: "Paket Overland Pulau Sumba",
      processEyebrow: "FASILITAS STANDAR MEWAH",
      stepOne: "Pilih motor yang sesuai perjalanan.",
      stepTwo: "Masukkan tanggal dan lokasi rencana.",
      stepThree: "Kirim detail permintaan lewat WhatsApp.",
      fleetLead: "Seluruh motor terawat dengan tarif sewa per hari.",
      noFleet: "Belum ada unit pada pilihan ini.",
      modelAlt: "Foto motor",
      ratePending: "Menunggu konfirmasi",
      galleryAlt: "Foto perjalanan dan motor dari galeri Blenda",
      closingEyebrow: "PERJALANAN BERIKUTNYA",
      closingTitle: "Siapkan rencana sewa Anda.",
      closingLead: "Isi detail perjalanan. Permintaan akan diteruskan ke WhatsApp setelah kontak bisnis dikonfigurasi.",
      openForm: "Buka formulir reservasi",
      footerNote: "Informasi tarif dan kontak akan ditambahkan setelah data bisnis dikonfirmasi.",
      modelDetails: "Detail motor",
      invalidModel: "Model motor tidak ditemukan. Silakan kembali ke pilihan motor.",
      backFleet: "Kembali ke pilihan motor",
      localPhoto: "Unit siap jalan • Stok Tambolaka tersedia",
      detailEyebrow: "UNIT SIAP JALAN • STOK TAMBOLAKA TERSEDIA",
      detailLead: "Unit siap jalan • Stok Tambolaka tersedia",
      rateLabel: "Pilihan tarif resmi",
      rateNote: "Bebas biaya admin",
      reserveThis: "Sewa Motor Ini Sekarang",
      beforeBooking: "PAKET FASILITAS BEBAS BIAYA",
      detailNotice:
        "Setiap unit motor yang Anda sewa dari Blenda Rental otomatis dilengkapi kelengkapan premium tanpa biaya tersembunyi.",
      reservationEyebrow: "BOOKING CEPAT • LANGSUNG SIAP GAS DI TAMBOLAKA",
      reservationTitle: "Booking Sewa Motor Sumba",
      reservationLead:
        "Isi data pemesanan sewa motor Sumba di bawah, konfirmasi instan langsung terhubung ke admin WhatsApp Blenda Rent Scooter tanpa ribet.",
      formUnitTitle: "Pilih Unit Scooter Favoritmu",
      modelLabel: "Motor",
      selectModel: "Pilih motor",
      formNameTitle: "Nama Lengkap Pemesan",
      nameLabel: "Nama lengkap",
      namePlaceholder: "cth. Sarah Wijaya / Alex Turner",
      availableModels: "Tersedia 7 Model",
      unitIntro: "Pilih unit sesuai gaya berkendara dan kebutuhan jelajah Anda di Pulau Sumba.",
      formDatesTitle: "Durasi Sewa",
      startLabel: "Tanggal & Waktu Mulai",
      endLabel: "Tanggal & Waktu Selesai",
      dateHint: "Tentukan tanggal dan waktu rental Anda.",
      durationStart: "Durasi: pilih tanggal",
      durationLabel: "Durasi: {days} Hari",
      formLocationTitle: "Catatan Khusus & Alamat Lengkap",
      locationLabel: "Nama Villa/Hotel & alamat spesifik",
      locationPlaceholder: "Nama Villa/Hotel & alamat spesifik (atau nomor flight jika dijemput di bandara) ...",
      notesLabel: "Catatan tambahan (opsional)",
      notesPlaceholder: "Tulis kebutuhan atau pertanyaan tambahan",
      estimateLabel: "Estimasi tarif",
      estimatePending: "Lengkapi tanggal sewa untuk melihat estimasi",
      estimatePendingShort: "Pilih tanggal",
      estimateNote: "Tarif dihitung berdasarkan durasi sewa yang dipilih.",
      sendWhatsApp: "Booking via WhatsApp",
      privacyNote: "Detail pemesanan diteruskan ke admin Blenda melalui WhatsApp.",
      previewLabel: "PRATINJAU PESAN OTOMATIS WHATSAPP",
      readyLabel: "Siap Terkirim",
      extraHelmet: "2 Helm SNI",
      extraRain: "Jas Hujan",
      extraPhone: "Phone Holder",
      deliveryTitle: "Gratis Antar-Jemput Motor di Area Tertentu",
      deliveryText: "Melayani pengantaran tepat waktu ke lokasi Anda di Tambolaka.",
      deliveryReliability: "98% · ON TIME · Ketepatan Waktu Drop-off",
      summaryEyebrow: "RINGKASAN ESTIMASI",
      summaryTitle: "Rincian Sewa",
      noModel: "Pilih motor",
      noDates: "Tanggal belum dipilih",
      summaryPrice: "Tarif Sewa",
      summaryTotal: "Total Pembayaran",
      summaryNote: "Bayar saat motor diterima.",
      changeModel: "Lihat pilihan motor",
      estimateUnavailable: "Estimasi belum tersedia",
      estimateFor: "{days} hari × {rate}",
      dateOrderError: "Waktu selesai harus setelah waktu mulai.",
      modelRequired: "Pilih motor terlebih dahulu.",
      whatsappMissing: "Kontak WhatsApp bisnis belum dikonfigurasi. Permintaan belum dikirim.",
      whatsappInvalid: "Kontak WhatsApp belum valid. Permintaan belum dikirim.",
      sendingError: "Permintaan belum dapat dibuka. Silakan coba lagi.",
      messageHello: "Halo Blenda Scooter, saya ingin mengajukan permintaan sewa.",
      messageName: "Nama",
      messageModel: "Motor",
      messageStart: "Mulai",
      messageEnd: "Selesai",
      messageLocation: "Lokasi rencana",
      messageNotes: "Catatan",
      messageRate: "Estimasi tarif",
      messageAskRate: "Mohon informasi tarif dan ketersediaan.",
      dateRange: "{start} sampai {end}",
      modelCount: "Pilihan motor",
    },
    en: {
      pageHome: "Motorcycle Rental Sumba Island | Blenda Rent Scooter",
      pageMotor: "Motorcycle Rental Sumba Island | Blenda Rent Scooter",
      pageReservation: "Motorcycle Rental Booking Sumba | Blenda Rent Scooter",
      descriptionHome:
        "Official motorcycle rental on Sumba Island from Blenda Rent Scooter in Tambolaka. Rent a scooter with SNI helmets, raincoats, and free delivery. Book via WhatsApp.",
      descriptionMotor:
        "Rent a motorcycle on Sumba Island with Blenda Rent Scooter in Tambolaka. View daily, weekly, and monthly motorcycle rental rates and book via WhatsApp.",
      descriptionReservation:
        "Book a motorcycle rental on Sumba Island with Blenda Rent Scooter. Choose your dates, select a unit, and send your request via WhatsApp.",
      skip: "Skip to content",
      menu: "Menu",
      openMenu: "Open navigation",
      closeMenu: "Close navigation",
      languageAria: "Switch language to Indonesian",
      brandHome: "Blenda Scooter home",
      navHome: "Home",
      navFleet: "Fleet",
      navGallery: "Gallery",
      navBook: "Reservation",
      navAdvantages: "Benefits",
      navTestimonials: "Testimonials",
      navLocation: "Location & Contact",
      footerNav: "Page links",
      primaryNav: "Main navigation",
      breadcrumbAria: "Breadcrumb",
      heroEyebrow: "Sumba Island Motorcycle Rental",
      heroTitle: "Motorcycle Rental Sumba Island",
      heroBrand: "Blenda Rent Scooter",
      heroLead:
        "Explore the natural beauty of Sumba Island with a well-maintained fleet. Easy, quick and practical motorcycle rental, delivered directly to your location.",
      browseFleet: "Choose a Motorcycle",
      whatsapp: "WhatsApp",
      heroFootnote: "Sumba Island Overland Tour · ★ 4.9/5",
      heroPhotoAlt: "Motorcycle rental on Sumba Island with Blenda Rent Scooter",
      tourPackage: "Tour Package",
      tourName: "Sumba Island Overland Package",
      perksEyebrow: "PREMIUM STANDARD FACILITIES",
      processTitle: "Why Choose Blenda Rent Scooter?",
      perksLead:
        "Every rental includes premium gear at no extra cost, for your comfort, safety and freedom as you explore Sumba Island.",
      perkOneTag: "Guaranteed Hygiene",
      perkOneTitle: "Free Sterilized SNI Helmets",
      perkOneText:
        "Two SNI-standard helmets are washed, disinfected and freshly scented after every rental. Sizes M, L and XL are available.",
      perkTwoTag: "Ready for Any Weather",
      perkTwoTitle: "Free Raincoats",
      perkTwoText:
        "No need to worry about sudden tropical rain. Each motorcycle includes a pair of premium, waterproof jacket-and-trouser rain suits.",
      perkThreeTag: "Easy Navigation",
      perkThreeTitle: "Free Phone Holder",
      perkThreeText:
        "A vibration-resistant phone holder with a sturdy grip and splash protection. Use Google Maps, Waze or Spotify while riding.",
      fleetEyebrow: "OUR TOP SCOOTER",
      fleetTitle: "Our Fleet",
      modelCount: "Our Fleet",
      cardRateNote: "/ day",
      viewDetails: "View Details",
      rentNow: "Rent Now",
      galleryEyebrow: "DOCUMENTATION",
      galleryTitle: "Blenda Scooter Gallery",
      galleryLead: "Photos of Blenda Scooter trips and fleet.",
      reviewsEyebrow: "RIDER REVIEWS",
      reviewsTitle: "What Do Our Riders Say?",
      reviewOne:
        "“Blenda Scooter service is fantastic! The Honda Scoopy was delivered to the villa on time. The helmet was fresh and clean.”",
      reviewOneFrom: "Visitor from Jakarta",
      reviewTwo: "“Fast WhatsApp communication in perfect English.”",
      reviewTwoFrom: "Visitor",
      reviewThree:
        "“The motorcycle was smooth and shiny, and the Blenda team was very friendly when delivering it to the hotel.”",
      reviewThreeFrom: "Visitor from Surabaya",
      reviewFour: "“Unitnya bersih dan nyaman untuk menjelajahi Sumba. Proses booking juga mudah.”",
      reviewFourName: "Contoh ulasan 4",
      reviewFourFrom: "Contoh teks · ganti dengan ulasan pelanggan",
      reviewFive: "“Motor siap dipakai saat tiba, dan perlengkapan sewa sangat membantu selama perjalanan.”",
      reviewFiveName: "Dewi Lestari",
      reviewFiveFrom: "Wisatawan",
      faqTitle: "Frequently Asked Questions",
      faqLead: "Everything you need to know about renting a motorcycle on Sumba Island before booking.",
      faqQ1: "What do I need to rent a motorcycle from Blenda Scooter?",
      faqA1:
        "Just an original ID card or passport for foreign nationals, a valid motorcycle license, and proof of flight or accommodation booking in Sumba. No cash guarantee or complicated deposit is required.",
      faqQ2: "Is motorcycle delivery and pickup to my accommodation free?",
      faqA2:
        "Delivery and pickup are FREE in Tambolaka and nearby areas. Additional charges may apply outside the city.",
      faqQ3: "What is included in the rental price?",
      faqA3:
        "Every rental includes two clean, hygienic SNI helmets, two thick waterproof poncho raincoats, a sturdy handlebar phone holder, and an optional surfboard rack at no extra cost.",
      faqQ4: "What if the motorcycle has a problem or a flat tire on the road?",
      faqA4:
        "We provide 24/7 emergency roadside assistance. Our mechanics can come to your location for a repair or a replacement motorcycle.",
      faqQ5: "What is the cancellation or schedule-change policy?",
      faqA5:
        "Cancel free of charge up to 24 hours before your rental starts. Dates can be changed at no extra charge, subject to availability.",
      faqContactTitle: "Still have questions?",
      faqContactText: "Contact our WhatsApp support team, available 24/7.",
      faqContactCta: "Ask on WhatsApp",
      locationEyebrow: "FIND US",
      locationTitle: "Visit Blenda Scooter",
      footerLocationTitle: "Location & Opening Hours",
      addressLabel: "Office & Garage",
      addressText: "Tambolaka, Sumba Island",
      hoursLabel: "Opening Hours",
      hoursText: "Open every day: 24 hours · Delivery and pickup: 08:00–21:00 WITA",
      contactLabel: "Contact Us",
      socialLabel: "Follow Us on Social Media",
      openMaps: "Open in Google Maps",
      directions: "Get Directions ↗",
      footerDescription:
        "Blenda Rent Scooter is a trusted motorcycle rental center on Sumba Island. Rent a scooter with well-maintained motorcycles and clean helmets.",
      footerQuick: "Quick Links",
      dailyRate: "Daily",
      perDay: "/ day",
      weeklyRate: "Weekly",
      specialDiscount: "Special Discount",
      betterRate: "Better Rate",
      monthlyPackage: "Digital Nomad Monthly Package",
      monthlyNote: "Best value for long stays (~Rp 93,000/day), with a free oil service each month.",
      monthlyRate: "Rp 2,800,000 / month",
      benefitsEyebrow: "COMPLIMENTARY FACILITIES",
      benefitsTitle: "Motorcycle Rental Benefits",
      benefitsLead: "Every motorcycle rented from Blenda Rental comes with premium essentials at no hidden cost:",
      benefitHelmet: "Clean SNI Helmets",
      benefitHelmetText: "Helmets are always washed and fresh.",
      benefitRain: "Thick Poncho Raincoats",
      benefitRainText: "Quality double-layer waterproof poncho rainwear for sudden tropical rain.",
      benefitPhone: "1x Sturdy Handlebar Phone Holder",
      benefitPhoneText: "A weather-resistant, vibration-resistant holder for easy Google Maps or Waze navigation.",
      benefitDelivery: "Delivery & Pickup",
      benefitDeliveryText: "Motorcycle delivery and pickup are available at your location in Tambolaka.",
      benefitSupport: "Immediate Replacement & 24/7 Assistance",
      benefitSupportText:
        "We can replace the motorcycle at your location if you have a mechanical issue or flat tire, with 24-hour response.",
      paymentTerms: "DEPOSIT & PAYMENT TERMS",
      paymentTermsTitle: "Deposit & Payment Terms",
      noDownpayTitle: "No Complicated Deposit:",
      noDownpayText: "No upfront payment is required for a standard motorcycle reservation.",
      payOnDeliveryTitle: "Pay When You Receive the Motorcycle:",
      payOnDeliveryText:
        "Pay in cash, by bank transfer or QRIS when the motorcycle is delivered to your accommodation.",
      simpleTermsTitle: "Simple Requirements:",
      simpleTermsText: "Leave your original ID card or passport with us for the duration of your rental.",
      startBooking: "Booking",
      heroCaption: "Sumba Island Overland Package",
      processEyebrow: "PREMIUM STANDARD FACILITIES",
      stepOne: "Choose a motorcycle for your trip.",
      stepTwo: "Enter your dates and planned location.",
      stepThree: "Send your request details through WhatsApp.",
      fleetLead: "Well-maintained motorcycles with daily rental rates.",
      noFleet: "There are no motorcycles in this selection.",
      modelAlt: "Motorcycle photo",
      ratePending: "To be confirmed",
      galleryAlt: "Trip and motorcycle photo from Blenda's gallery",
      closingEyebrow: "YOUR NEXT RIDE",
      closingTitle: "Prepare your rental request.",
      closingLead:
        "Add your trip details. The request will open in WhatsApp once Blenda's business contact is configured.",
      openForm: "Open reservation form",
      footerNote: "Rates and contact details will be added after business information is confirmed.",
      modelDetails: "Motorcycle details",
      invalidModel: "Motorcycle not found. Please return to the fleet.",
      backFleet: "Back to motorcycles",
      localPhoto: "Ready to ride • Tambolaka stock",
      detailEyebrow: "READY TO RIDE • TAMBOLAKA STOCK",
      detailLead: "Ready to ride • Tambolaka stock",
      rateLabel: "Official rental rates",
      rateNote: "No admin fees",
      reserveThis: "Rent This Motorcycle Now",
      beforeBooking: "COMPLIMENTARY FACILITIES",
      detailNotice: "Every motorcycle rented from Blenda Rental comes with premium essentials at no hidden cost.",
      reservationEyebrow: "QUICK BOOKING • READY TO RIDE IN TAMBOLAKA",
      reservationTitle: "Booking a Motorcycle on Sumba Island",
      reservationLead: "Enter your booking details below and connect instantly with the Blenda Rent Scooter WhatsApp admin.",
      formUnitTitle: "Choose Your Favorite Scooter",
      modelLabel: "Motorcycle",
      selectModel: "Choose a motorcycle",
      formNameTitle: "Renter's Full Name",
      nameLabel: "Full name",
      namePlaceholder: "e.g. Sarah Wijaya / Alex Turner",
      availableModels: "7 Models Available",
      unitIntro: "Choose a motorcycle for your riding style and Sumba Island trip.",
      formDatesTitle: "Rental Duration",
      startLabel: "Pickup Date & Time",
      endLabel: "Return Date & Time",
      dateHint: "Set your rental dates and times.",
      durationStart: "Duration: choose dates",
      durationLabel: "Duration: {days} days",
      formLocationTitle: "Special Notes & Full Address",
      locationLabel: "Villa/Hotel name and specific address",
      locationPlaceholder: "Villa/Hotel name and specific address (or flight number for airport pickup) ...",
      notesLabel: "Additional notes (optional)",
      notesPlaceholder: "Add a request or question",
      estimateLabel: "Rate estimate",
      estimatePending: "Enter rental dates to see an estimate",
      estimatePendingShort: "Choose dates",
      estimateNote: "Rates are calculated from the selected rental duration.",
      sendWhatsApp: "Book via WhatsApp",
      privacyNote: "Your booking details will be sent to Blenda through WhatsApp.",
      previewLabel: "AUTOMATIC WHATSAPP MESSAGE PREVIEW",
      readyLabel: "Ready to Send",
      extraHelmet: "2 SNI Helmets",
      extraRain: "Raincoats",
      extraPhone: "Phone Holder",
      deliveryTitle: "Free Motorcycle Delivery & Pickup in Selected Areas",
      deliveryText: "Timely delivery to your location in Tambolaka.",
      deliveryReliability: "98% · ON TIME · On-time Drop-off",
      summaryEyebrow: "ESTIMATE SUMMARY",
      summaryTitle: "Rental Details",
      noModel: "Choose a motorcycle",
      noDates: "Dates not selected",
      summaryPrice: "Rental rate",
      summaryTotal: "Total payment",
      summaryNote: "Pay when the motorcycle is received.",
      changeModel: "View motorcycles",
      estimateUnavailable: "Estimate not available",
      estimateFor: "{days} days × {rate}",
      dateOrderError: "The end time must be after the start time.",
      modelRequired: "Choose a motorcycle first.",
      whatsappMissing: "Blenda's WhatsApp contact is not configured. The request was not sent.",
      whatsappInvalid: "The WhatsApp contact is invalid. The request was not sent.",
      sendingError: "The request could not be opened. Please try again.",
      messageHello: "Hello Blenda Scooter, I would like to request a rental.",
      messageName: "Name",
      messageModel: "Motorcycle",
      messageStart: "Start",
      messageEnd: "End",
      messageLocation: "Planned location",
      messageNotes: "Notes",
      messageRate: "Estimated rate",
      messageAskRate: "Please share the rate and availability.",
      dateRange: "{start} to {end}",
      modelCount: "Motorcycle selection",
    },
  };

  const page = document.body.dataset.page;
  const pageKeys = { home: "pageHome", motor: "pageMotor", reservation: "pageReservation" };
  const descriptions = { home: "descriptionHome", motor: "descriptionMotor", reservation: "descriptionReservation" };
  let language = readSavedLanguage();
  let reservationInitialized = false;

  function readSavedLanguage() {
    try {
      return localStorage.getItem("blenda-language") === "en" ? "en" : "id";
    } catch (_) {
      return "id";
    }
  }

  function phrase(key, lang) {
    return (TEXT[lang || language] && TEXT[lang || language][key]) || TEXT.id[key] || key;
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage === "en" ? "en" : "id";
    document.documentElement.lang = language;
    const pageTitle = phrase(pageKeys[page] || "pageHome", language);
    const pageDescription = phrase(descriptions[page] || "descriptionHome", language);
    document.title = pageTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = pageDescription;
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", pageDescription);
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", pageDescription);
    upsertMeta("property", "og:locale", language === "id" ? "id_ID" : "en_US");
    const socialImage = absoluteUrl("assets/images/galeri/gallery-11.webp");
    upsertMeta("property", "og:image", socialImage);
    upsertMeta("name", "twitter:image", socialImage);
    setCanonical(currentPageUrl());
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = phrase(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const key = element.dataset.i18nAria;
      element.setAttribute(
        "aria-label",
        phrase(key === "openMenu" && element.getAttribute("aria-expanded") === "true" ? "closeMenu" : key),
      );
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.placeholder = phrase(element.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      element.alt = phrase(element.dataset.i18nAlt);
    });
    document.querySelectorAll("[data-i18n-label]").forEach((element) => {
      element.setAttribute("aria-label", phrase(element.dataset.i18nLabel));
    });
    const status = document.getElementById("form-status");
    if (status && status.dataset.messageKey) status.textContent = phrase(status.dataset.messageKey);
    const form = document.getElementById("booking-form");
    if (form) {
      const start = form.elements.start.value;
      const end = form.elements.end.value;
      form.elements.end.setCustomValidity(
        start && end && new Date(end) <= new Date(start) ? phrase("dateOrderError") : "",
      );
    }
    document.querySelectorAll(".language-toggle").forEach((languageButton) => {
      languageButton.textContent = language === "id" ? "EN" : "ID";
      languageButton.setAttribute("aria-label", phrase("languageAria"));
    });
    try {
      localStorage.setItem("blenda-language", language);
    } catch (_) {
      /* Language still works for this page. */
    }
    renderDynamicContent();
  }

  function renderDynamicContent() {
    if (page === "home") {
      renderFleet();
      renderGallery();
    }
    if (page === "motor") renderMotorDetail();
    if (page === "reservation") renderReservation();
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  // Kartu armada dibuat dari katalog agar perubahan unit cukup dilakukan di site-data.js.
  function renderFleet() {
    const grid = document.getElementById("fleet-grid");
    if (!grid) return;
    grid.replaceChildren();
    const visible = DATA.scooter;
    visible.forEach((model) => {
      const card = createElement("article", "vehicle-card stitch-vehicle-card");
      const imageWrap = createElement("div", "vehicle-image-wrap");
      const image = createElement("img", "vehicle-image");
      image.src = model.image;
      image.alt = `${phrase("modelAlt")}: ${model.name}`;
      image.width = 520;
      image.height = 390;
      image.loading = "lazy";
      image.decoding = "async";
      imageWrap.append(image);
      const copy = createElement("div", "vehicle-card-copy");
      copy.append(createElement("span", "vehicle-tagline", model.tagline || phrase("modelAlt")));
      copy.append(createElement("h3", "", model.name));
      copy.append(createElement("p", "vehicle-engine", model.engine || ""));
      const price = createElement("p", "vehicle-price");
      price.append(
        createElement("strong", "", formatCurrency(model.ratePerDay)),
        createElement("span", "", phrase("cardRateNote")),
      );
      const actions = createElement("div", "vehicle-actions");
      const detailLink = createElement("a", "button button-secondary", phrase("viewDetails"));
      detailLink.href = `motor.html?model=${encodeURIComponent(model.slug)}`;
      const reserveLink = createElement("a", "button button-primary", phrase("rentNow"));
      reserveLink.href = `reservasi.html?model=${encodeURIComponent(model.slug)}`;
      actions.append(detailLink, reserveLink);
      copy.append(price, actions);
      card.append(imageWrap, copy);
      grid.append(card);
    });
    const empty = document.getElementById("fleet-empty");
    if (empty) empty.hidden = visible.length !== 0;
    setJsonLd("fleet-itemlist-schema", {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: language === "en" ? "Blenda Scooter Fleet" : "Pilihan Armada Blenda Scooter",
      itemListElement: visible.map((model, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: model.name,
          url: absoluteUrl(`motor.html?model=${encodeURIComponent(model.slug)}`),
          image: absoluteUrl(model.image),
          offers: {
            "@type": "Offer",
            priceCurrency: "IDR",
            price: model.ratePerDay,
            availability: "https://schema.org/InStock",
          },
        },
      })),
    });
  }

  // Dokumentasi memakai foto lokal dan lazy-load untuk menjaga pemuatan halaman tetap ringan.
  function renderGallery() {
    const grid = document.getElementById("gallery-grid");
    if (!grid) return;
    grid.replaceChildren();
    DATA.gallery.forEach((src, index) => {
      const figure = createElement("figure", "gallery-item");
      const image = createElement("img");
      image.src = src;
      image.alt = `${phrase("galleryAlt")} ${index + 1}`;
      image.width = 780;
      image.height = 1040;
      image.loading = "lazy";
      image.decoding = "async";
      figure.append(image);
      grid.append(figure);
    });
  }

  function selectedModel() {
    const slug = new URLSearchParams(window.location.search).get("model");
    return DATA.scooter.find((model) => model.slug === slug) || null;
  }

  function renderMotorDetail() {
    const detail = document.getElementById("motor-detail");
    const notFound = document.getElementById("motor-not-found");
    if (!detail || !notFound) return;
    const model = selectedModel();
    detail.hidden = !model;
    notFound.hidden = Boolean(model);
    if (!model) {
      setMetaContent('meta[name="robots"]', "noindex, follow");
      return;
    }
    setMetaContent('meta[name="robots"]', "index, follow, max-image-preview:large");
    document.getElementById("motor-title").textContent =
      language === "en" ? `${model.name} | Motorcycle Rental Sumba` : `${model.name} | Sewa Motor Sumba`;
    document.getElementById("breadcrumb-model").textContent = model.name;
    document.getElementById("motor-engine").textContent = model.engine || "";
    document.getElementById("motor-tagline").textContent = model.tagline || "";
    const image = document.getElementById("motor-image");
    image.src = model.image;
    image.alt = `${phrase("modelAlt")}: ${model.name}`;
    const reserveLink = document.getElementById("reserve-model-link");
    reserveLink.href = `reservasi.html?model=${encodeURIComponent(model.slug)}`;
    document.getElementById("motor-rate").textContent =
      typeof model.ratePerDay === "number" ? formatCurrency(model.ratePerDay) : phrase("ratePending");
    document.getElementById("detail-daily-rate").textContent = formatCurrency(model.ratePerDay);

    const canonical = absoluteUrl(`motor.html?model=${encodeURIComponent(model.slug)}`);
    const imageUrl = absoluteUrl(model.image);
    const title =
      language === "en"
        ? `${model.name} | Motorcycle Rental Sumba Island | Blenda Rent Scooter`
        : `${model.name} | Sewa Motor Sumba | Blenda Rent Scooter`;
    const description =
      language === "en"
        ? `Rent ${model.name} (${model.engine}) in Tambolaka, Sumba Island from ${formatCurrency(model.ratePerDay)} per day. Motorcycle rental with SNI helmets, raincoats, delivery, and 24/7 support from Blenda Rent Scooter.`
        : `Sewa ${model.name} (${model.engine}) di Tambolaka, Pulau Sumba mulai ${formatCurrency(model.ratePerDay)} per hari. Rental motor Pulau Sumba dengan helm SNI, jas hujan, antar-jemput, dan bantuan 24/7.`;

    setPageMeta({ title, description, canonical, image: imageUrl, type: "product" });
    setMetaContent('meta[property="og:image:alt"]', `${model.name} - Blenda Rent Scooter`);
    setJsonLd("motor-product-schema", {
      "@context": "https://schema.org",
      "@type": "Product",
      name: model.name,
      image: [imageUrl],
      description: description,
      sku: model.slug,
      category: "Motorcycle Rental",
      brand: { "@type": "Brand", name: "Blenda Rent Scooter" },
      offers: {
        "@type": "Offer",
        url: canonical,
        priceCurrency: "IDR",
        price: model.ratePerDay,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/UsedCondition",
        seller: { "@type": "AutoRental", name: "Blenda Rent Scooter" },
      },
    });
    setJsonLd("motor-breadcrumb-schema", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: language === "en" ? "Home" : "Beranda",
          item: absoluteUrl("index.html"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: language === "en" ? "Fleet" : "Armada Motor",
          item: absoluteUrl("index.html#fleet"),
        },
        { "@type": "ListItem", position: 3, name: model.name, item: canonical },
      ],
    });
  }

  function formatCurrency(value) {
    return `Rp ${new Intl.NumberFormat(language === "id" ? "id-ID" : "en-ID", { maximumFractionDigits: 0 }).format(value)}`;
  }

  function billableDays(startValue, endValue) {
    const start = new Date(startValue);
    const end = new Date(endValue);
    if (!startValue || !endValue || Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end <= start)
      return null;
    if (DATA.billingMode === "24-hour-blocks") return Math.max(1, Math.ceil((end - start) / 86400000));
    const startDay = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
    const endDay = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
    if (DATA.billingMode === "calendar-nights") return Math.max(1, Math.round((endDay - startDay) / 86400000));
    if (DATA.billingMode === "calendar-days-inclusive")
      return Math.max(1, Math.round((endDay - startDay) / 86400000) + 1);
    return null;
  }

  function formatDateTime(value) {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat(language === "id" ? "id-ID" : "en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
  }

  function renderReservation() {
    const select = document.getElementById("model-select");
    if (!select) return;
    const chosen = selectedModel();
    const currentValue = select.value;
    const desiredSlug = reservationInitialized ? currentValue : chosen ? chosen.slug : currentValue;
    const firstOption = select.options[0];
    select.replaceChildren(firstOption);
    firstOption.textContent = phrase("selectModel");
    DATA.scooter.forEach((model) => {
      const option = document.createElement("option");
      option.value = model.slug;
      option.textContent = `${model.name} — ${formatCurrency(model.ratePerDay)} ${phrase("perDay")}`;
      select.append(option);
    });
    if (desiredSlug && DATA.scooter.some((model) => model.slug === desiredSlug)) select.value = desiredSlug;
    reservationInitialized = true;
    updateReservationSummary();
  }

  function updateReservationSummary() {
    const form = document.getElementById("booking-form");
    if (!form) return;
    const model = DATA.scooter.find((item) => item.slug === form.elements.model.value) || null;
    const startInput = form.elements.start;
    const endInput = form.elements.end;
    const summaryModel = document.getElementById("summary-model");
    const summaryDates = document.getElementById("summary-dates");
    const summaryImage = document.getElementById("summary-image");
    const summaryRate = document.getElementById("summary-rate");
    const summaryTotal = document.getElementById("summary-total");
    const estimateValue = document.getElementById("estimate-value");
    const estimateNote = document.querySelector(".estimate-panel p");
    const start = startInput.value;
    const end = endInput.value;
    summaryModel.textContent = model ? model.name : phrase("noModel");
    summaryDates.textContent =
      start && end
        ? phrase("dateRange").replace("{start}", formatDateTime(start)).replace("{end}", formatDateTime(end))
        : phrase("noDates");
    const year = document.getElementById("summary-year");
    if (year) year.textContent = `${language === "id" ? "Tahun" : "Year"} ${model ? model.year : "2024"}`;
    const badgeName = document.getElementById("badge-bike-name");
    const badgeCc = document.getElementById("badge-bike-cc");
    const badgeRate = document.getElementById("badge-bike-rate");
    if (badgeName) badgeName.textContent = model ? model.name : phrase("noModel");
    if (badgeCc)
      badgeCc.textContent = `${model ? model.engine : "110 CC"} • ${language === "id" ? "UNIT SIAP" : "READY UNIT"}`;
    if (badgeRate) badgeRate.textContent = formatCurrency(model ? model.ratePerDay : 130000);
    if (model) {
      summaryImage.src = model.image;
      summaryImage.alt = `${phrase("modelAlt")}: ${model.name}`;
      summaryRate.textContent =
        typeof model.ratePerDay === "number" ? formatCurrency(model.ratePerDay) : phrase("ratePending");
    } else {
      summaryImage.src = "assets/images/motor/scoopy.jpg";
      summaryImage.alt = "Motor Honda Scoopy untuk rental di Sumba - Blenda Scooter";
      summaryRate.textContent = phrase("ratePending");
    }
    const days = billableDays(start, end);
    const durationBadge = document.getElementById("duration-badge");
    if (durationBadge)
      durationBadge.textContent = days
        ? phrase("durationLabel").replace("{days}", String(days))
        : phrase("durationStart");
    const total = model && days && typeof model.ratePerDay === "number" ? days * model.ratePerDay : null;
    if (total !== null) {
      estimateValue.textContent = formatCurrency(total);
      summaryTotal.textContent = formatCurrency(total);
      estimateNote.textContent = phrase("estimateFor")
        .replace("{days}", String(days))
        .replace("{rate}", formatCurrency(model.ratePerDay));
    } else {
      estimateValue.textContent = phrase("estimatePending");
      summaryTotal.textContent = phrase("estimatePendingShort");
      estimateNote.textContent = phrase("estimateNote");
    }
    if (endInput && start && end)
      endInput.setCustomValidity(new Date(end) <= new Date(start) ? phrase("dateOrderError") : "");
    const preview = document.getElementById("wa-preview-text");
    if (preview) preview.textContent = buildMessage(form);
  }

  function showStatus(message, isError, messageKey) {
    const status = document.getElementById("form-status");
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("is-error", Boolean(isError));
    status.dataset.messageKey = messageKey || "";
  }

  function buildMessage(form) {
    const model = DATA.scooter.find((item) => item.slug === form.elements.model.value);
    const startValue = form.elements.start.value;
    const endValue = form.elements.end.value;
    const locationValue = form.elements.location.value.trim();
    const notesValue = form.elements.notes.value.trim();
    const days = billableDays(startValue, endValue);
    const estimate =
      model && days && typeof model.ratePerDay === "number"
        ? `${days} × ${formatCurrency(model.ratePerDay)} = ${formatCurrency(days * model.ratePerDay)}`
        : phrase("messageAskRate");
    const lines = [
      phrase("messageHello"),
      `${phrase("messageName")}: ${form.elements.name.value.trim()}`,
      `${phrase("messageModel")}: ${model ? model.name : ""}`,
      `${phrase("messageStart")}: ${formatDateTime(startValue)}`,
      `${phrase("messageEnd")}: ${formatDateTime(endValue)}`,
      `${phrase("messageLocation")}: ${locationValue}`,
      notesValue ? `${phrase("messageNotes")}: ${notesValue}` : "",
      `${phrase("messageRate")}: ${estimate}`,
    ].filter(Boolean);
    return lines.join("\n");
  }

  // Validasi data reservasi lalu buka WhatsApp dengan ringkasan yang sudah di-encode.
  function wireReservationForm() {
    const form = document.getElementById("booking-form");
    if (!form) return;
    const start = form.elements.start;
    const end = form.elements.end;
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    const min = now.toISOString().slice(0, 16);
    start.min = min;
    end.min = min;
    form.addEventListener("input", () => {
      const endInvalid = Boolean(start.value && end.value && new Date(end.value) <= new Date(start.value));
      end.setCustomValidity(endInvalid ? phrase("dateOrderError") : "");
      end.min = start.value || min;
      const status = document.getElementById("form-status");
      if (status) {
        status.textContent = "";
        status.classList.remove("is-error");
        status.dataset.messageKey = "";
      }
      updateReservationSummary();
    });
    form.addEventListener("change", updateReservationSummary);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      if (!DATA.scooter.some((model) => model.slug === form.elements.model.value)) {
        showStatus(phrase("modelRequired"), true, "modelRequired");
        return;
      }
      const number = String(DATA.whatsappNumber || "").replace(/\D/g, "");
      if (!number) {
        showStatus(phrase("whatsappMissing"), true, "whatsappMissing");
        return;
      }
      if (number.length < 8 || number.length > 15) {
        showStatus(phrase("whatsappInvalid"), true, "whatsappInvalid");
        return;
      }
      const url = `https://wa.me/${number}?text=${encodeURIComponent(buildMessage(form))}`;
      window.location.assign(url);
    });
  }

  function wireControls() {
    document.querySelectorAll(".language-toggle").forEach((languageButton) => {
      languageButton.addEventListener("click", () => setLanguage(language === "id" ? "en" : "id"));
    });
    const menuButton = document.getElementById("menu-toggle");
    const nav = document.getElementById("primary-nav");
    if (menuButton && nav) {
      menuButton.addEventListener("click", () => {
        const open = menuButton.getAttribute("aria-expanded") !== "true";
        menuButton.setAttribute("aria-expanded", String(open));
        menuButton.setAttribute("aria-label", phrase(open ? "closeMenu" : "openMenu"));
        nav.classList.toggle("is-open", open);
      });
      nav.querySelectorAll("a").forEach((link) =>
        link.addEventListener("click", () => {
          menuButton.setAttribute("aria-expanded", "false");
          menuButton.setAttribute("aria-label", phrase("openMenu"));
          nav.classList.remove("is-open");
        }),
      );
    }
    const reviewsSlider = document.querySelector(".reviews-slider");
    if (reviewsSlider) {
      const prevButton = document.getElementById("reviews-prev");
      const nextButton = document.getElementById("reviews-next");
      const step = () => {
        const card = reviewsSlider.querySelector(".review-card");
        const gap = parseFloat(getComputedStyle(reviewsSlider).gap) || 0;
        return card ? card.offsetWidth + gap : reviewsSlider.clientWidth;
      };
      const updateButtons = () => {
        const maxScroll = reviewsSlider.scrollWidth - reviewsSlider.clientWidth;
        if (prevButton) prevButton.disabled = reviewsSlider.scrollLeft <= 4;
        if (nextButton) nextButton.disabled = reviewsSlider.scrollLeft >= maxScroll - 4;
      };
      if (prevButton)
        prevButton.addEventListener("click", () => reviewsSlider.scrollBy({ left: -step(), behavior: "smooth" }));
      if (nextButton)
        nextButton.addEventListener("click", () => reviewsSlider.scrollBy({ left: step(), behavior: "smooth" }));
      reviewsSlider.addEventListener("scroll", updateButtons, { passive: true });
      window.addEventListener("resize", updateButtons);
      updateButtons();
    }
    const year = document.getElementById("current-year");
    if (year) year.textContent = String(new Date().getFullYear());
    wireReservationForm();
  }

  wireControls();
  setLanguage(language);
})();
