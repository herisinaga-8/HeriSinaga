/* ============================================================
   Portofolio K3 — perilaku UI
   1. Tab penugasan & URL Hash
   2. Galeri foto / slider interaktif
   ============================================================ */

const PLACEHOLDER_MARKUP =
    '<i class="fa-regular fa-image" aria-hidden="true"></i><span>Dokumentasi belum tersedia</span>';

/* ---------------- Tabs ---------------- */

function initTabs() {
    const tabs = Array.from(document.querySelectorAll('.tab-btn'));
    const panels = Array.from(document.querySelectorAll('.panel-view'));
    if (!tabs.length || !panels.length) return;

    const nav = tabs[0].closest('[role="tablist"]') || tabs[0].parentElement;

    const activate = (targetId, { focus = false } = {}) => {
        let matchedId = targetId;

        if (!document.getElementById(targetId)) {
            const clean = targetId.replace(/[^0-9]/g, '');
            if (clean) matchedId = `panel-k3-${clean}`;
        }

        tabs.forEach((tab) => {
            const panelId = tab.getAttribute('aria-controls') || tab.dataset.target;
            const isActive = panelId === matchedId;
            tab.setAttribute('aria-selected', String(isActive));
            tab.classList.toggle('active', isActive);
            tab.tabIndex = isActive ? 0 : -1;
        });

        panels.forEach((panel) => {
            const isActive = panel.id === matchedId;
            panel.hidden = !isActive;
            panel.classList.toggle('is-active', isActive);
        });

        if (focus) {
            const activeTab = tabs.find((tab) => {
                const pid = tab.getAttribute('aria-controls') || tab.dataset.target;
                return pid === matchedId;
            });
            activeTab?.focus({ preventScroll: true });
            activeTab?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
    };

    const syncFromHash = () => {
        const hash = window.location.hash.replace('#', '').trim();
        if (!hash) {
            const fallback = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0];
            const targetId = fallback.getAttribute('aria-controls') || fallback.dataset.target;
            activate(targetId);
            return;
        }
        activate(hash);
    };

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('aria-controls') || tab.dataset.target;
            activate(targetId, { focus: true });
            history.replaceState(null, '', `#${targetId}`);
        });
    });

    nav?.addEventListener('keydown', (event) => {
        const currentTab = event.target.closest('.tab-btn');
        const currentIndex = tabs.indexOf(currentTab);
        if (currentIndex === -1) return;

        const moves = {
            ArrowRight: (currentIndex + 1) % tabs.length,
            ArrowLeft: (currentIndex - 1 + tabs.length) % tabs.length,
            Home: 0,
            End: tabs.length - 1,
        };

        const nextIndex = moves[event.key];
        if (nextIndex === undefined) return;

        event.preventDefault();
        const nextTab = tabs[nextIndex];
        const nextTarget = nextTab.getAttribute('aria-controls') || nextTab.dataset.target;
        activate(nextTarget, { focus: true });
        history.replaceState(null, '', `#${nextTarget}`);
    });

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
}

/* ---------------- Gallery / Slider ---------------- */

function guardImage(image) {
    const markMissing = () => {
        const slide = image.parentElement;
        if (!slide || slide.querySelector('.slide-placeholder')) return;
        image.classList.add('is-missing');
        const placeholder = document.createElement('div');
        placeholder.className = 'slide-placeholder';
        placeholder.innerHTML = PLACEHOLDER_MARKUP;
        slide.append(placeholder);
    };

    if (image.complete && image.naturalWidth === 0) {
        markMissing();
    } else {
        image.addEventListener('error', markMissing, { once: true });
    }
}

function initGallery(galleryRoot) {
    const track = galleryRoot.querySelector('[data-track]');
    const slides = track ? Array.from(track.children) : [];
    const dotsWrap = galleryRoot.querySelector('[data-dots]');
    const counter = galleryRoot.querySelector('[data-counter]');
    const slider = galleryRoot.querySelector('.slider');
    
    if (!track || !slides.length) return;

    let index = 0;
    let dragStartX = null;

    // Buat dots secara otomatis jika kontribusinya ada tetapi kosong
    let dots = [];
    if (dotsWrap) {
        dotsWrap.innerHTML = ''; // Bersihkan jika ada duplikasi
        dots = slides.map((_, dotIndex) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'dot';
            dot.dataset.index = String(dotIndex);
            dot.setAttribute('aria-label', `Tampilkan foto ${dotIndex + 1}`);
            dot.setAttribute('aria-current', dotIndex === 0 ? 'true' : 'false');
            dotsWrap.append(dot);
            return dot;
        });
    }

    const render = (nextIndex) => {
        const total = slides.length;
        index = ((nextIndex % total) + total) % total;

        // Geser track gambar
        track.style.transform = `translateX(-${index * 100}%)`;

        // Update status aktif dots
        dots.forEach((dot, dotIndex) => {
            dot.setAttribute('aria-current', String(dotIndex === index));
        });

        // Update teks counter (misal: Foto 1 / 3)
        if (counter) {
            counter.textContent = `Foto ${index + 1} / ${total}`;
        }
    };

    // Event klik pada tombol panah next/prev atau dots
    galleryRoot.addEventListener('click', (event) => {
        const stepBtn = event.target.closest('[data-step]');
        const dotBtn = event.target.closest('.dot');

        if (stepBtn) {
            event.preventDefault();
            const stepValue = Number(stepBtn.dataset.step) || 1;
            render(index + stepValue);
        } else if (dotBtn) {
            event.preventDefault();
            const targetIndex = Number(dotBtn.dataset.index);
            if (!isNaN(targetIndex)) {
                render(targetIndex);
            }
        }
    });

    // Navigasi geser (swipe / pointer drag) pada layar sentuh atau mouse
    slider?.addEventListener('pointerdown', (event) => {
        dragStartX = event.clientX;
    });

    slider?.addEventListener('pointerup', (event) => {
        if (dragStartX === null) return;
        const deltaX = event.clientX - dragStartX;
        dragStartX = null;

        if (Math.abs(deltaX) > 40) {
            render(index + (deltaX < 0 ? 1 : -1));
        }
    });

    slider?.addEventListener('pointercancel', () => {
        dragStartX = null;
    });

    // Inisialisasi posisi awal foto ke indeks 0
    render(0);
}

/* ---------------- Boot ---------------- */

function init() {
    initTabs();
    document.querySelectorAll('.slide img').forEach(guardImage);
    document.querySelectorAll('.gallery').forEach(initGallery);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
    init();
}