/* =========================================================================
   CREDIT CALCULATOR (Slide 10)
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const amountRange = document.getElementById('calcAmount');
  const amountOut = document.getElementById('calcAmountOut');
  
  const countRange = document.getElementById('calcCountIdx');
  const countOut = document.getElementById('calcCountOut');
  
  const feeRange = document.getElementById('calcFeeRate');
  const feeInput = document.getElementById('calcFeeInput');
  const feeOut = document.getElementById('calcFeeOut');
  
  const instOut = document.getElementById('calcInst');
  const resBase = document.getElementById('calcResBase');
  const resFee = document.getElementById('calcResFee');
  const resCount = document.getElementById('calcResCount');
  const resTotal = document.getElementById('calcResTotal');
  const formulaText = document.getElementById('calcFormulaText');

  const installmentOptions = [4, 6, 12, 18, 24];

  // تبدیل هر رقم لاتین به فارسی
  function faDigits(str) {
    return String(str).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
  }

  // عدد را با جداکننده هزارگان فارسی + ارقام فارسی برمی‌گرداند
  function formatNum(num) {
    return new Intl.NumberFormat('fa-IR').format(num);
  }

  // برای اعدادی که ممکن است اعشار داشته باشند (نرخ کارمزد)
  function faDecimal(num) {
    return faDigits(String(num)).replace('.', '٫');
  }

  function updateCalculator() {
    if (!amountRange) return;

    const principal = parseInt(amountRange.value, 10);
    const countIndex = parseInt(countRange.value, 10);
    const months = installmentOptions[countIndex];
    const feeRate = parseFloat(feeRange.value);

    // محاسبه اقساط
    const baseInstallment = principal / months;
    const feeInstallment = principal * (feeRate / 100);
    const totalInstallment = baseInstallment + feeInstallment;
    const totalPayment = totalInstallment * months;

    // نمایش مقدارها — همه از faDigits/formatNum عبور می‌کنند
    amountOut.innerHTML = `${formatNum(principal)} <small>تومان</small>`;
    countOut.innerHTML = `${faDigits(months)} <small>ماهه</small>`;
    feeOut.innerHTML = `${faDecimal(feeRate)}٪`;
    
    if (feeInput && document.activeElement !== feeInput) {
      feeInput.value = faDecimal(feeRate);
    }

    instOut.textContent = formatNum(Math.round(totalInstallment));
    resBase.textContent = `${formatNum(Math.round(baseInstallment))} تومان`;
    resFee.textContent = `${formatNum(Math.round(feeInstallment))} تومان`;
    resCount.textContent = `${faDigits(months)} ماهه · کارمزد ${faDecimal(feeRate)}٪`;
    resTotal.textContent = `${formatNum(Math.round(totalPayment))} تومان`;

    if (formulaText) {
      formulaText.textContent = `(${formatNum(principal)} ÷ ${faDigits(months)}) + (${formatNum(principal)} × ${faDecimal(feeRate)}٪) = ${formatNum(Math.round(totalInstallment))}`;
    }

    // به‌روزرسانی ظاهر رینج اسلایدرها (Track Fill)
    updateRangeTrack(amountRange);
    updateRangeTrack(countRange);
    updateRangeTrack(feeRange);
  }

  function updateRangeTrack(input) {
    const min = parseFloat(input.min) || 0;
    const max = parseFloat(input.max) || 100;
    const val = parseFloat(input.value) || 0;
    const percentage = (val - min) / (max - min);
    
    const track = input.parentElement.querySelector('.calc-line i');
    const pin = input.parentElement.querySelector('.calc-pin');
    
    if (track) track.style.width = `${percentage * 100}%`;
    if (pin) pin.style.left = `calc(12px + (100% - 24px) * ${percentage})`;
    input.parentElement.style.setProperty('--f', percentage);
  }

  if (amountRange) {
    amountRange.addEventListener('input', updateCalculator);
    countRange.addEventListener('input', updateCalculator);
    feeRange.addEventListener('input', updateCalculator);

    if (feeInput) {
      feeInput.addEventListener('input', (e) => {
        // ارقام فارسی/عربی را به لاتین برگردان تا parseFloat کار کند
        const latin = e.target.value
          .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
          .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
          .replace('٫', '.')
          .replace('،', '.');

        let val = parseFloat(latin);
        if (isNaN(val)) val = 0;
        if (val < 0) val = 0;
        if (val > 5) val = 5;

        feeRange.value = val;

        // نمایش را دوباره فارسی کن (بدون اینکه مکان‌نما بپرد)
        const pos = e.target.selectionStart;
        e.target.value = faDecimal(val);
        try { e.target.setSelectionRange(pos, pos); } catch (_) {}

        updateCalculator();
      });
    }

    // مقداردهی اولیه
    updateCalculator();
  }
});