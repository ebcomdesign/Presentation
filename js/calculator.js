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

  function formatNum(num) {
    return new Intl.NumberFormat('fa-IR').format(num);
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

    // نمایش مقدارها
    amountOut.innerHTML = `${formatNum(principal)} <small>تومان</small>`;
    countOut.innerHTML = `${months} <small>ماهه</small>`;
    feeOut.innerHTML = `${feeRate}٪`;
    
    if (feeInput && document.activeElement !== feeInput) {
      feeInput.value = feeRate;
    }

    instOut.textContent = formatNum(Math.round(totalInstallment));
    resBase.textContent = `${formatNum(Math.round(baseInstallment))} تومان`;
    resFee.textContent = `${formatNum(Math.round(feeInstallment))} تومان`;
    resCount.textContent = `${months} ماهه · کارمزد ${feeRate}٪`;
    resTotal.textContent = `${formatNum(Math.round(totalPayment))} تومان`;

    if (formulaText) {
      formulaText.textContent = `(${formatNum(principal)} ÷ ${months}) + (${formatNum(principal)} × ${feeRate}٪) = ${formatNum(Math.round(totalInstallment))}`;
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
        let val = parseFloat(e.target.value);
        if (isNaN(val)) val = 0;
        if (val < 0) val = 0;
        if (val > 5) val = 5;
        feeRange.value = val;
        updateCalculator();
      });
    }

    // مقداردهی اولیه
    updateCalculator();
  }
});