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
  