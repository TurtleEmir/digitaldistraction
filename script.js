// Mobile Navigation Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    // Toggle 'active' class on hamburger and nav menu
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// --- Optional: Add subtle scroll animations ---

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add a 'fade-in' class to elements as they scroll into view
function addFadeInAnimation() {
    const itemsToFade = document.querySelectorAll('.grid-item, .impact-card, .solutions-list li');
    
    itemsToFade.forEach(item => {
        // Simple check: if element is partially in view
        if (item.getBoundingClientRect().top < window.innerHeight - 100) {
            item.classList.add('fade-in-on-scroll');
        }
    });
}

// Add the CSS for the scroll animation to the stylesheet (this is CSS, but belongs with this JS logic)
// You should add this to your style.css file:
/*
.fade-in-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInOnScroll 0.6s ease-out forwards;
}

@keyframes fadeInOnScroll {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
*/
// Note: To keep this file purely JS, I'm adding the style dynamically.
const style = document.createElement('style');
style.innerHTML = `
    .fade-in-on-scroll {
        opacity: 0;
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        transform: translateY(20px);
    }

    .fade-in-on-scroll.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

function revealOnScroll() {
    const itemsToFade = document.querySelectorAll('.grid-item, .impact-card, .solutions-list li');
    
    itemsToFade.forEach(item => {
        if (item.getBoundingClientRect().top < window.innerHeight - 100) {
            item.classList.add('is-visible');
        }
    });
}


// Listen for scroll events
window.addEventListener('scroll', revealOnScroll);
// Run on load in case elements are already in view
document.addEventListener('DOMContentLoaded', revealOnScroll);