// Initialize AOS
AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });

// Background bubbles
function createBubbles() {
  const bgAnimation = document.getElementById('bgAnimation');
  const bubbleCount = 15;
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 100 + 50;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.top = `${Math.random() * 100}%`;
    bubble.style.animationDelay = `${Math.random() * 15}s`;
    bubble.style.animationDuration = `${Math.random() * 10 + 15}s`;
    bgAnimation.appendChild(bubble);
  }
}
createBubbles();

//mailjs
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send("service_dx7ys7d", "template_rxn4xhn", {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    }).then(
      function(response) {
        alert("✅ Message sent successfully!");
        document.getElementById("contactForm").reset();
      },
      function(error) {
        alert("❌ Failed to send message. Please try again.");
        console.log("Error:", error);
      }
    );
  });
  
  
  
  
  // Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
  } else {
    nav.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
  }
});

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backToTopButton.classList.add('active');
  else backToTopButton.classList.remove('active');
});
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
  });
});

// Timeline reveal
function revealTimelineItems() {
  document.querySelectorAll('.timeline-item').forEach(item => {
    if (item.getBoundingClientRect().top < window.innerHeight - 100) {
      item.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealTimelineItems);
window.addEventListener('load', revealTimelineItems);

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (name && email && message) {
    alert("Thank you, " + name + "! Your message has been sent successfully.");
    this.reset();
  } else {
    alert("Please fill in all fields.");
  }
});
