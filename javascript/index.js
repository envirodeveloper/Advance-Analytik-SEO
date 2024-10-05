/*sliderrrrrrrrrrrrrrrrrrrr*/


const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentSlide = 0;
const totalSlides = slide.length;

next.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
});

prev.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
});

function updateSlider() {
  const offset = -currentSlide * 100 / totalSlides;
  slides.style.transform = `translateX(${offset}%)`;
}

// Auto Slide
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}, 7000);



document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.faq-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const faqItem = toggle.closest('.faq-item');
      const answer = faqItem.querySelector('p');

      if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        toggle.textContent = '−'; // Change icon to minus
      } else {
        answer.style.display = 'none';
        toggle.textContent = '+'; // Change icon to plus
      }
    });
  });
});
