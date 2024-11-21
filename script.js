// Script for Back to Top button functionality
const backToTopButton = document.getElementById("backToTop");

// Show/hide the back-to-top button when scrolling
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
});

// Scroll smoothly to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
