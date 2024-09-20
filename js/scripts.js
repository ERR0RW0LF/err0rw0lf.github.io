// This is the JavaScript file for the website
// Add your scripts and interactivity here
// You can enhance the functionality of the webpage using JavaScript

// Example: Change the background color of the body element
document.body.style.backgroundColor = "#000000";
document.body.style.color = "#00FF00";

input = document.getElementById("terminal-console");
// q: how can i send the input to a website so it is displayed on the website?
// a: use a form and a server

document.getElementById("terminal-form").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(input.value);
    input.value = "";
});


