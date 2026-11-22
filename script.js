/* ==========================================================================
   Portofolio Heri Basa Sinaga — interactions
   1. Data                2. Utilities
   3. Mobile navigation   4. Experience accordion
   5. Detail overlays     6. Section highlighting
   ========================================================================== */

/* 1. Data ---------------------------------------------------------------- */
const extraExperience = {
  rdtr: {
    eyebrow: 'GIS Consultant · 2024—2025',
    title: 'Pemetaan RDTR & Geodatabase',
    meta: 'Independen · Yogyakarta',
    summary:
      'Pembaruan peta dasar RDTR melalui interpretasi citra dan digitasi ulang, lalu distandarkan ke dalam geodatabase yang konsisten untuk dipakai lintas tim perencanaan.',
    points: [
      'Digitasi ulang rencana pola ruang berdasarkan citra resolusi tinggi dan dokumen RDTR.',
      'Standarisasi atribut, domain nilai, dan struktur kelas fitur geodatabase.',
      'Validasi topologi serta kendali mutu spasial sebelum data diserahkan ke klien.',
    ],
    image: './images/exp-rdtr-mapping.jpg',
    caption: 'Digitasi & kontrol kualitas peta dasar RDTR',
  },
  multispectral: {
    eyebrow: 'Lead UAV Pilot · Juni 2024',
    title: 'Pilot UAV Multispektral Perkebunan',
    meta: 'UGM × PT PUSRI & PTPN VII · Lampung',
    summary:
      'Memimpin akuisisi foto udara multispektral 70 ha dengan DJI Mavic 3 Multispectral RTK, dari perencanaan jalur terbang hingga penyusunan data siap analisis kesehatan tanaman.',
    points: [
      'Perencanaan jalur terbang dan penempatan GCP pada blok perkebunan seluas 70 ha.',
      'Akuisisi lima kanal multispektral dengan kontrol akurasi RTK di lapangan.',
      'Ortomozaik, indeks vegetasi, dan peta tutupan lahan untuk analisis kesehatan tanaman.',
    ],
    image: './images/project-multispectral-plantation.jpg',
    caption: 'Blok perkebunan hasil akuisisi multispektral',
  },
  coastal: {
    eyebrow: 'GIS & UAV Mapping Specialist · 2022',
    title: 'Survei Pesisir & Profil Pantai',
    meta: 'PT Inspirasi Multitama Andalan · BPBD DIY',
    summary:
      'Pengukuran GCP/ICP dan akuisisi foto udara pesisir Bantul untuk memetakan perubahan garis pantai serta menyusun profil pantai bersama BPBD DIY.',
    points: [
      'Pengukuran kerangka kontrol GPS geodetik dan titik ICP di sepanjang garis pantai.',
      'Akuisisi foto udara Phantom 4 RTK dan penyusunan ortomozaik pesisir.',
      'Analisis abrasi serta rekomendasi data untuk mitigasi bencana pesisir.',
    ],
    image: './images/exp-coastal-research.jpg',
    caption: 'Pengukuran profil pantai · GNSS geodetik',
  },
  instructor: {
    eyebrow: 'Academic & Research Assistant · 2018—2024',
    title: 'Instruktur Praktikum Survei',
    meta: 'Sekolah Vokasi UGM',
    summary:
      'Mendampingi praktikum GIS, GNSS RTK, Total Station, dan survei udara drone, sekaligus menjadi asisten riset untuk analisis erosi, abrasi, dan sedimentasi pesisir.',
    points: [
      'Menyusun skenario praktikum dan mendampingi mahasiswa saat pengukuran lapangan.',
      'Mengajar alur pengolahan data survei hingga menjadi peta tematik siap laporan.',
      'Asisten riset pesisir: pengolahan data elevasi, garis pantai, dan sedimentasi.',
    ],
    image: './images/exp-field-instructor.jpg',
    caption: 'Praktikum alat survei · Total Station',
  },
  logistics: {
    eyebrow: 'Field Survey Team Leader · 2021',
    title: 'Logistik Kebencanaan',
    meta: 'CV Buana Wirapersada · BPBD DIY, Dinkes, Dinsos, Dukcapil',
    summary:
      'Memimpin tim survei lapangan untuk memetakan titik logistik kebencanaan dan mengintegrasikan data spasial lintas instansi menjadi satu peta kerja.',
    points: [
      'Koordinasi tim survei dan penjadwalan pengambilan data lintas instansi.',
      'Integrasi data spasial logistik ke dalam satu basis data pemetaan bencana.',
      'Verifikasi lapangan titik distribusi bantuan dan jalur evakuasi.',
    ],
    image: './images/exp-disaster-logistics.jpg',
    caption: 'Koordinasi pemetaan logistik kebencanaan',
  },
  emergency: {
    eyebrow: 'Sertifikasi K3 · 2025',
    title: 'Kesiapsiagaan Tanggap Darurat',
    meta: 'Mutiara Mutu Sertifikasi · AK3U Kemnaker RI',
    summary:
      'Pelatihan dan penerapan kesiapsiagaan darurat di area industri: penggunaan APAR, pertolongan pertama, dan skenario evakuasi bersama tim kerja.',
    points: [
      'Basic Fire Fighting: identifikasi kelas kebakaran dan penggunaan APAR yang tepat.',
      'First Aid: pertolongan pertama pada kecelakaan kerja ringan hingga evakuasi korban.',
      'Simulasi evakuasi dan pengecekan jalur keluar bersama tim K3 proyek.',
    ],
    image: './images/exp-safety-training.jpg',
    caption: 'Simulasi penggunaan APAR · pelatihan K3',
  },
};

