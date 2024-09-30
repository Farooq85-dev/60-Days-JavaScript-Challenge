// Question 44:- Write correct output of follwoing code.
// function hoist() {
//   console.log(a, b);
//   var a = "Farooq";
//   let b = "Ahmed";
// }
// hoist(); // Output will be undefined and error.

// Question 45:- Write correct output of follwoing code.
function pull() {
  c = 15;
  console.log(c);
}
let c;
pull(); // Output will be 15.

// Question 45:- Write correct output of follwoing code.
if (0) {
  function hoisting() {}
}
console.log(hoisting); // Output will be undefined.

// Question 46:- Write correct output of follwoing code.
var name = 2024;
console.log(name + 1);

// Question 47:- Write correct output of follwoing code.
const obj = {
  name: "HTML",
};
obj.name = "CSS";
console.log(obj.name);

// Question 48:- Write correct output of follwoing code.
let aes = 10 + isNaN(2) ? 0 : 20;
console.log(aes); // Output will be 0

// Question 48:- Write correct output of follwoing code.
class hello {}
console.log(typeof hello);

// Question 49:- Write correct output of follwoing code.
const arr = ["name"];
const obj1 = {};
obj1.name = "Hello";
obj1[arr] = "React";
console.log(obj1.name); // output will be React

// Question 50:- Write correct output of follwoing code.
function minus() {
  return 2 + 3;
}
var minus;
console.log(minus());
