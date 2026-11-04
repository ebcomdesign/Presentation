/* =========================================================================
   NAVIGATION & DECK CONTROLLER
   ========================================================================= */

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function initDeck() {
  document.getElementById('totalSlideNum').textContent = totalSlides;
  buildSlideDots();
  updateDeckState();
  
  // گوش دادن به کلیدهای کیبورد
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      prevSlide(); // با توجه به جهت RTL
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      nextSlide();
    } else if (e.key.toLowerCase() === 'f') {
      toggleFullScreen();
    }
  });
}

function updateDeckState() {
  slides.forEach((slide, idx) => {
    if (idx === currentSlideIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  // به‌روزرسانی شماره صفحه در فوتر
  document.getElementById('currentSlideNum').textContent = currentSlideIndex + 1;

  // به‌روزرسانی نوار پیشرفت (Progress Bar)
  const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;
  document.getElementById('progressBar').style.width = progressPercent + '%';

  // غیرفعال کردن دکمه‌ها در ابتدا یا انتها
  document.getElementById('btnPrev').disabled = currentSlideIndex === 0;
  document.getElementById('btnNext').disabled = currentSlideIndex === totalSlides - 1;

  // به‌روزرسانی دات‌های فوتر
  const dots = document.querySelectorAll('.slide-dots .dot');
  dots.forEach((dot, idx) => {
    if (idx === currentSlideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  // به‌روزرسانی دکمه‌های هدر (Chapter Nav)
  updateChapterNav();
}

function nextSlide() {
  if (currentSlideIndex < totalSlides - 1) {
    currentSlideIndex++;
    updateDeckState();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    updateDeckState();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function goToSlide(index) {
  if (index >= 0 && index < totalSlides) {
    currentSlideIndex = index;
    updateDeckState();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function buildSlideDots() {
  const dotsContainer = document.getElementById('slideDots');
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.title = `اسلاید ${idx + 1}`;
    dot.onclick = () => goToSlide(idx);
    dotsContainer.appendChild(dot);
  });
}

function updateChapterNav() {
  const chapterBtns = document.querySelectorAll('.chapter-btn');
  // تعیین فصل بر اساس اسلاید فعلی
  let chapterIdx = 0;
  if (currentSlideIndex >= 5 && currentSlideIndex < 10) chapterIdx = 1;
  else if (currentSlideIndex >= 10 && currentSlideIndex < 15) chapterIdx = 2;
  else if (currentSlideIndex >= 15 && currentSlideIndex < 19) chapterIdx = 3;
  else if (currentSlideIndex >= 19) chapterIdx = 4;

  chapterBtns.forEach((btn, idx) => {
    if (idx === chapterIdx) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function toggleDrawer() {
  const backdrop = document.getElementById('drawerBackdrop');
  if (backdrop) {
    backdrop.classList.toggle('open');
  }
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.error("خطا در ورود به حالت تمام‌صفحه:", err.message);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// راه‌اندازی اولیه پس از لود صفحه
window.addEventListener('DOMContentLoaded', initDeck);