document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("language-selector");

    // Load saved language or default to English
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    languageSelector.value = savedLanguage;
    changeLanguage(savedLanguage);

    // Event listener for language change
    languageSelector.addEventListener("change", function () {
        const selectedLanguage = languageSelector.value;
        localStorage.setItem("selectedLanguage", selectedLanguage);
        changeLanguage(selectedLanguage);
    });
});

// Translations
const translations = {
    en: {
        title: "Advanced Water Monitoring Solutions",
        highAccuracy: "High-Accuracy Sensors",
        highAccuracyDesc: "Ensures precise and reliable readings",
        realTime: "Real-Time Data Monitoring",
        realTimeDesc: "Enables instant decision-making",
        customizable: "Customizable Solutions",
        customizableDesc: "Adapted to industry-specific needs",
        durable: "Durable & Long-Lasting",
        durableDesc: "Designed for harsh environmental conditions",
        ourAnalyzers: "Our Advanced Water Quality Analyzers",
        parameters: "Parameters We Measure",
        industries: "Industries We Serve",
        specifications: "Technical Specifications",
        faqTitle: "Frequently Asked Questions",
        faq1: "How does a water quality analyzer work?",
        faq1Desc: "A water quality analyzer uses advanced sensors to measure key water parameters, detecting variations in pH, conductivity, turbidity, dissolved oxygen, and more.",
        faq2: "Which industries require water quality monitoring?",
        faq2Desc: "Industries like wastewater treatment, pharmaceuticals, food processing, power generation, and aquaculture rely on water quality analyzers to maintain safe and efficient operations."
    },
    hu: {
        title: "Fejlett vízminőség-ellenőrzési megoldások",
        highAccuracy: "Nagy pontosságú érzékelők",
        highAccuracyDesc: "Biztosítja a pontos és megbízható méréseket",
        realTime: "Valós idejű adatelemzés",
        realTimeDesc: "Lehetővé teszi az azonnali döntéshozatalt",
        customizable: "Testreszabható megoldások",
        customizableDesc: "Iparspecifikus igényekhez igazítva",
        durable: "Tartós és hosszú élettartamú",
        durableDesc: "Zord környezeti feltételekhez tervezve",
        ourAnalyzers: "Fejlett vízminőség-ellenőrző eszközeink",
        parameters: "Mért paraméterek",
        industries: "Kiszolgált iparágak",
        specifications: "Műszaki adatok",
        faqTitle: "Gyakran Ismételt Kérdések",
        faq1: "Hogyan működik a vízminőség-elemző?",
        faq1Desc: "A vízminőség-elemző fejlett érzékelőket használ a kulcsfontosságú vízparaméterek mérésére, például a pH, vezetőképesség, zavarosság és oldott oxigén változásainak észlelésére.",
        faq2: "Mely iparágaknak van szüksége vízminőség-ellenőrzésre?",
        faq2Desc: "Olyan iparágak, mint a szennyvízkezelés, gyógyszeripar, élelmiszer-feldolgozás, energiatermelés és akvakultúra, támaszkodnak vízminőség-ellenőrző eszközökre a biztonságos és hatékony működés fenntartása érdekében."
    }
};

// Function to change language dynamically
function changeLanguage(lang) {
    document.querySelector(".water-analyzer-header-title").textContent = translations[lang].title;
    document.querySelectorAll(".water-analyzer-card")[0].querySelector("h3").textContent = translations[lang].highAccuracy;
    document.querySelectorAll(".water-analyzer-card")[0].querySelector("p").textContent = translations[lang].highAccuracyDesc;
    document.querySelectorAll(".water-analyzer-card")[1].querySelector("h3").textContent = translations[lang].realTime;
    document.querySelectorAll(".water-analyzer-card")[1].querySelector("p").textContent = translations[lang].realTimeDesc;
    document.querySelectorAll(".water-analyzer-card")[2].querySelector("h3").textContent = translations[lang].customizable;
    document.querySelectorAll(".water-analyzer-card")[2].querySelector("p").textContent = translations[lang].customizableDesc;
    document.querySelectorAll(".water-analyzer-card")[3].querySelector("h3").textContent = translations[lang].durable;
    document.querySelectorAll(".water-analyzer-card")[3].querySelector("p").textContent = translations[lang].durableDesc;

    document.querySelector(".water-analyzer-content-title").textContent = translations[lang].ourAnalyzers;
    document.querySelectorAll(".water-analyzer-content-title")[1].textContent = translations[lang].parameters;
    document.querySelectorAll(".water-analyzer-content-title")[2].textContent = translations[lang].industries;
    document.querySelector(".water-analyzer-table-content-section h2").textContent = translations[lang].specifications;
    
    document.querySelector(".faq-section__title").textContent = translations[lang].faqTitle;
    document.querySelectorAll(".faq-item__question span")[0].textContent = "Q1: " + translations[lang].faq1;
    document.querySelectorAll(".faq-item__answer p")[0].textContent = translations[lang].faq1Desc;
    document.querySelectorAll(".faq-item__question span")[1].textContent = "Q2: " + translations[lang].faq2;
    document.querySelectorAll(".faq-item__answer p")[1].textContent = translations[lang].faq2Desc;
}
