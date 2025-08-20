// Mobile menu toggle
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Social icon links
document.querySelector(".fa-github").addEventListener("click", () => {
  window.open("https://github.com/YOUR_GITHUB_USERNAME", "_blank");
});

document.querySelector(".fa-linkedin").addEventListener("click", () => {
  window.open("https://linkedin.com/in/YOUR_LINKEDIN_USERNAME", "_blank");
});

// Contact button scroll
document.querySelectorAll(".btn").forEach(btn => {
  if (btn.textContent.includes("Contact")) {
    btn.addEventListener("click", () => {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
  }
});

// Contact form simple JS
const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    statusMsg.textContent = "⚠️ Please fill in all fields.";
    statusMsg.style.color = "red";
    return;
  }

  // If everything is okay
  statusMsg.textContent = "✅ Thank you, your message has been sent!";
  statusMsg.style.color = "green";

  // Clear form after submit
  form.reset();
});


