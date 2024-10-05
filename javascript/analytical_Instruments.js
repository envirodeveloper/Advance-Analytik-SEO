document.getElementById("readMoreButton").addEventListener("click", function() {
    var additionalParagraph = document.getElementById("additionalParagraph");
    var contentSection = document.querySelector(".analyticalInstrumentation__header__content"); // Adjust this selector as needed
    
    if (additionalParagraph.classList.contains("hidden")) {
        additionalParagraph.classList.remove("hidden");
        this.textContent = "Read Less"; // Change button text
        
        // Increase the height of the section
        contentSection.style.height = contentSection.scrollHeight + "px"; // Set to current scroll height
        
        // Add margin-top
        contentSection.style.marginTop = "130px"; // Set margin-top to 10px
    } else {
        additionalParagraph.classList.add("hidden");
        this.textContent = "Read More"; // Change button text back
        
        // Optionally, reset height and margin
        contentSection.style.height = ""; // Reset height to original
        contentSection.style.marginTop = ""; // Reset margin-top
    }
});


