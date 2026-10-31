document.addEventListener("DOMContentLoaded", () => {
  initCalculator();
});

function initCalculator() {
  const amountInput = document.getElementById("calcAmount");
  const countInput = document.getElementById("calcCountIdx");
  const feeInput = document.getElementById("calcFeeRate");
  const feeNumberInput = document.getElementById("calcFeeInput");

  if (!amountInput || !countInput || !feeInput) return;

  const countOptions = [4, 6, 12, 18, 24];

  function updateCalc() {
    const principal = parseFloat(amountInput.value);
    const countIdx = parseInt(countInput.value);
    const months = countOptions[countIdx];
    let feeRate = parseFloat(feeInput.value);

    if (feeNumberInput && document.activeElement !== feeNumberInput) {
      feeNumberInput.value = feeRate;
    }

    // به‌روزرسانی متن خروجی‌ها
    document.getElementById("calcAmountOut").innerHTML = formatToman(principal) + " <small>تومان</small>";
    document.getElementById("calcCountOut").innerHTML = months + " <small>ماهه</small>";
    document.getElementById("calcFeeOut").innerHTML = feeRate + " <small>درصد</small>";

    // فرمول محاسبه قسط: (اصل ÷ تعداد اقساط) + (اصل × درصد کارمزد ماهانه)
    const baseInstallment = principal / months;
    const feePerMonth = principal * (feeRate / 100);
    const totalInstallment = baseInstallment + feePerMonth;
    const totalPayment = totalInstallment * months;

    document.getElementById("calcInst").textContent = formatNumber(Math.round(totalInstallment));
    document.getElementById("calcResBase").textContent = formatToman(Math.round(baseInstallment)) + " تومان";
    document.getElementById("calcResFee").textContent = formatToman(Math.round(feePerMonth)) + " تومان";
    document.getElementById("calcResCount").textContent = `${months} ماهه · کارمزد ${feeRate}٪`;
    document.getElementById("calcResTotal").textContent = formatToman(Math.round(totalPayment)) + " تومان";

    // متن فرمول نمایشی
    document.getElementById("calcFormulaText").textContent = 
      `(${formatNumber(principal)} ÷ ${months}) + (${formatNumber(principal)} × ${feeRate}%) = ${formatNumber(Math.round(totalInstallment))}`;

    // به‌روزرسانی خط گرادینت اسلایدرها
    updateRangeTrack(amountInput);
    updateRangeTrack(countInput);
    updateRangeTrack(feeInput);
  }

  amountInput.addEventListener("input", updateCalc);
  countInput.addEventListener("input", updateCalc);
  feeInput.addEventListener("input", () => {
    if (feeNumberInput) feeNumberInput.value = feeInput.value;
    updateCalc();
  });

  if (feeNumberInput) {
    feeNumberInput.addEventListener("input", () => {
      let val = parseFloat(feeNumberInput.value);
      if (isNaN(val)) val = 0;
      feeInput.value = val;
      updateCalc();
    });
  }

  updateCalc();
}

function updateRangeTrack(input) {
  const min = parseFloat(input.min) || 0;
  const max = parseFloat(input.max) || 100;
  const val = parseFloat(input.value);
  const percent = (val - min) / (max - min);
  
  const track = input.parentElement.querySelector(".calc-line");
  if (track) {
    track.style.setProperty("--f", percent);
  }
  const pin = input.parentElement.querySelector(".calc-pin");
  if (pin) {
    pin.style.left = `calc(12px + (100% - 24px) * ${percent})`;
  }
}

function formatNumber(num) {
  return new Intl.NumberFormat('fa-IR').format(num);
}

function formatToman(num) {
  return formatNumber(num);
}