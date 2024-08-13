document.addEventListener('DOMContentLoaded', () => {
    const openMenuButton = document.getElementById('open-menu');
    const closeMenuButton = document.getElementById('close-menu');
    const navSection = document.querySelector('.nav-section');
  
    openMenuButton.addEventListener('click', () => {
      navSection.classList.add('show');
      openMenuButton.classList.add('hidden');
      closeMenuButton.classList.remove('hidden');
    });
  
    closeMenuButton.addEventListener('click', () => {
      navSection.classList.remove('show');
      openMenuButton.classList.remove('hidden');
      closeMenuButton.classList.add('hidden');
    });
  });

  
  document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const closeOverlayButton = document.getElementById('close-overlay');
    const options = document.getElementById('options');
  
    // Function to show overlay
    function showOverlay(title) {
      overlayTitle.textContent = title; // Set the title of the overlay
      overlay.classList.remove('hidden'); // Show the overlay
    }
  
    // Function to hide overlay
    function hideOverlay() {
      overlay.classList.add('hidden'); // Hide the overlay
    }
  
    // Event listener for dropdown change
    options.addEventListener('change', function () {
      const selectedItem = options.value;
      const itemTitles = {
        item1: 'Item 1',
        item2: 'Item 2',
        item3: 'Item 3'
      };
  
      if (selectedItem) {
        showOverlay(itemTitles[selectedItem]);
      }
    });
  
    // Event listener for close button
    closeOverlayButton.addEventListener('click', function () {
      hideOverlay();
    });
  
    // Optional: Close overlay if user clicks outside of the overlay-content
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        hideOverlay();
      }
    });
  });
  