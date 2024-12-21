// JavaScript to handle mobile menu toggle and sidebar visibility
// let showMobileMenu = false;
// let showSidebar = false;
// navbar.js
// function handleMobileMenuToggle() {
//     const linksWrapper = document.querySelector('.navbar__links__wrapper');
//     linksWrapper.classList.toggle('show-mobile-menu');
// }

// document.addEventListener('DOMContentLoaded', function () {
//     // Select all main links with submenus
//     const mainLinks = document.querySelectorAll('.navbar__link');

//     mainLinks.forEach(link => {
//         link.addEventListener('click', function () {
//             // Remove active class from all links
//             mainLinks.forEach(item => item.classList.remove('active'));
//             // Toggle active class on the clicked link
//             this.classList.toggle('active');
//         });
//     });
// });



// // Optional: If you have a Sidebar that opens, you can add this function as well
// const toggleSidebar = () => {
//     showSidebar = !showSidebar;
//     const sidebar = document.querySelector('.sidebar'); // Assume sidebar has a class of "sidebar"
    
//     if (showSidebar) {
//         sidebar.style.display = 'block';
//     } else {
//         sidebar.style.display = 'none';
//     }
// };

// // Scroll event to change background color of the navbar when scrolling
// window.addEventListener('scroll', () => {
//     const navbar = document.querySelector('.navbar');
//     const scrollPosition = window.scrollY;
    
//     if (scrollPosition > 0) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });



document.addEventListener('DOMContentLoaded', () => {
    let lastScrollY = window.scrollY;
    const preheader = document.querySelector('.preheader');
    const navbar = document.querySelector('.navbar');
  
    if (preheader && navbar) {
      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
  
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          preheader.classList.add('hidden');
          navbar.classList.add('top');
        } else {
          // Scrolling up
          preheader.classList.remove('hidden');
          navbar.classList.remove('top');
        }
  
        lastScrollY = currentScrollY;
      });
    } else {
      console.error('Preheader or Navbar element not found in the DOM.');
    }
  });




// // Get references to the toggle button, navbar links, and submenus
// const toggleButton = document.getElementById('sidebar-toggle');
// const navbarLinks = document.querySelector('.navbar__links__wrapper');
// const subMenus = document.querySelectorAll('.markets__submenu');
// const subSubMenus = document.querySelectorAll('.sub-submenu');

// // Toggle menu visibility when the button is clicked
// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('open'); // Toggle the display of the navbar
// });

// // Handle submenu toggle for mobile
// subMenus.forEach(subMenu => {
//   subMenu.addEventListener('click', () => {
//     // Close all other submenus and sub-submenus
//     subMenus.forEach(menu => menu !== subMenu && (menu.style.display = 'none'));
//     subSubMenus.forEach(subSubMenu => subSubMenu !== subMenu && (subSubMenu.style.display = 'none'));

//     // Toggle the clicked submenu
//     const subSubMenu = subMenu.querySelector('.sub-submenu');
//     subSubMenu.style.display = subSubMenu.style.display === 'block' ? 'none' : 'block';
//   });
// });

// // Handle submenu fade-in and fade-out with delay
// subMenus.forEach(subMenu => {
//   const subSubMenu = subMenu.querySelector('.sub-submenu');

//   if (subSubMenu) {
//     // Show the subsubmenu when hovering over the submenu link
//     subMenu.addEventListener('mouseenter', () => {
//       subSubMenu.style.display = 'block';
//       subSubMenu.style.opacity = '1';
//       subSubMenu.style.transform = 'translateY(0)';

//       // Clear any previous fade-out timer to keep it visible
//       if (subSubMenu.fadeTimeout) {
//         clearTimeout(subSubMenu.fadeTimeout);
//       }
//     });

//     // Start fade-out process with a delay when mouse leaves the submenu link
//     subMenu.addEventListener('mouseleave', () => {
//       subSubMenu.fadeTimeout = setTimeout(() => {
//         subSubMenu.style.opacity = '0'; // Start fading out
//         subSubMenu.style.transform = 'translateY(-10px)'; // Add transition for smooth fading
//         setTimeout(() => {
//           subSubMenu.style.display = 'none'; // Hide completely after fade-out
//         }, 2000); // Wait for fade-out animation to finish
//       }, 5000); // Keep it visible for 3 seconds before fading out
//     });

//     // Prevent fade-out while hovering over the subsubmenu
//     subSubMenu.addEventListener('mouseenter', () => {
//       if (subSubMenu.fadeTimeout) {
//         clearTimeout(subSubMenu.fadeTimeout);
//       }
//       subSubMenu.style.opacity = '1';
//       subSubMenu.style.transform = 'translateY(0)';
//     });

//     // Start fade-out process with a delay when mouse leaves the subsubmenu
//     subSubMenu.addEventListener('mouseleave', () => {
//       subSubMenu.fadeTimeout = setTimeout(() => {
//         subSubMenu.style.opacity = '0'; // Start fading out
//         subSubMenu.style.transform = 'translateY(-10px)'; // Add transition for smooth fading
//         setTimeout(() => {
//           subSubMenu.style.display = 'none'; // Hide completely after fade-out
//         }, 2000); // Wait for fade-out animation to finish
//       }, 5000); // Keep it visible for 3 seconds before fading out
//     });
//   }
// });
