// Animate the upper bar
gsap.from(".upper-bar", {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power3.in",
});

// Animate the left-upper-bar
gsap.from(".left-upper-bar h3", {
  duration: 1,
  x: -100,
  opacity: 0,
  delay: 0.5,
  ease: "power3.in",
});

// Animate the right-upper-bar
gsap.from(".right-upper-bar h3", {
  duration: 1,
  x: 100,
  opacity: 0,
  stagger: 0.2,
  delay: 0.5,
  ease: "power3.in",
});

// Animate the center bar
gsap.from(".center-bar", {
  duration: 1.5,
  scale: 0.8,
  opacity: 0,
  delay: 1,
  ease: "power3.in",
});

// Animate the left-center-bar
gsap.from(".left-center-bar h3", {
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  delay: 1.2,
  ease: "power3.in",
});

// Animate the center-center-bar image
gsap.from(".center-center-bar img", {
  duration: 1.5,
  scale: 0.5,
  opacity: 0,
  delay: 1.5,
  ease: "power3.in",
});

// Animate the right-center-bar
gsap.from(".right-center-bar h3", {
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  delay: 1.5,
  ease: "power3.in",
});

gsap.from(".right-center-bar p", {
  duration: 1,
  y: 20,
  opacity: 0,
  delay: 2,
  ease: "power3.in",
});

// Animate the bottom bar
gsap.from(".bottom-bar", {
  duration: 1.5,
  y: 100,
  opacity: 0,
  delay: 2.5,
  ease: "power3.in",
});

// Animate the left-bottom-bar
gsap.from(".left-bottom-bar h3", {
  duration: 1,
  x: -50,
  opacity: 0,
  stagger: 0.2,
  delay: 2.5,
  ease: "power3.in",
});

// Animate the right-bottom-bar
gsap.from(".right-bottom-bar", {
  duration: 1,
  x: 50,
  opacity: 0,
  delay: 3,
  ease: "power3.in",
});

gsap.to("#page2 h1", {
  transform: "translateX(-200%)",
  scrollTrigger: {
    scroller: "body",
    trigger: "#page2",
    markers: true,
    scrub: 2,
    pin: true,
  },
});
