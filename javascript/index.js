
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');

let currentSlide = 0;
const totalSlides = slide.length;

// Auto Slide
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}, 7000);

function updateSlider() {
  const offset = -currentSlide * 100 / totalSlides;
  slides.style.transform = `translateX(${offset}%)`;
}




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


const contentData = [
  {
      title: "Comprehensive Analytical Instruments",
      text: "Our product range represents the pinnacle of precision and reliability. Explore our wide range of high-precision analytical instruments designed to meet the rigorous demands of today’s industries. From water quality analyzers to environmental sensors, our products ensure accurate and reliable measurements. As leading analytical instruments manufacturers, our solutions cater to industries seeking the best analytical instruments & solutions available.",
      bullets: [
        "Water Quality Analyzers: Ensure the purity and safety of water with our range of analyzers designed for various applications, including industrial, environmental, and municipal settings.",
        "Environmental Sensors: Monitor air quality, soil conditions, and other environmental parameters with high precision, enabling you to make informed decisions.",
    ]
  },
  {
      title: "Engineering Services & Consultation",
      text: "Our engineering services are designed to optimize your operations, improve efficiency, and ensure compliance with industry standards. We offer expert consultation in areas such as process optimization, environmental compliance, and system integration consultancy. Whether you're seeking IT consultants for analytical solutions or analytical instrumentation providers, our engineering services cater to all your needs and here’s how:",
      bullets: [
        "Process Optimization: Enhance the efficiency of your operations by identifying and eliminating bottlenecks, optimizing workflows, and implementing best practices.",
        "Environmental Compliance: Stay ahead of regulatory requirements with our comprehensive environmental consulting services, ensuring that your operations are sustainable and compliant.",
    ]
  },
  {
      title: "IT Solutions & Consultancy",
      text: "In an increasingly digital world, stay ahead in the digital age with our IT solutions. From software development to data management and cybersecurity, we offer comprehensive IT services that drive digital transformation and business growth. We stand as trusted IT consultants for analytical solutions, ensuring that our clients achieve operational excellence and security. Our dedicated team tailors each solution to meet unique industry requirements.",
      bullets: [
        "Software Development: Develop custom software solutions that address your specific needs, from operational management to customer engagement.",
        "Data Management: Secure and streamline your data with advanced management systems that ensure accuracy, accessibility, and compliance.",
    ]
  },

];


function changeImage(thumbnail, index) {
  const mainImage = document.getElementById('mainImage');
  const contentTitle = document.getElementById('contentTitle');
  const contentText = document.getElementById('contentText');
  const contentBullets = document.getElementById('contentBullets');

  // Change main image source
  mainImage.src = thumbnail.src;

  // Update content title and description
  contentTitle.textContent = contentData[index].title;
  contentText.textContent = contentData[index].text;

  // Update bullet points
  contentBullets.innerHTML = "";
  contentData[index].bullets.forEach(bullet => {
      const li = document.createElement("li");
      li.textContent = bullet;
      contentBullets.appendChild(li);
  });

  // Remove active class from all thumbnails and add to selected
  document.querySelectorAll('.gallery-thumbnail').forEach(thumb => thumb.classList.remove('active'));
  thumbnail.classList.add('active');

  // Add fade effect to main image
  mainImage.style.opacity = '0';
  setTimeout(() => {
      mainImage.style.opacity = '1';
  }, 100);
}