const projects = {
  'safety-pltu': {
    chip: 'K3 Industri',
    tone: 'amber',
    title: 'Pengawasan K3 Operasional PLTU',
    meta: ['PT Solid Tehnik Sejahtera · PLTU Labuhan Angin', '2026 — sekarang', 'Safety Officer'],
    image: './images/project-k3-ptw.jpg',
    caption: 'Inspeksi area kerja & verifikasi izin kerja',
    body: `
      <p>Pengawasan K3 untuk pekerjaan operasional di area PLTU Labuhan Angin, mulai dari peninjauan izin kerja
      hingga penutupan pekerjaan pada akhir shift. Fokusnya memastikan setiap aktivitas punya analisis risiko yang
      disepakati dan kontrol yang benar-benar terpasang di lapangan.</p>
      <h4>Lingkup kerja</h4>
      <ul>
        <li>Pengelolaan Permit to Work: peninjauan, pembukaan, pemantauan, dan penutupan izin.</li>
        <li>Identifikasi bahaya dan penilaian risiko (HIRARC) bersama pengawas pekerjaan.</li>
        <li>Inspeksi area harian, pengawasan kepatuhan APD, dan toolbox meeting.</li>
        <li>Dokumentasi serta pelaporan K3 harian kepada pihak proyek.</li>
      </ul>`,
  },
  'drone-ptpn7': {
    chip: 'GIS & Drone',
    tone: 'green',
    title: 'Survei Multispektral Perkebunan',
    meta: ['UGM × PT PUSRI · PTPN VII', 'Juni 2024', 'Lead UAV Pilot'],
    image: './images/project-multispectral-plantation.jpg',
    caption: 'Ortomozaik multispektral blok perkebunan 70 ha',
    body: `
      <p>Pemetaan tutupan lahan 70 ha di Lampung menggunakan DJI Mavic 3 Multispectral RTK. Data multispektral
      diolah menjadi ortomozaik dan indeks vegetasi untuk menilai kesehatan tanaman per blok kebun.</p>
      <h4>Keluaran</h4>
      <ul>
        <li>Rencana jalur terbang dan penempatan GCP pada area perkebunan.</li>
        <li>Ortomozaik multispektral resolusi tinggi dengan kontrol akurasi RTK.</li>
        <li>Peta indeks vegetasi dan tutupan lahan sebagai dasar analisis agronomi.</li>
      </ul>`,
  },
  'abrasi-bantul': {
    chip: 'Survei & Pemetaan',
    tone: 'green',
    title: 'Analisis Erosi Pesisir Bantul',
    meta: ['PT Inspirasi Multitama Andalan · BPBD DIY', '2022', 'GIS & UAV Mapping Specialist'],
    image: './images/project-coastal-erosion.jpg',
    caption: 'Garis pantai Bantul · dokumentasi foto udara',
    body: `
      <p>Survei pesisir Bantul untuk memetakan perubahan garis pantai: pengukuran GCP/ICP, akuisisi foto udara
      Phantom 4 RTK, dan analisis abrasi bersama BPBD DIY.</p>
      <h4>Metode</h4>
      <ul>
        <li>Pengukuran kerangka kontrol geodetik dan titik ICP di sepanjang garis pantai.</li>
        <li>Akuisisi foto udara dan penyusunan ortomozaik pesisir.</li>
        <li>Analisis perubahan garis pantai serta penyusunan peta tematik abrasi.</li>
      </ul>`,
  },
  'hycon-irigasi': {
    chip: 'Pemetaan UAV',
    tone: 'green',
    title: 'Akuisisi Foto Udara untuk Dokumen AMDAL',
    meta: ['PT Adare Multi Servis', '2022', 'GIS & UAV Mapping Specialist'],
    image: './images/project-irrigation-canal.jpg',
    caption: 'Ortophoto jaringan irigasi untuk dokumen AMDAL',
    body: `
      <p>Akuisisi foto udara dan pembuatan peta orthophoto kawasan irigasi untuk melengkapi dokumen Analisis
      Mengenai Dampak Lingkungan (AMDAL).</p>
      <h4>Keluaran</h4>
      <ul>
        <li>Perencanaan jalur terbang dan akuisisi foto udara kawasan saluran irigasi.</li>
        <li>Peta orthophoto sebagai lampiran spasial dokumen AMDAL.</li>
        <li>Peta tematik pendukung untuk verifikasi kondisi eksisting kawasan.</li>
      </ul>`,
  },
};

