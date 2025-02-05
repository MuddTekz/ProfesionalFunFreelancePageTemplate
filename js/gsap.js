gsap.from(".hero-title", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power3.out"
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".testimonial-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3, // Adds a delay between each card animation
        ease: "power2.out"
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.to(".footer-container", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out"
    });

    gsap.from(".social-links a", {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)"
    });
});
