/* ==========================================================================
   Portofolio K3 - Heri Basa Sinaga
   Pengendali tab navigasi, galeri foto (slider), dan URL hash
   ========================================================================== */

(function () {
    'use strict';

    const TAB_SELECTOR = '.tab-btn';
    const PANEL_SELECTOR = '.panel-view';

    /**
     * Mengaktifkan satu panel berdasarkan id target dan menyinkronkan
     * status ARIA pada tombol tab terkait.
     */
    function createActivator(tabs, panels) {
        return function activate(targetId, options) {
            const { focus = false } = options || {};

            tabs.forEach((item) => {
                const isActive = item.dataset.target === targetId;
                item.setAttribute('aria-selected', String(isActive));
                item.tabIndex = isActive ? 0 : -1;
                item.classList.toggle('active', isActive);
            });

            panels.forEach((panel) => {
                panel.hidden = panel.id !== targetId;
            });

            if (focus) {
                const activeTab = tabs.find((item) => item.dataset.target === targetId);
                if (activeTab) {
                    activeTab.focus();
                    activeTab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
                }
            }
        };
    }

    function initTabs() {
        const tabs = Array.from(document.querySelectorAll(TAB_SELECTOR));
        const panels = Array.from(document.querySelectorAll(PANEL_SELECTOR));
        const nav = tabs[0] && tabs[0].parentElement;

        if (!tabs.length || !panels.length) return;

        const activate = createActivator(tabs, panels);

        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash && document.getElementById(hash)) {
                activate(hash);
                return;
            }

            const preselected =
                tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0];
            if (preselected) activate(preselected.dataset.target);
        };

        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const targetId = tab.dataset.target;
                activate(targetId);
                history.replaceState(null, '', '#' + targetId);
            });
        });

        if (nav) {
            nav.addEventListener('keydown', (event) => {
                const currentTab = document.activeElement.closest(TAB_SELECTOR);
                const current = tabs.indexOf(currentTab);
                if (current === -1) return;

                const nextIndex = {
                    ArrowRight: (current + 1) % tabs.length,
                    ArrowLeft: (current - 1 + tabs.length) % tabs.length,
                    Home: 0,
                    End: tabs.length - 1
                }[event.key];

                if (nextIndex === undefined) return;
                event.preventDefault();

                const nextTab = tabs[nextIndex];
                activate(nextTab.dataset.target, { focus: true });
                history.replaceState(null, '', '#' + nextTab.dataset.target);
            });
        }

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
    }

    /**
     * Menampilkan placeholder bila file dokumentasi tidak tersedia,
     * sehingga galeri tetap rapi tanpa ikon gambar rusak.
     */
    function guardImage(image) {
        const markMissing = () => {
            image.classList.add('is-missing');
            if (image.parentElement.querySelector('.slide-placeholder')) return;

            const placeholder = document.createElement('div');
            placeholder.className = 'slide-placeholder';
            placeholder.innerHTML =
                '<i class="fa-regular fa-image" aria-hidden="true"></i>' +
                '<span>Dokumentasi belum tersedia</span>';
            image.parentElement.append(placeholder);
        };

        if (image.complete && image.naturalWidth === 0) markMissing();
        image.addEventListener('error', markMissing, { once: true });
    }

    function initGallery(root) {
        const container = root.closest(PANEL_SELECTOR) || root.parentElement;
        const track = container.querySelector('[data-track]');
        const slides = track ? Array.from(track.children) : [];
        const dots = Array.from(container.querySelectorAll('.dot'));
        const counter = container.querySelector('[data-counter]');

        if (!track || slides.length === 0) return;

        let index = 0;

        const render = (next) => {
            index = (next + slides.length) % slides.length;
            track.style.transform = 'translateX(-' + index * 100 + '%)';

            dots.forEach((dot, dotIndex) => {
                dot.setAttribute('aria-current', String(dotIndex === index));
            });

            if (counter) {
                counter.textContent = 'Foto ' + (index + 1) + ' / ' + slides.length;
            }
        };

        container.addEventListener('click', (event) => {
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

        render(0);
    }

    function init() {
        initTabs();
        document.querySelectorAll('img').forEach(guardImage);
        document.querySelectorAll('[data-slider]').forEach(initGallery);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();