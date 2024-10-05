// document.addEventListener("DOMContentLoaded", function() {
//     loadComponent('navbar-placeholder', '../../navbar.html');
//     loadComponent('footer-placeholder', '../../footer.html');
// });

// function loadComponent(id, url) {
//     fetch(url)
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById(id).innerHTML = data;
//         })
//         .catch(error => console.error('Error loading component:', error));
// }


document.addEventListener("DOMContentLoaded", function() {
    loadComponent('navbar-placeholder', '../../navbar.html', initializeNavbar);
    loadComponent('footer-placeholder', '../../footer.html');
});

function loadComponent(id, url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (typeof callback === 'function') {
                callback();  // Call the callback (e.g., to initialize the navbar)
            }
        })
        .catch(error => console.error('Error loading component:', error));
}

function initializeNavbar() {
    // Attach the event listener to the mobile menu toggle after the navbar has been loaded
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', handleMobileMenuToggle);
    }
}

function handleMobileMenuToggle() {
    const menu = document.querySelector('.navbar__links__wrapper');
    menu.classList.toggle('show-mobile-menu');
}