const experiences = {
  'exp-1': {
    tone: 'green',
    chip: 'GIS & Survei',
    title: 'GIS Consultant',
    meta: ['Independen · Yogyakarta', 'Mar 2024 — Mar 2025', 'Kontrak'],
    body: `
      <p>Pembaruan peta dasar RDTR untuk kebutuhan perencanaan ruang, dengan penekanan pada konsistensi
      geodatabase dan kualitas topologi.</p>
      <h4>Tanggung jawab</h4>
      <ul>
        <li>Interpretasi citra dan digitasi ulang objek pada peta dasar RDTR.</li>
        <li>Standarisasi atribut, domain, dan struktur kelas fitur geodatabase.</li>
        <li>Validasi topologi serta kendali mutu spasial sebelum penyerahan data.</li>
      </ul>`,
  },
  'exp-2': {
    tone: 'green',
    chip: 'GIS & Drone',
    title: 'Lead UAV Multispektral Pilot',
    meta: ['UGM × PT PUSRI & PTPN VII · Lampung', 'Juni 2024', 'Proyek'],
    body: `
      <p>Memimpin akuisisi foto udara multispektral 70 ha dengan DJI Mavic 3 Multispectral RTK.</p>
      <h4>Tanggung jawab</h4>
      <ul>
        <li>Perencanaan jalur terbang, penempatan GCP, dan pengaturan misi otomatis.</li>
        <li>Akuisisi data multispektral dan kontrol kualitas hasil terbang.</li>
        <li>Penyusunan data spasial resolusi tinggi untuk analisis kesehatan tanaman.</li>
      </ul>`,
  },
  'exp-3': {
    tone: 'green',
    chip: 'GIS & Drone',
    title: 'GIS & UAV Mapping Specialist',
    meta: ['PT Adaro Multi Service', 'Des 2022 — Agu 2024', 'Kontrak'],
    body: `
      <p>Pengolahan data foto udara dan penyusunan produk spasial untuk dokumen lingkungan serta pemetaan
      lingkungan industri.</p>
      <h4>Tanggung jawab</h4>
      <ul>
        <li>Pengolahan foto udara menjadi ortomozaik, DEM, dan DSM.</li>
        <li>Penyusunan peta tutupan lahan untuk dokumen AMDAL.</li>
        <li>Perencanaan jalur terbang otonom dan pemetaan kawasan industri.</li>
      </ul>`,
  },
  'exp-4': {
    tone: 'green',
    chip: 'Survei & Pemetaan',
    title: 'GIS & UAV Mapping Specialist',
    meta: ['PT Inspirasi Multitama Andalan', 'Okt 2022 — Des 2022', 'Proyek'],
    body: `
      <p>Pemetaan pesisir Bantul untuk analisis erosi bersama BPBD DIY.</p>
      <h4>Tanggung jawab</h4>
      <ul>
        <li>Pengukuran GCP/ICP dengan GPS geodetik.</li>
        <li>Akuisisi dan pengolahan foto udara drone pesisir.</li>
        <li>Survei profil pantai dan analisis perubahan garis pantai.</li>
      </ul>`,
  },
  'exp-5': {
    tone: 'green',
    chip: 'GIS & Data',
    title: 'GIS Specialist & Data Processor',
    meta: ['CV Hycon Andromeda', '2022', 'Proyek'],
    body: `
      <p>Produksi massal peta tematik irigasi dan pemeliharaan geodatabase aset jaringan air.</p>
      <h4>Tanggung jawab</h4>
      <ul>
        <li>Produksi 300+ peta tematik irigasi dengan tata letak standar.</li>
        <li>Koreksi topologi saluran air dan validasi atribut jaringan.</li>
        <li>Pembaruan geodatabase aset bendungan dan pintu air.</li>
      </ul>`,
  },
  'exp-6': {
    tone: 'green',
    chip: 'Survei Lapangan',
    title: 'Field Survey Team Leader',
    meta: ['CV Buana Wirapersada', 'Agu 2021 — Des 2021', 'Proyek'],
    body: `
      <p>Koordinasi tim survei lintas instansi untuk pemetaan logistik kebencanaan di DIY.</p>
      <h4>Tanggung jawab</h4>
      <ul>
        <li>Koordinasi tim dan penjadwalan survei bersama BPBD DIY, Dinkes, Dinsos, dan Dukcapil.</li>
        <li>Pengumpulan dan verifikasi data titik logistik di lapangan.</li>
        <li>Integrasi data spasial menjadi peta kerja logistik kebencanaan.</li>
      </ul>`,
  },
  'exp-7': {
    tone: 'green',
    chip: 'Pendidikan',
    title: 'Academic & Research Assistant',
    meta: ['Sekolah Vokasi UGM', '2018 — 2024', 'Akademik'],
    body: `
      <p>Instruktur praktikum dan asisten riset di bidang penginderaan jauh serta survei pemetaan.</p>
      <h4>Tanggung jawab</h4>
      <ul>
        <li>Instruktur praktikum GIS, GNSS RTK, Total Station, dan survei udara drone.</li>
        <li>Pendampingan pengolahan data survei hingga menjadi peta tematik.</li>
        <li>Asisten riset analisis erosi, abrasi, dan sedimentasi pesisir.</li>
      </ul>`,
  },
  'k3-1': {
    tone: 'amber',
    chip: 'Kesehatan & Keselamatan Kerja',
    title: 'Safety Officer (Project-Based)',
    meta: ['PT Solid Tehnik Sejahtera · PLTU Labuhan Angin', 'Apr 2026 — sekarang', 'Proyek'],
    body: `
      <p>Pengawasan K3 untuk pekerjaan operasional PLTU, termasuk pengelolaan izin kerja harian.</p>
      <h4>Tanggung jawab</h4>
      <ul>
        <li>Pengelolaan PTW dari pembukaan hingga penutupan pekerjaan.</li>
        <li>Identifikasi bahaya, kontrol risiko, dan inspeksi area kerja.</li>
        <li>Penyusunan laporan K3 harian dan koordinasi dengan tim kontraktor.</li>
      </ul>`,
  },
  'k3-2': {
    tone: 'amber',
    chip: 'Kesehatan & Keselamatan Kerja',
    title: 'Safety Officer (Project-Based)',
    meta: ['PT Arlisco Elektrika Perkasa · PLTU Labuhan Angin', 'Mar 2026', 'Proyek'],
    body: `
      <p>Pengawasan K3 pada pekerjaan penggantian kWh meter generator PLTU.</p>
      <h4>Tanggung jawab</h4>
      <ul>
        <li>Monitoring PTW dan kesiapan isolasi energi sebelum pekerjaan.</li>
        <li>Pengawasan kepatuhan APD dan posisi kerja aman.</li>
        <li>Koordinasi lintas tim operasi dan kontraktor.</li>
      </ul>`,
  },
  'k3-3': {
    tone: 'amber',
    chip: 'Kesehatan & Keselamatan Kerja',
    title: 'Safety Officer (Project-Based)',
    meta: ['PT Solusi Kontrol Informatika · PLTU Labuhan Angin', 'Jan 2026', 'Proyek'],
    body: `
      <p>Pengawasan keselamatan kerja pada penggantian panel MMF WTP PLTU.</p>
      <h4>Tanggung jawab</h4>
      <ul>
        <li>Identifikasi bahaya kelistrikan dan penerapan LOTO.</li>
        <li>Pengawasan APD serta akses area kerja terbatas.</li>
        <li>Dokumentasi harian aktivitas K3.</li>
      </ul>`,
  },
  'k3-4': {
    tone: 'amber',
    chip: 'Kesehatan & Keselamatan Kerja',
    title: 'Safety Officer (Project-Based)',
    meta: ['PT Putera Instrumenindo · PLTU Labuhan Angin', 'Okt 2025', 'Proyek'],
    body: `
      <p>Pengawasan preventive maintenance panel CEMS di area PLTU.</p>
      <h4>Tanggung jawab</h4>
      <ul>
        <li>Koordinasi akses area kerja dan mobilisasi material.</li>
        <li>Monitoring kepatuhan APD dan kondisi alat kerja.</li>
        <li>Pencatatan temuan dan tindak lanjut perbaikan.</li>
      </ul>`,
  },
  'k3-5': {
    tone: 'amber',
    chip: 'Kesehatan & Keselamatan Kerja',
    title: 'Safety Officer (Project-Based)',
    meta: ['CV Mutiara Buana · PLTU Labuhan Angin', 'Sep 2025', 'Proyek'],
    body: `
      <p>Pengawasan pemasangan lampu Ship Unloader PLTU, termasuk pekerjaan pada ketinggian.</p>
      <h4>Tanggung jawab</h4>
      <ul>
        <li>Toolbox meeting sebelum pekerjaan ketinggian dimulai.</li>
        <li>Pengawasan APD, harness, dan area jatuh material.</li>
        <li>Penyusunan laporan K3 harian.</li>
      </ul>`,
  },
};

