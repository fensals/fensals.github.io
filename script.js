// Verification that script is loaded
console.log("Femi Aleyemi Portfolio Loaded Successfully.");

// Optional: Add a simple fade-in effect when elements appear
document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Apply to tech boxes
    document.querySelectorAll('.tech-box').forEach(box => {
        box.style.opacity = "0";
        box.style.transform = "translateY(20px)";
        box.style.transition = "all 0.5s ease-out";
        observer.observe(box);
    });
});
