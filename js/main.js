/* =========================================================================
   MAIN APP CONTROLLER & HELPERS
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const drawerItems = document.querySelectorAll('.drawer-item');
  drawerItems.forEach((item) => {
    item.addEventListener('click', () => {
      drawerItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    });
  });
});

