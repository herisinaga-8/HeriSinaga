/**
 * Pengendali halaman: tab riwayat penugasan + galeri foto.
 */

const TAB_SELECTOR = '.tab-btn';
const PANEL_SELECTOR = '.panel-view';

/* ------------------------------------------------------------------ */
/* Tab riwayat                                                        */
/* ------------------------------------------------------------------ */

function initTabs() {
  const tabs = [...document.querySelectorAll(TAB_SELECTOR)];
  const panels = [...document.querySelectorAll(PANEL_SELECTOR)];
  const nav = tabs[0]?.parentElement;

  if (!tabs.length || !panels.length) return;

  const activate = (targetId, { focus = false } = {}) => {
    tabs.forEach((item) => {
      const target = item.dataset.target;
      const isActive = target === targetId;
      item.setAttribute('aria-selected', String(isActive));
      item.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.hidden = !isActive;
    });

    if (focus) {
      const activeTab = tabs.find((item) => item.dataset.target === targetId);
      activeTab?.focus();
      activeTab?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  };

  // Fungsi untuk membaca dan mengaktifkan tab berdasarkan URL Hash
  const handleHashChange = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
      activate(hash);
    } else {
      // Default aktifkan tab pertama jika tidak ada hash yang cocok
      const preselected = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0];
      if (preselected) {
        activate(preselected.dataset.target);
      }
    }
  };

  // Event klik pada tombol tab manual
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;
      activate(targetId);
      // Memperbarui URL hash tanpa reload halaman saat tab diklik manual
      history.replaceState(null, null, `#${targetId}`);
    });
  });

  // Navigasi keyboard (Arrow key)
  nav?.addEventListener('keydown', (event) => {
    const currentTab = document.activeElement.closest(TAB_SELECTOR);
    const current = tabs.indexOf(currentTab);
    if (current === -1) return;

    const nextIndex = {
      ArrowRight: (current + 1) % tabs.length,
      ArrowLeft: (current - 1 + tabs.length) % tabs.length,
      Home: 0,
      End: tabs.length - 1,
    }[event.key];

    if (nextIndex === undefined) return;
    event.preventDefault();
    activate(tabs[nextIndex].dataset.target, { focus: true });
    history.replaceState(null, null, `#${tabs[nextIndex].dataset.target}`);
  });

  // Jalankan saat pertama kali halaman dimuat dan saat hash berubah
  handleHashChange();
  window.addEventListener('hashchange', handleHashChange);
}

/* ------------------------------------------------------------------ */
/* Galeri foto                                                        */
/* ------------------------------------------------------------------ */

function guardImage(image) {
  const markMissing = () => {
    image.classList.add('is-missing');
    if (image.parentElement.querySelector('.slide-placeholder')) return;

    const placeholder = document.createElement('div');
    placeholder.className = 'slide-placeholder';
    placeholder.innerHTML =
      '<i class="fa-regular fa-map" aria-hidden="true"></i><span>Dokumentasi belum tersedia</span>';
    image.parentElement.append(placeholder);
  };

  if (image.complete && image.naturalWidth === 0) markMissing();
  image.addEventListener('error', markMissing, { once: true });
}

function initGallery(root) {
  const track = root.querySelector('[data-track]');
  const slides = track ? [...track.children] : [];
  const dots = [...root.querySelectorAll('.dot')];
  const counter = root.querySelector('[data-counter]');
  const slider = root.querySelector('[data-slider]');

  if (!track || slides.length === 0) return;

  let index = 0;
  let touchStartX = null;

  const render = (next) => {
    index = (next + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, dotIndex) => {
      dot.setAttribute('aria-current', String(dotIndex === index));
    });

    slides.forEach((slide, slideIndex) => {
      slide.setAttribute('aria-hidden', String(slideIndex !== index));
    });

    if (counter) counter.textContent = `Foto ${index + 1} / ${slides.length}`;
  };

  root.addEventListener('click', (event) => {
    const stepButton = event.target.closest('[data-step]');
    const dot = event.target.closest('.dot');

    if (stepButton) {
      event.preventDefault();
      render(index + Number(stepButton.dataset.step));
    } else if (dot) {
      event.preventDefault();
      render(Number(dot.dataset.index));
    }
  });

  slider?.addEventListener(
    'touchstart',
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true },
  );

  slider?.addEventListener(
    'touchend',
    (event) => {
      if (touchStartX === null) return;
      const delta = event.changedTouches[0].clientX - touchStartX;
      touchStartX = null;
      if (Math.abs(delta) < 40) return;
      render(index + (delta < 0 ? 1 : -1));
    },
    { passive: true },
  );

  render(0);
}

/* ------------------------------------------------------------------ */
/* Inisialisasi                                                       */
/* ------------------------------------------------------------------ */

function init() {
  initTabs();
  document.querySelectorAll('img').forEach(guardImage);
  document.querySelectorAll('[data-gallery]').forEach(initGallery);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}