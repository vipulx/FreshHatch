// 1. Initialize 3D Tilt Effect
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
    scale: 1.02
});

// 2. Toggle "Show More" / "Show Less"
function toggleShop() {
    const hiddenSection = document.getElementById('more-breeds');
    const btn = document.getElementById('show-more-btn');
    
    // Check if the section is currently active
    if (hiddenSection.classList.contains('active')) {
        // Hide it
        hiddenSection.classList.remove('active');
        btn.innerHTML = 'Show Complete Collection <i class="fas fa-chevron-down"></i>';
        
        // Scroll back to top of shop nicely
        document.getElementById('shop').scrollIntoView({behavior: 'smooth'});
    } else {
        // Show it
        hiddenSection.classList.add('active');
        btn.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
    }
}

// 3. Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(15, 23, 42, 0.95)';
        nav.style.padding = '15px 50px';
    } else {
        nav.style.background = 'rgba(15, 23, 42, 0.8)';
        nav.style.padding = '20px 50px';
    }
});

// 4. Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
