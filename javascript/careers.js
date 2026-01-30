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
  console.log("Career form JS loaded");

  const form = document.querySelector(".career-form form");
  const submitBtn = document.getElementById("career-submit-btn");
  const submitText = document.getElementById("career-submit-text");
  const spinner = document.getElementById("career-spinner");
  const messageBox = document.getElementById("career-message");

  // Safety check
  if (!form) {
    console.error("Career form not found!");
    return;
  }

  // Check EmailJS
  if (typeof emailjs === "undefined") {
    console.error("EmailJS library not loaded!");
    return;
  }

  // ✅ INIT EMAILJS (PUBLIC KEY)
  emailjs.init("DrTQJA86pkMI4TUe5"); // your public key

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Career form submitted");

    // UI loading state
    submitText.style.display = "none";
    spinner.style.display = "inline-block";
    submitBtn.disabled = true;
    messageBox.textContent = "";

    // ✅ SEND FORM VIA EMAILJS (supports file upload)
    emailjs
      .sendForm(
        "service_xg5yduu",     // EmailJS Service ID
        "template_ilnp3ds",    // Career Email Template ID
        this                  // form element
      )
      .then((response) => {
        console.log("EmailJS success:", response);

        messageBox.style.color = "green";
        messageBox.textContent = "✅ Application submitted successfully!";
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);

        messageBox.style.color = "red";
        messageBox.textContent =
          "❌ Failed to submit application. Please try again.";
      })
      .finally(() => {
        // Restore button state
        submitText.style.display = "inline";
        spinner.style.display = "none";
        submitBtn.disabled = false;
      });
  });
});
