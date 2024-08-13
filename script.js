document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const navSection = document.querySelector(".nav-section");
  
    const toggleMenu = () => {
      // Toggle the visibility of the icons
      menuIcon.classList.toggle("invisible");
      closeIcon.classList.toggle("invisible");
      // Toggle the active state of the nav section
      navSection.classList.toggle("active");
      navSection.classList.toggle("invisible");
    };
  
    // Add event listeners for menu and close icons
    menuIcon.addEventListener("click", toggleMenu);
    closeIcon.addEventListener("click", toggleMenu);
  });
  