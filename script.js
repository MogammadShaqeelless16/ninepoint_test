document.addEventListener('DOMContentLoaded', function () {
    // Menu toggle variables
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navSection = document.querySelector('.nav-section');
  
    // Overlay and dropdown functionality
    const selectElement = document.getElementById('options');
    const overlay = document.getElementById('overlay');
    const overlayText = document.getElementById('overlay-text');
    const closeButton = document.getElementById('close-overlay');
  
    // Toggle menu
    menuIcon.addEventListener('click', function () {
      navSection.classList.remove('invisible'); // Show the menu
      menuIcon.classList.add('invisible'); // Hide the menu icon
      closeIcon.classList.remove('invisible'); // Show the close icon
    });
  
    closeIcon.addEventListener('click', function () {
      navSection.classList.add('invisible'); // Hide the menu
      closeIcon.classList.add('invisible'); // Hide the close icon
      menuIcon.classList.remove('invisible'); // Show the menu icon
    });
  
    // Handle dropdown and overlay
    selectElement.addEventListener('change', function () {
      const selectedOption = selectElement.options[selectElement.selectedIndex].text;
      if (selectedOption) {
        overlayText.textContent = selectedOption;
        overlay.classList.remove('hidden'); // Show the overlay
      }
    });
  
    closeButton.addEventListener('click', function () {
      overlay.classList.add('hidden'); // Hide the overlay
    });
  });
  