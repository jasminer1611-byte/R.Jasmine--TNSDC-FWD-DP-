// Display current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form handling
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your message, " + document.getElementById("name").value + "!");
  this.reset();
});