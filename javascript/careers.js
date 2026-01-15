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



// career form

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".career-form form");
  const submitBtn = document.getElementById("career-submit-btn");
  const submitText = document.getElementById("career-submit-text");
  const spinner = document.getElementById("career-spinner");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Show loading spinner
    submitText.style.display = "none";
    spinner.style.display = "inline-block";
    submitBtn.disabled = true;

    const formData = new FormData(form);

    try {
      const response = await fetch("https://advance-analytik-seo.onrender.com/api/careers", {
        method: "POST",
        body: formData, // automatically handles file + text fields
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Application submitted successfully!");
        form.reset();
      } else {
        alert("❌ Error: " + result.message);
      }
    } catch (error) {
      alert("⚠️ Network error. Please try again later.");
    } finally {
      // Reset button state
      submitText.style.display = "inline";
      spinner.style.display = "none";
      submitBtn.disabled = false;
    }
  });
});
