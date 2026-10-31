let currentSlide = 0;
const totalSlides = 21;

document.addEventListener("DOMContentLoaded", () => {
  initSlides();
  initDots();
  updateSlideView();

  // کلیدهای کیبورد (چپ و راست)
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      prevSlide();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === " ") {
      nextSlide();
    } else if (e.key === "f" || e.key === "F") {
      toggleFullScreen();
    }
  });
});

function initSlides() {
  const slides = document.querySelectorAll(".slide");
  totalSlidesCheck = slides.length;
}

function initDots() {
  const dotsContainer = document.getElementById("slideDots");
  if (!dotsContainer) return;
  dotsContainer.innerHTML = "";

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("button");
    dot.className = `slide-dot ${i === 0 ? "active" : ""}`;
    dot.setAttribute("onclick", `goToSlide(${i})`);
    dot.setAttribute("aria-label", `اسلاید ${i + 1}`);
    dotsContainer.appendChild(dot);
  }
}

function goToSlide(index) {
  if (index < 0 || index >= totalSlides) return;
  currentSlide = index;
  updateSlideView();
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlideView();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlideView();
  }
}

function updateSlideView() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, idx) => {
    if (idx === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });

  // به‌روزرسانی شمارنده اسلاید
  const currentNumEl = document.getElementById("currentSlideNum");
  const totalNumEl = document.getElementById("totalSlideNum");
  if (currentNumEl) currentNumEl.textContent = currentSlide + 1;
  if (totalNumEl) totalNumEl.textContent = totalSlides;

  // به‌روزرسانی نوار پیشرفت (Progress Bar)
  const progressBar = document.getElementById("progressBar");
  if (progressBar) {
    const progressPercent = ((currentSlide + 1) / totalSlides) * 100;
    progressBar.style.width = `${progressPercent}%`;
  }

  // به‌روزرسانی نقطه‌ها (Dots)
  const dots = document.querySelectorAll(".slide-dot");
  dots.forEach((dot, idx) => {
    if (idx === currentSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });

  // به‌روزرسانی وضعیت دکمه‌های ناوبری
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");
  if (btnPrev) btnPrev.disabled = currentSlide === 0;
  if (btnNext) btnNext.disabled = currentSlide === totalSlides - 1;

  // اسکرول به بالای محتوای اسلاید هنگام تغییر
  const stageContainer = document.getElementById("stageContainer");
  if (stageContainer) stageContainer.scrollTop = 0;

  // به‌روزرسانی دکمه‌های منوی فصل‌ها (Chapter Nav)
  updateChapterNav();
}

function updateChapterNav() {
  const chapterBtns = document.querySelectorAll(".chapter-btn");
  // تعیین فصل بر اساس شماره اسلاید
  let activeChapter = 0;
  if (currentSlide >= 5 && currentSlide < 10) activeChapter = 1;
  else if (currentSlide >= 10 && currentSlide < 15) activeChapter = 2;
  else if (currentSlide >= 15 && currentSlide < 19) activeChapter = 3;
  else if (currentSlide >= 19) activeChapter = 4;

  chapterBtns.forEach((btn, idx) => {
    if (idx === activeChapter) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function toggleDrawer() {
  const backdrop = document.getElementById("drawerBackdrop");
  if (backdrop) {
    backdrop.classList.toggle("open");
  }
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      console.error("خطا در ورود به حالت تمام‌صفحه:", err);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}