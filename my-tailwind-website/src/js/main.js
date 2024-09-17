// Add your JavaScript code here
// You can add interactivity and functionality to your website using JavaScript

// Example code: Toggle a class on click
const button = document.querySelector('.toggle-button');
const element = document.querySelector('.toggle-element');

button.addEventListener('click', () => {
  element.classList.toggle('active');
});