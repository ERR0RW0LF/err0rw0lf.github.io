// This is the JavaScript file for the website
// Add your scripts and interactivity here
// You can enhance the functionality of the webpage using JavaScript

// Example: Change the background color of the body element
document.body.style.backgroundColor = "#000000";
document.body.style.color = "#00FF00";

// Example: Add an event listener to a text input element
document.getElementById("terminal-console").addEventListener("input", function() {
  console.log("You entered: ", this.value);
});