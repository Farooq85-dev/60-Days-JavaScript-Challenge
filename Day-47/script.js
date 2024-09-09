/* ------- GSAP ------- */

// GSAP allows you to effortlessly animate anything JS can touch. Delivering silky-smooth performance and unmatched support so you can focus on the fun stuff.

gsap.from(".top-bar svg", {
  duration: 1.5,
  opacity: 0,
  y: -50,
  stagger: 0.2,
  ease: "bounce",
});

gsap.from(".center-bar span", {
  duration: 1.5,
  opacity: 0,
  scale: 0.5,
  ease: "bounce",
});

gsap.from(".center-bar button", {
  duration: 1,
  opacity: 0,
  x: 100,
  delay: 1,
  ease: "bounce",
});

gsap.from(".bottom-bar span, .bottom-bar svg", {
  duration: 1,
  opacity: 0,
  y: 50,
  delay: 1.5,
  stagger: 0.2,
  ease: "bounce",
});
