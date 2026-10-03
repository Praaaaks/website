const navbar = document.querySelector(".navbar");

let lastScrollY = window.scrollY;
const scrollThreshold = 80;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Don't do anything for very small movements
    if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) {
        return;
    }

    // Always show navbar at the very top
    if (currentScrollY <= 0) {
        navbar.classList.remove("navbar-hidden");
    }
    // Scrolling down
    else if (currentScrollY > lastScrollY) {
        navbar.classList.add("navbar-hidden");
    }
    // Scrolling up
    else {
        navbar.classList.remove("navbar-hidden");
    }

    lastScrollY = currentScrollY;
});