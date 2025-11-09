// HERO SLIDESHOW
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
setInterval(showNextSlide, 5000);

// FADE-IN SCROLL EFFECT
const fadeSections = document.querySelectorAll('.fade-section');
function onScroll() {
  fadeSections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) sec.classList.add('visible');
  });
}
window.addEventListener('scroll', onScroll);
onScroll();
