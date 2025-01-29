const languageSwitcher = {
    lang: 'en',  // Default language is English
    data: {},

    // Load the language file based on the selected language
    async loadLanguage() {
      const langFile = this.lang === 'hu' ? '/languages/hu.json' : '/languages/en.json';
      const response = await fetch(langFile);
      this.data = await response.json();
      this.applyLanguage();
    },

    // Apply the language data to the page
    applyLanguage() {
      // Update dynamic text elements for navigation and other parts
      document.getElementById('home-link').innerText = this.data.home;
      document.getElementById('about-link').innerText = this.data.about;
      document.getElementById('products-link').innerText = this.data.products;
      document.getElementById('market-link').innerText = this.data.market;
      document.getElementById('careers-link').innerText = this.data.careers;
      document.getElementById('contact-link').innerText = this.data.contact;
      document.getElementById('language-link').innerText = this.data.language;
      document.getElementById('language-en').innerText = this.data.language_en;
      document.getElementById('language-hu').innerText = this.data.language_hu;

      // Example of updating other sections dynamically
      document.querySelector('.video-header-text').textContent = this.data.headerText;
      document.querySelector('.video-header-subtext').textContent = this.data.headerSubtext;
      document.querySelector('h2').textContent = this.data.aboutUsTitle;
      document.querySelector('.about-section .about-text h3').textContent = this.data.aboutUsDescriptionTitle;
      document.querySelector('.about-section .about-text p').textContent = this.data.aboutUsDescription;
    },

    // Switch language to either 'en' or 'hu'
    switchLanguage(lang) {
      this.lang = lang;
      this.loadLanguage();
    }
};

// Initial Language Load on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    languageSwitcher.loadLanguage();

    // Add event listeners to switch languages
    document.getElementById('language-en').addEventListener('click', () => {
      languageSwitcher.switchLanguage('en');
    });
    document.getElementById('language-hu').addEventListener('click', () => {
      languageSwitcher.switchLanguage('hu');
    });
});