/* 2. Utilities ----------------------------------------------------------- */
const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function buildOverlayContent(bodyHtml, metaItems) {
  const meta = metaItems
    .map((item) => `<span>${item}</span>`)
    .join('');
  return { meta, body: bodyHtml };
}

/* 3. Mobile navigation --------------------------------------------------- */
function initMobileNav() {
  const toggle = qs('#menu-toggle');
  const menu = qs('#mobile-menu');
  if (!toggle || !menu) return;

  const setState = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi');
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('is-locked', open);
  };

  toggle.addEventListener('click', () => {
    setState(toggle.getAttribute('aria-expanded') !== 'true');
  });

  qsa('a, button', menu).forEach((element) => {
    element.addEventListener('click', () => {
      if (element.matches('[data-open]')) return;
      setState(false);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setState(false);
      toggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960 && toggle.getAttribute('aria-expanded') === 'true') {
      setState(false);
    }
  });
}

/* 4. Experience accordion ------------------------------------------------ */
function initExtraExperience() {
  const list = qs('#extra-list');
  const panel = qs('#extra-panel');
  if (!list || !panel) return;

  const triggers = qsa('.extra-trigger', list);
  const fields = {
    eyebrow: qs('[data-extra-field="eyebrow"]', panel),
    title: qs('[data-extra-field="title"]', panel),
    meta: qs('[data-extra-field="meta"]', panel),
    summary: qs('[data-extra-field="summary"]', panel),
    points: qs('[data-extra-field="points"]', panel),
    image: qs('[data-extra-field="image"]', panel),
    caption: qs('[data-extra-field="caption"]', panel),
  };

  const mobileQuery = window.matchMedia('(max-width: 720px)');
  let activeKey = null;
  let activeTrigger = null;
  let closeTimer = null;

  const fillPanel = (data) => {
    fields.eyebrow.textContent = data.eyebrow;
    fields.title.textContent = data.title;
    fields.meta.textContent = data.meta;
    fields.summary.textContent = data.summary;
    fields.points.innerHTML = data.points.map((point) => `<li>${point}</li>`).join('');
    fields.image.src = data.image;
    fields.image.alt = data.title;
    fields.caption.textContent = data.caption;
  };

  // On mobile the panel sits directly under the active card; on wider screens it
  // stays below the six-card row and spans the full grid width.
  const placePanel = () => {
    if (!activeTrigger) {
      list.append(panel);
      return;
    }
    if (mobileQuery.matches) {
      activeTrigger.closest('.extra-item').after(panel);
    } else {
      list.append(panel);
    }
  };

  const open = (trigger) => {
    const key = trigger.dataset.extra;
    const data = extraExperience[key];
    if (!data) return;

    window.clearTimeout(closeTimer);
    activeKey = key;
    activeTrigger = trigger;

    trigger.id = trigger.id || `extra-trigger-${key}`;
    fillPanel(data);
    triggers.forEach((item) => {
      const isActive = item === trigger;
      item.setAttribute('aria-expanded', String(isActive));
      item.closest('.extra-item').classList.toggle('is-open', isActive);
    });

    placePanel();
    panel.hidden = false;
    panel.setAttribute('aria-labelledby', trigger.id);
    // Force a frame so the open transition can run.
    void panel.offsetHeight;
    panel.classList.add('is-open');

    if (mobileQuery.matches) {
      panel.scrollIntoView({ block: 'nearest' });
    }
  };

  const close = () => {
    activeKey = null;
    activeTrigger = null;
    panel.classList.remove('is-open');
    triggers.forEach((item) => {
      item.setAttribute('aria-expanded', 'false');
      item.closest('.extra-item').classList.remove('is-open');
    });
    closeTimer = window.setTimeout(() => {
      panel.hidden = true;
    }, 300);
  };

  const handleViewportChange = () => {
    if (activeKey) placePanel();
  };

  if (typeof mobileQuery.addEventListener === 'function') {
    mobileQuery.addEventListener('change', handleViewportChange);
  } else if (typeof mobileQuery.addListener === 'function') {
    mobileQuery.addListener(handleViewportChange);
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      if (activeKey === trigger.dataset.extra) {
        close();
        return;
      }
      open(trigger);
    });
  });
}

