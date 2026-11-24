document.addEventListener('DOMContentLoaded', () => {
  // 1. Toggle Menu Mobile
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  const setMobileMenuState = (open) => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    mobileMenu.classList.toggle('is-open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('is-locked', open);
  };

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isCurrentlyOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      setMobileMenuState(!isCurrentlyOpen);
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        setMobileMenuState(false);
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