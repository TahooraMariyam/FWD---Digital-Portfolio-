// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact Form Functionality
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  status.style.display = "block";
  status.textContent = "⏳ Sending...";

  setTimeout(() => {
    status.textContent = "✅ Your message has been sent successfully!";
    form.reset();
  }, 1500);
});

// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();
