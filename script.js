// Mobile Menu
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// Scroll Reveal
const elements = document.querySelectorAll(".fade-up");

function revealOnScroll() {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
