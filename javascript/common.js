
document.addEventListener("DOMContentLoaded", function() {
    loadComponent('navbar-placeholder', '../../navbar.html');
    loadComponent('footer-placeholder', '../../footer.html');
});

function loadComponent(id, url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (typeof callback === 'function') {
                callback();  // Call the callback to initialize the navbar
            }
        })
        .catch(error => console.error('Error loading component:', error));
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



// function toggleSidebar() {
//     const sidebar = document.getElementById("sidebar");
//     const toggleBtn = document.querySelector(".navbar__toggle-btn");

//     // Toggle sidebar visibility
//     if (sidebar.style.display === "block") {
//         sidebar.style.display = "none";  // Hide sidebar
//         toggleBtn.innerHTML = "&#9776;"; // Show hamburger icon when sidebar is closed
//     } else {
//         sidebar.style.display = "block"; // Show sidebar
//         toggleBtn.innerHTML = "&times;"; // Show close icon when sidebar is open
//     }
// }

// // Function to toggle submenu
// // Function to toggle submenu
// function toggleSubmenu(event, submenuId) {
//     event.preventDefault();
//     const submenu = document.getElementById(submenuId);
//     const isVisible = submenu.style.display === 'block';

//     // Close all other submenus before opening the current one
//     const allSubmenus = document.querySelectorAll('.sidebar__submenu');
//     allSubmenus.forEach((menu) => {
//         menu.style.display = 'none';  // Close all submenus
//     });

//     // Toggle the clicked submenu visibility
//     submenu.style.display = isVisible ? 'none' : 'block'; 
// }


// Hide sidebar on window resize
// window.onresize = function () {
//     if (window.innerWidth > 720) {
//         document.getElementById("sidebar").style.display = "none";
//         document.querySelector(".navbar__toggle-btn").innerHTML = "&#9776;";
//     }
// };




// document.addEventListener("DOMContentLoaded", function () {
//     const sidebar = document.getElementById("sidebar");
//     const toggleBtn = document.getElementById("toggleSidebarBtn");
//     const sidebarLinks = document.querySelectorAll(".sidebar-link");
  
//     // Function to toggle the sidebar
//     function toggleSidebar() {
//       sidebar.classList.toggle("open");
//     }
  
//     // Close sidebar function
//     function closeSidebar() {
//       sidebar.classList.remove("open");
//     }
  
//     // Toggle the sidebar on button click
//     toggleBtn.addEventListener("click", toggleSidebar);
  
//     // Close the sidebar when a link is clicked
//     sidebarLinks.forEach(link => {
//       link.addEventListener("click", function () {
//         closeSidebar();
//       });
//     });
//   });
  