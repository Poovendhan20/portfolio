// Initialize AOS (Animate On Scroll)
AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });

// Background bubbles animation (Requires corresponding CSS and an element with id="bgAnimation")
function createBubbles() {
    const bgAnimation = document.getElementById('bgAnimation');
    // Ensure the container exists before creating bubbles
    if (!bgAnimation) return;

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

// ----------------------------------------------------------------------
// EMAILJS INTEGRATION (Corrected Listener and IDs)
// NOTE: Ensure the EmailJS SDK is included in your HTML:
// <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

// Initialize EmailJS with your Public Key
// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("xtuuh_ljJLBMtOOib"); // YOUR PUBLIC KEY
})();

document.getElementById("contactForm")?.addEventListener("submit", function(e) { // CORRECTED: Changed 'send' to 'submit'
    e.preventDefault();

    // Fetch and validate form values
    const nameValue = document.getElementById("name")?.value.trim();
    const emailValue = document.getElementById("email")?.value.trim();
    const messageValue = document.getElementById("message")?.value.trim();

    if (!nameValue || !emailValue || !messageValue) {
        alert("Please fill in all fields (Name, Email, and Message) before sending.");
        return;
    }

    // CORRECTED: Parameter keys now match your template variables: {{name}}, {{email}}, {{message}}
    emailjs.send("service_dx7ys7d", "template_2r88zap", { 
        name: nameValue,         // Matches {{name}} in To/From Name
        email: emailValue,       // Matches {{email}} in Reply To/To Email
        message: messageValue    // Matches {{message}} in the auto-reply content
    }).then(
        function(response) {
            alert("✅ Message sent successfully! Thank you for reaching out.");
            document.getElementById("contactForm").reset();
        },
        function(error) {
            alert("❌ Failed to send message. Please check the console for details.");
            console.error("EmailJS Error:", error);
        }
    );
});


// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
        } else {
            nav.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
        }
    }
});

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');
if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) backToTopButton.classList.add('active');
        else backToTopButton.classList.remove('active');
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Smooth scroll links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Scrolls to the target element's top position, minus 70px (for a fixed navbar)
            window.scrollTo({ 
                top: target.offsetTop - 70, 
                behavior: 'smooth' 
            });
        }
    });
});

// Timeline reveal (scroll-based animation for timeline items)
function revealTimelineItems() {
    document.querySelectorAll('.timeline-item').forEach(item => {
        if (item.getBoundingClientRect().top < window.innerHeight - 100) {
            item.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealTimelineItems);
window.addEventListener('load', revealTimelineItems);