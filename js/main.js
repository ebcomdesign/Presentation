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

const faDigits = n => String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

document.addEventListener('DOMContentLoaded', () => {
  const drawerItems = document.querySelectorAll('.drawer-item');
  drawerItems.forEach((item) => {
    item.addEventListener('click', () => {
      drawerItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // فارسی‌سازی امن: فقط اگر رقم لاتین وجود داشت
  setInterval(() => {
    document.querySelectorAll('.current-num, .slide-number, .counter').forEach(el => {
      if (/\d/.test(el.textContent)) {
        el.textContent = faDigits(el.textContent);
      }
    });
  }, 200);
});