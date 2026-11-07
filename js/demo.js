/* =========================================================================
   INTERACTIVE DEMOS & FLIPS (Debit Cards & Vouchers)
   ========================================================================= */

function toggleDebitCardFlip(cardElement) {
  cardElement.classList.toggle('is-flipped');
}

function toggleVoucherFlip(voucherElement) {
  voucherElement.classList.toggle('is-flipped');
}
/* =========================================================================
   IRAN MAP HOVER TOOLTIP LOGIC (Slide 20)
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const mapPaths = document.querySelectorAll('.imap-prov');
  const tooltip = document.getElementById('imapTip');
  
  if (!mapPaths.length || !tooltip) return; // اگر نقشه در صفحه نبود، کد متوقف شود

  // خواندن داده‌های JSON از تگ script
  let mapData = [];
  try {
    const metaTag = document.getElementById('imapMeta');
    if (metaTag) {
      mapData = JSON.parse(metaTag.textContent);
    }
  } catch (error) {
    console.error("Error parsing map JSON data:", error);
  }

  // رویداد ورود موس (Hover) روی هر استان
  mapPaths.forEach(path => {
    path.addEventListener('mouseenter', (e) => {
      const provKey = path.getAttribute('data-k'); // کلید استان (مثلاً Tehran)
      
      // پیدا کردن اطلاعات استان در آرایه JSON
      const provData = mapData.find(item => item.key === provKey);

      if (provData) {
        // ساخت محتوای داخل Tooltip
        tooltip.innerHTML = `
          <div class="tip-title-row">
            <span class="tip-prov-name">استان ${provData.fa}</span>
            <span class="tip-city-name">مرکز: ${provData.center}</span>
          </div>
          <div class="tip-merch-row">
            <span>تعداد مرچنت و پذیرنده:</span>
            <strong class="tip-merch-num">${provData.stores.toLocaleString('fa-IR')} فروشگاه</strong>
          </div>
        `;
        
        // نمایش Tooltip
        tooltip.classList.add('visible');
      }
    });

    // رویداد حرکت موس برای جابجا کردن Tooltip همراه نشانگر
    path.addEventListener('mousemove', (e) => {
      // پیدا کردن کانتینر نقشه برای محاسبه مختصات نسبی
      const mapContainer = document.querySelector('.imap');
      if (!mapContainer) return;

      const containerRect = mapContainer.getBoundingClientRect();
      
      // محاسبه موقعیت موس نسبت به کانتینر نقشه
      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;

      // تنظیم موقعیت Tooltip (کمی فاصله دادن از نشانگر موس)
      tooltip.style.left = `${x + 15}px`;
      tooltip.style.top = `${y + 15}px`;
    });

    // رویداد خروج موس از استان
    path.addEventListener('mouseleave', () => {
      tooltip.classList.remove('visible');
    });
  });
});