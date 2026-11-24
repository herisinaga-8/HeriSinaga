document.addEventListener('DOMContentLoaded', () => {
  // 1. Toggle Menu Mobile
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isCurrentlyOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      const nextState = !isCurrentlyOpen;

      menuToggle.setAttribute('aria-expanded', String(nextState));
      mobileMenu.classList.toggle('is-open', nextState);
      document.body.classList.toggle('is-locked', nextState);
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
        document.body.classList.remove('is-locked');
      });
    });
  }

  // 2. Dropdown Kartu Pengalaman Tambahan
  const cardButtons = document.querySelectorAll('.extra-card-btn');
  const detailPanels = document.querySelectorAll('.extra-showcase-panel');
  const showcaseBox = document.querySelector('.extra-showcase');

  cardButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if (!targetPanel || !showcaseBox) return;

      const isAlreadyActive = btn.classList.contains('is-active');

      cardButtons.forEach((item) => {
        item.classList.remove('is-active');
        item.setAttribute('aria-selected', 'false');
      });

      detailPanels.forEach((panel) => {
        panel.classList.remove('is-active');
        panel.hidden = true;
      });

      if (isAlreadyActive) {
        showcaseBox.hidden = true;
      } else {
        showcaseBox.hidden = false;
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');
        targetPanel.hidden = false;
        targetPanel.classList.add('is-active');
      }
    });
  });
});