// Select the custom cursor and all buttons
const cursor = document.querySelector(".cursor");

// GSAP Animation for Navbar
gsap.from(".navbar", {
  y: -200, // Start position above the viewport
  duration: 4, // Duration of the animation
  ease: "bounce.out", // Bounce effect on entry
  delay: 0.2, // Optional delay before starting animation
});

// GSAP Animation for Hero Section
gsap.from(".hero", {
  y: -600, // Start position above the viewport
  duration: 4, // Duration of the animation
  ease: "bounce.out", // Bounce effect on entry
  delay: 0.5, // Optional delay before starting animation
});

// Move the cursor with GSAP
document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    duration: 0.1,
    x: e.clientX,
    y: e.clientY,
    ease: "power3.out",
  });
});
