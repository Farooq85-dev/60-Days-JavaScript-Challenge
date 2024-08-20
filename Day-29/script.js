//getComputedStyle(element)
// It returns an object and it is used to check the applied css on element.

let heading = document.getElementById("heading");
let cssOnHeading = window.getComputedStyle(heading);
console.log(cssOnHeading.backgroundColor);
