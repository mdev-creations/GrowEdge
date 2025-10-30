import './style.css'
import menuIconUrl from './assets/images/menu.png';
import closeIconUrl from './assets/images/close.png';

console.log('Vite + Tailwind project running!');

// Select elements
const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
const menuIcon = document.querySelector('#menu-icon');

// Initialize with menu icon
menuIcon.src = menuIconUrl;

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');

  // Change icon
  if (menu.classList.contains('hidden')) {
    menuIcon.src = menuIconUrl;  // Hamburger
  } else {
    menuIcon.src = closeIconUrl; // Close
  }

  // Update aria-expanded for accessibility
  menuBtn.setAttribute('aria-expanded', !menu.classList.contains('hidden'));
});
