/* =========================================================================
   MAIN APP CONTROLLER & HELPERS
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // فعال‌سازی لینک‌های دراور بر اساس اسلاید فعال
  const drawerItems = document.querySelectorAll('.drawer-item');
  drawerItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      drawerItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    });
  });
});

const faDigits = n => String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
el.textContent = faDigits(count);