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
  

document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.getElementById('options');
    const overlay = document.getElementById('overlay');
    const overlayText = document.getElementById('overlay-text');
    const closeButton = document.getElementById('close-overlay');
  
    selectElement.addEventListener('change', function () {
      const selectedOption = selectElement.options[selectElement.selectedIndex].text;
      if (selectedOption) { // Only show overlay if an option is selected
        overlayText.textContent = selectedOption;
        overlay.classList.remove('hidden'); // Show the overlay
      }
    });
  
    closeButton.addEventListener('click', function () {
      overlay.classList.add('hidden'); // Hide the overlay
    });
  });