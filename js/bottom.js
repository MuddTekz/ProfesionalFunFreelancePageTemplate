document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".testimonial", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3, // Staggered animation effect
        ease: "power2.out"
    });
});