/* 5. Detail overlays ----------------------------------------------------- */
function createOverlayController(overlayId) {
  const overlay = qs(`#${overlayId}`);
  if (!overlay) return null;

  let returnFocus = null;

  const open = (trigger) => {
    returnFocus = trigger || document.activeElement;
    overlay.hidden = false;
    document.body.classList.add('is-locked');
    const closeButton = qs('[data-close]', overlay);
    if (closeButton) closeButton.focus({ preventScroll: true });
  };

  const close = () => {
    if (overlay.hidden) return;
    overlay.hidden = true;
    if (!qs('.overlay:not([hidden])')) {
      document.body.classList.remove('is-locked');
    }
    if (returnFocus && typeof returnFocus.focus === 'function') {
      returnFocus.focus({ preventScroll: true });
    }
  };

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay || event.target.closest('[data-close]')) {
      close();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !overlay.hidden) close();
  });

  return { open, close };
}

function initOverlays() {
  const projectOverlay = createOverlayController('project-modal');
  const expOverlay = createOverlayController('exp-modal');
  const cvOverlay = createOverlayController('cv-modal');

  const projectChip = qs('#project-modal-chip');
  const projectTitle = qs('#project-modal-title');
  const projectMeta = qs('#project-modal-meta');
  const projectImage = qs('#project-modal-image');
  const projectCaption = qs('#project-modal-caption');
  const projectBody = qs('#project-modal-body');

  qsa('[data-project]').forEach((button) => {
    button.addEventListener('click', () => {
      const data = projects[button.dataset.project];
      if (!data || !projectOverlay) return;

      const content = buildOverlayContent(data.body, data.meta);
      projectChip.textContent = data.chip;
      projectChip.dataset.tone = data.tone;
      projectTitle.textContent = data.title;
      projectMeta.innerHTML = content.meta;
      projectImage.src = data.image;
      projectImage.alt = data.title;
      projectCaption.textContent = data.caption;
      projectBody.innerHTML = content.body;
      projectOverlay.open(button);
    });
  });

  const expChip = qs('#exp-modal-chip');
  const expTitle = qs('#exp-modal-title');
  const expMeta = qs('#exp-modal-meta');
  const expBody = qs('#exp-modal-body');

  qsa('[data-exp]').forEach((button) => {
    button.addEventListener('click', () => {
      const data = experiences[button.dataset.exp];
      if (!data || !expOverlay) return;

      const content = buildOverlayContent(data.body, data.meta);
      expChip.textContent = data.chip;
      expChip.dataset.tone = data.tone;
      expTitle.textContent = data.title;
      expMeta.innerHTML = content.meta;
      expBody.innerHTML = content.body;
      expOverlay.open(button);
    });
  });

  qsa('[data-open="cv"]').forEach((button) => {
    button.addEventListener('click', () => {
      if (cvOverlay) cvOverlay.open(button);
    });
  });

  const printButton = qs('#cv-print');
  if (printButton) {
    printButton.addEventListener('click', () => window.print());
  }
}

/* 6. Section highlighting ------------------------------------------------ */
function initSectionHighlight() {
  const links = qsa('.primary-nav a[data-nav], .mobile-nav a[href^="#"]');
  const sections = qsa('main section[id]');
  if (!links.length || !sections.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((link) => {
          const target = link.dataset.nav || link.getAttribute('href').replace('#', '');
          if (target === id) {
            link.setAttribute('aria-current', 'true');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
  );

  sections.forEach((section) => observer.observe(section));
}

function initHeaderState() {
  const header = qs('#site-header');
  if (!header) return;

  const update = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
}

function initYear() {
  const year = qs('#year');
  if (year) year.textContent = String(new Date().getFullYear());
}

initMobileNav();
initExtraExperience();
initOverlays();
initSectionHighlight();
initHeaderState();
initYear();