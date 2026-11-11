/**
 * Perilaku halaman detail proyek:
 * 1. Gulir halus untuk tautan jangkar (#safety-pltu, #drone-ptpn7, dst.).
 * 2. Sorot kartu proyek yang dituju saat halaman dibuka lewat tautan berjangkar.
 */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const TARGET_CLASS = 'is-targeted';
const HIGHLIGHT_DURATION = 2400;

let highlightTimer = null;

function resolveTarget(hash) {
    if (!hash || hash === '#') return null;
    try {
        return document.querySelector(hash);
    } catch {
        return null;
    }
}

function highlightCard(card) {
    if (highlightTimer) window.clearTimeout(highlightTimer);

    document.querySelectorAll(`.${TARGET_CLASS}`).forEach((element) => {
        if (element !== card) element.classList.remove(TARGET_CLASS);
    });

    card.classList.add(TARGET_CLASS);

    highlightTimer = window.setTimeout(() => {
        card.classList.remove(TARGET_CLASS);
    }, HIGHLIGHT_DURATION);
}

function focusHashTarget({ scroll = true } = {}) {
    const card = resolveTarget(window.location.hash);
    if (!(card instanceof HTMLElement)) return;

    highlightCard(card);

    if (scroll) {
        card.scrollIntoView({
            behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
            block: 'start',
        });
    }
}

document.addEventListener('click', (event) => {
    const trigger = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
    if (!trigger) return;

    const hash = trigger.getAttribute('href');
    const card = resolveTarget(hash);
    if (!(card instanceof HTMLElement)) return;

    event.preventDefault();
    window.history.pushState(null, '', hash);
    focusHashTarget();
});

window.addEventListener('hashchange', () => focusHashTarget());
window.addEventListener('popstate', () => focusHashTarget({ scroll: false }));

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => focusHashTarget());
} else {
    focusHashTarget();
}