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

document.addEventListener("DOMContentLoaded", () => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  function toPersianNums(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      // تبدیل اعداد انگلیسی و عربی به فارسی (بدون تغییر عباراتی مثل B2B)
      node.nodeValue = node.nodeValue
        .replace(/(?<![a-zA-Z])[0-9](?![a-zA-Z])/g, (d) => persianDigits[+d])
        .replace(/[٠-٩]/g, (d) => persianDigits[d.charCodeAt(0) - 1632]);
    } else if (
      node.nodeType === Node.ELEMENT_NODE &&
      !["SCRIPT", "STYLE", "CODE", "KBD"].includes(node.tagName)
    ) {
      node.childNodes.forEach(toPersianNums);
    }
  }

  toPersianNums(document.body);
});