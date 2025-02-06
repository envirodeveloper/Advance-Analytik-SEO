document.addEventListener("DOMContentLoaded", function () {
    // Load navbar dynamically
    loadComponent('navbar-placeholder', '../../navbar.html', initializeScrollBehavior);
    loadComponent('footer-placeholder', '../../footer.html');
});

// Function to dynamically load components
// function loadComponent(id, url, callback) {
//     fetch(url)
//         .then(response => response.text())
//         .then(data => {
//             const element = document.getElementById(id);
//             if (element) {
//                 element.innerHTML = data;
//                 if (typeof callback === 'function') {
//                     callback(); // Execute callback after the component is loaded
//                 }
//             } else {
//                 console.error(`Element with id '${id}' not found.`);
//             }
//         })
//         .catch(error => console.error('Error loading component:', error));
// }

function loadComponent(id, url, callback) {
    const cachedData = sessionStorage.getItem(url);
    
    if (cachedData) {
        document.getElementById(id).innerHTML = cachedData;
        if (callback) callback();
    } else {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                sessionStorage.setItem(url, data); // Cache response
                document.getElementById(id).innerHTML = data;
                if (callback) callback();
            })
            .catch(error => console.error('Error loading component:', error));
    }
}


// Scroll behavior for preheader and navbar
function initializeScrollBehavior() {
    const preheader = document.querySelector('#preheader');
    const navbar = document.querySelector('#navbar');
    let lastScrollY = window.scrollY;

    if (preheader && navbar) {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Scrolling down
                preheader.classList.add('hidden'); // Hide preheader
                navbar.classList.add('top'); // Move navbar up
            } else {
                // Scrolling up
                preheader.classList.remove('hidden'); // Show preheader
                navbar.classList.remove('top'); // Move navbar back to original position
            }

            lastScrollY = currentScrollY;
        });
    } else {
        console.error('Preheader or Navbar element not found in the dynamically loaded content.');
    }
}



function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var toggleBtn = document.getElementById("toggle-btn");

    // Check if the sidebar is currently open or closed
    var isSidebarOpen = sidebar.classList.contains("show");

    // Toggle the sidebar open/close
    sidebar.classList.toggle("show");

    // Toggle the 'close' class on the toggle button based on sidebar's state
    if (isSidebarOpen) {
        toggleBtn.classList.remove("close"); // Remove close icon when sidebar closes
    } else {
        toggleBtn.classList.add("close"); // Add close icon when sidebar opens
    }
}

  function toggleDropdown(section) {
    var dropdown = document.getElementById(section + "-dropdown");
    dropdown.classList.toggle("show");
    toggleBtn.classList.toggle("close"); // Add/Remove the "close" class
  
    var arrow = document.querySelector('.has-dropdown a.' + section + '.arrow');
    arrow.classList.toggle("up", dropdown.classList.contains("show")); // Add this line
  }



