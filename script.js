// ================================
// MOBILE MENU TOGGLE
// ================================
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


// ================================
// SMOOTH SCROLLING FOR NAVIGATION
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// ================================
// HEADER BACKGROUND ON SCROLL
// ================================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.style.background = 'rgba(15, 23, 42, 1)';
    header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
  } else {
    header.style.background = 'rgba(15, 23, 42, 0.95)';
    header.style.boxShadow = 'none';
  }
});


// ================================
// ACTIVE NAVIGATION HIGHLIGHT
// ================================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
});


// ================================
// CONTACT FORM HANDLING
// ================================
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Simple validation
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    formStatus.textContent = 'Please fill in all fields!';
    formStatus.style.color = '#ef4444';
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formStatus.textContent = 'Please enter a valid email address!';
    formStatus.style.color = '#ef4444';
    return;
  }
  
  // Simulate form submission
  formStatus.textContent = 'Sending message...';
  formStatus.style.color = '#f59e0b';
  
  // Simulate API call with setTimeout
  setTimeout(() => {
    formStatus.textContent = 'Message sent successfully! ✓';
    formStatus.style.color = '#10b981';
    
    // Reset form
    contactForm.reset();
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      formStatus.textContent = '';
    }, 5000);
  }, 1500);
  
  // In a real application, you would send the data to a server here:
  // fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ name, email, message })
  // })
  // .then(response => response.json())
  // .then(data => {
  //   formStatus.textContent = 'Message sent successfully!';
  //   contactForm.reset();
  // })
  // .catch(error => {
  //   formStatus.textContent = 'Error sending message. Please try again.';
  // });
});


// ================================
// SOCIAL MEDIA LINKS
// ================================
const socialIcons = document.querySelectorAll('.social i');

// Add your social media URLs here
const socialLinks = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername'
};

socialIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    if (icon.classList.contains('fa-github')) {
      window.open(socialLinks.github, '_blank');
    } else if (icon.classList.contains('fa-linkedin')) {
      window.open(socialLinks.linkedin, '_blank');
    }
  });
  
  // Add pointer cursor
  icon.style.cursor = 'pointer';
});


// ================================
// BUTTON FUNCTIONALITY
// ================================
// Download CV Button
const downloadCVBtn = document.querySelector('.info-box .btn-group .btn:first-child');
if (downloadCVBtn) {
  downloadCVBtn.addEventListener('click', () => {
    // Replace 'path/to/your/cv.pdf' with your actual CV file path
    const cvPath = 'path/to/your/cv.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Sanyu_Gloria_CV.pdf';
    link.click();
    
    // If you don't have a CV file yet, show a message
    alert('CV download will be available soon!');
  });
}

// Contact Button (scroll to contact section)
const contactBtn = document.querySelector('.info-box .btn-group .btn:last-child');
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth'
    });
  });
}

// Visit GitHub Button
const visitGithubBtn = document.querySelector('.visit-btn');
if (visitGithubBtn) {
  visitGithubBtn.addEventListener('click', () => {
    window.open(socialLinks.github, '_blank');
  });
}

// Professional Section Buttons
const professionalBtns = document.querySelectorAll('.professional-card .btn');
professionalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.textContent.includes('Live Demo')) {
      alert('Live demo will be available soon!');
      // window.open('your-demo-url', '_blank');
    } else if (btn.textContent.includes('Github Repo')) {
      alert('GitHub repository will be available soon!');
      // window.open('your-repo-url', '_blank');
    }
  });
});


// ================================
// SCROLL REVEAL ANIMATION
// ================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for scroll animation
const animateElements = document.querySelectorAll('.grid-card, .professional-card, .section-title');
animateElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});


// ================================
// TYPING EFFECT FOR TITLE
// ================================
const titleElement = document.querySelector('.info-box h1');
if (titleElement) {
  const text = titleElement.textContent;
  titleElement.textContent = '';
  let index = 0;
  
  function typeWriter() {
    if (index < text.length) {
      titleElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  
  // Start typing effect when page loads
  setTimeout(typeWriter, 500);
}


// ================================
// CONSOLE MESSAGE
// ================================
console.log('%c👋 Welcome to Sanyu Gloria\'s Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the GitHub repo!', 'color: #8b5cf6; font-size: 14px;');
