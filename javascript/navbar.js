// JavaScript to handle mobile menu toggle and sidebar visibility
let showMobileMenu = false;
let showSidebar = false;

function handleMobileMenuToggle() {
    const menu = document.querySelector('.navbar__links__wrapper');
    menu.classList.toggle('show-mobile-menu');
}



// Optional: If you have a Sidebar that opens, you can add this function as well
const toggleSidebar = () => {
    showSidebar = !showSidebar;
    const sidebar = document.querySelector('.sidebar'); // Assume sidebar has a class of "sidebar"
    
    if (showSidebar) {
        sidebar.style.display = 'block';
    } else {
        sidebar.style.display = 'none';
    }
};

// Scroll event to change background color of the navbar when scrolling
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});





