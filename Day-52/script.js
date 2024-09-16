const author = document.querySelector(".author");
const authorText = author.textContent;
const fullStack = document.querySelector(".full-stack");
const fullStackText = fullStack.textContent;

function splitM(a, b) {
  let clutter = "";
  const splitText = b.split("");
  let halfValue = splitText.length / 2;

  splitText.forEach((elem, index) => {
    if (index < halfValue) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }
  });
  a.innerHTML = clutter;
}

splitM(author, authorText);

function splitF(a, b) {
  let clutter = "";
  const splitText = b.split("");
  let halfValue = splitText.length / 2;

  splitText.forEach((elem, index) => {
    if (index < halfValue) {
      clutter += `<span class="c">${elem}</span>`;
    } else {
      clutter += `<span class="d">${elem}</span>`;
    }
  });
  a.innerHTML = clutter;
}

splitF(fullStack, fullStackText);

// GSAP Animations
gsap.from(".author span.a", {
  y: 80,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});

gsap.from(".author span.b", {
  y: 80,
  opacity: 0, // Adding opacity here for consistency with 'a' class
  duration: 0.5,
  stagger: 0.3, // Change to positive value if you want them to animate in sequence
});

gsap.from(".full-stack span.c", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 1,
});

gsap.from(".full-stack span.d", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 1,
});
