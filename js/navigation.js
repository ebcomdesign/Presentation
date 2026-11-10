/* =========================================================================
   NAVIGATION & DECK CONTROLLER
   ========================================================================= */

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// تبدیل ارقام لاتین به فارسی
function faDigits(n) {
  return String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
}

function initDeck() {
  document.getElementById('totalSlideNum').textContent = faDigits(totalSlides);
  buildSlideDots();
  updateDeckState();
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      prevSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown' || e.key === ' ') {
      if (e.key === ' ') {
        e.preventDefault();
      }
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

  // شماره اسلاید فعلی — فارسی
  document.getElementById('currentSlideNum').textContent = faDigits(currentSlideIndex + 1);

  const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;
  document.getElementById('progressBar').style.width = progressPercent + '%';

  document.getElementById('btnPrev').disabled = currentSlideIndex === 0;
  document.getElementById('btnNext').disabled = currentSlideIndex === totalSlides - 1;

  const dots = document.querySelectorAll('.slide-dots .dot');
  dots.forEach((dot, idx) => {
    if (idx === currentSlideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

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
    dot.title = `اسلاید ${faDigits(idx + 1)}`;
    dot.onclick = () => goToSlide(idx);
    dotsContainer.appendChild(dot);
  });
}

function updateChapterNav() {
  const chapterBtns = document.querySelectorAll('.chapter-btn');
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

window.addEventListener('DOMContentLoaded', initDeck);