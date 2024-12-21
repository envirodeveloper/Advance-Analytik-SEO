function filterPosts() {
    const selectedCategory = document.getElementById('category-select').value;
    const allSections = document.querySelectorAll('.blogs-section');
  
    allSections.forEach(section => {
        // If the selected category is "all", show all sections
        if (selectedCategory === 'all') {
            section.style.display = 'block';
        } else {
            // If the selected category matches the section's id, show it
            if (section.id === selectedCategory) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        }
    });
  }
  
  // Initialize by displaying all categories
  document.addEventListener('DOMContentLoaded', () => {
    filterPosts();
  });