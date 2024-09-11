// GSAP animations for the navbar icon
const menuIcon = document.querySelector(".navbar .icon.icon-tabler-menu-deep");
const logo = document.querySelector(".left-bar h3");
// GSAP animations for the hero section buttons
const appStoreButton = document.querySelector(".hero-btn button:first-child");
const googlePlayButton = document.querySelector(".hero-btn button:last-child");

gsap.fromTo(
  menuIcon,
  { scale: 1, rotation: 0 },
  {
    scale: 1.2,
    rotation: 360,
    duration: 0.6,
    ease: "power2.out",
    paused: true,
  }
);
gsap.fromTo(
  logo,
  { scale: 1, rotation: 0 },
  {
    scale: 1.2,
    rotation: 360,
    duration: 0.6,
    ease: "power2.out",
    paused: true,
  }
);

menuIcon.addEventListener("mouseover", () =>
  gsap.to(menuIcon, {
    scale: 1.2,
    rotation: 360,
    duration: 0.6,
    ease: "power2.out",
  })
);
logo.addEventListener("mouseover", () =>
  gsap.to(logo, {
    scale: 1.2,
    rotation: 360,
    duration: 0.6,
    ease: "power2.out",
  })
);

menuIcon.addEventListener("mouseleave", () =>
  gsap.to(menuIcon, {
    scale: 1,
    rotation: 0,
    duration: 0.6,
    ease: "power2.out",
  })
);
logo.addEventListener("mouseleave", () =>
  gsap.to(logo, {
    scale: 1,
    rotation: 0,
    duration: 0.6,
    ease: "power2.out",
  })
);

gsap.fromTo(
  appStoreButton,
  { scale: 1 },
  {
    scale: 1.1,
    duration: 0.4,
    ease: "power1.out",
    paused: true,
  }
);
appStoreButton.addEventListener("mouseover", () =>
  gsap.to(appStoreButton, { scale: 1.1, duration: 0.4, ease: "power1.out" })
);
appStoreButton.addEventListener("mouseleave", () =>
  gsap.to(appStoreButton, { scale: 1, duration: 0.4, ease: "power1.out" })
);

gsap.fromTo(
  googlePlayButton,
  { scale: 1 },
  {
    scale: 1.1,
    duration: 0.4,
    ease: "power1.out",
    paused: true,
  }
);
googlePlayButton.addEventListener("mouseover", () =>
  gsap.to(googlePlayButton, { scale: 1.1, duration: 0.4, ease: "power1.out" })
);
googlePlayButton.addEventListener("mouseleave", () =>
  gsap.to(googlePlayButton, { scale: 1, duration: 0.4, ease: "power1.out" })
);

gsap.from(".hero h2, .hero p", {
  opacity: 0,
  y: 30,
  stagger: 0.8,
  duration: 2,
  ease: "power2.out",
});

let wire = document.querySelector(".wire");

let initialPath = "M 10 100 Q 500 100 990 100";
let finalPath = "M 10 100 Q 500 100 990 100";

wire.addEventListener("mousemove", (details) => {
  initialPath = `M 10 100 Q ${details.x} ${details.y} 990 100`;
  gsap.to(".wire>svg>path", {
    attr: { d: initialPath },
    duration: 0.2,
    ease: "power3.out",
  });
});

wire.addEventListener("mouseleave", (details) => {
  gsap.to(".wire>svg>path", {
    attr: { d: finalPath },
    duration: 0.8,
    ease: "elastic.out(1,0.2)",
  });
});
