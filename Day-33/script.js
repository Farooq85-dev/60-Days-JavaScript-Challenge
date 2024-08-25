/*What exactly is Scope?
Scope refers to the area where an item (such as a function or variable) is visible and accessible to other code.
*/

// Note:
/*
Scope means area, space, or region.
Global scope means global space or a public space.
Local scope means a local region or a restricted region.
*/

// What is Lexical Scope in JavaScript?
// Lexical scope is the definition area of an expression.

function Outer() {
  const name = "Muhammad";
  function inner() {
    console.log(name);
  }
  inner();
}

Outer();
