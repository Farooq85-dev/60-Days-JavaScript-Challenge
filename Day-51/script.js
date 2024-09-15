const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");

let tl = gsap.timeline();
tl.to(".sidebar", {
  left: 0,
  duration: 2,
});

tl.to(".sidebar-items", {
  x: 10,
  ease: "circ.out",
  duration: 1,
});

tl.pause();

openMenu.addEventListener("click", () => {
  tl.play();
});

closeMenu.addEventListener("click", () => {
  tl.reverse();
});
