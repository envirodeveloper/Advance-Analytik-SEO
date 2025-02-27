document.querySelectorAll('.faq__item').forEach(item => {
  item.addEventListener('click', function() {
      // Toggle active class and answer visibility
      const answer = this.querySelector('.faq__answer');
      const icon = this.querySelector('.icon');

      if (this.classList.contains('active')) {
          this.classList.remove('active');
          answer.style.display = 'none';
          icon.textContent = '+';
      } else {
          document.querySelectorAll('.faq__item').forEach(el => {
              el.classList.remove('active');
              el.querySelector('.faq__answer').style.display = 'none';
              el.querySelector('.icon').textContent = '+';
          });

          this.classList.add('active');
          answer.style.display = 'block';
          icon.textContent = '-';
      }
  });
});
