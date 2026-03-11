// script.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  
  // Home button
  const homeBtn = document.getElementById('homeBtn');
  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      window.location.href = 'index.html'; // change to your home page
    });
  }

  // About button
  const aboutBtn = document.getElementById('aboutBtn');
  if (aboutBtn) {
    aboutBtn.addEventListener('click', () => {
      window.location.href = 'about.html'; // change to your about page
    });
  }

  // Example: Button to show an alert
  const alertBtn = document.getElementById('alertBtn');
  if (alertBtn) {
    alertBtn.addEventListener('click', () => {
      alert('Button works!');
    });
  }

});