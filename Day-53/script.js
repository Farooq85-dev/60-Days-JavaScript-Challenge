// Animate the navbar
gsap.from(".navbar", {
  y: -100,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
});

gsap.from(".hero h2", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power2.out",
});

gsap.from(".hero h5", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.4,
  ease: "power2.out",
});

gsap.from(".hero p", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.6,
  ease: "power2.out",
});

gsap.from(".start-btn", {
  scale: 0,
  opacity: 0,
  duration: 0.8,
  delay: 0.8,
  ease: "back.out(1.7)",
});
