// A function is a block of reusable code written to perform a specific task.

/*Basically, function consists of the following:
Function keyword
The name of the function
Parentheses (which can take in parameters, or also be empty)
The body of the function (wrapped in curly braces).*/

//A parameter is a variable you pass to a function when you declare it.
// An argument, on the other hand, is the value equivalent to the parameter that you pass to the function when you call it.

//Function Declaration
function sayHello() {
  console.log("Hello world");
}
sayHello();

//Function Expressions
let helloWorld = function () {
  console.log("Hello World!");
};
helloWorld();

// If the function body within the curly braces contains only a single statement, then the braces can be omitted. An arrow function with curly braces must include the return keyword.
let name = (name1) => {
  return name1;
};

console.log(name("Muhammad Farooq"));

// IFE is another function expression notation (explicitly an anonymous function) that works in isolation and is independent of any other code. It gets invoked immediately where it is defined.
(function () {
  console.log("Hello World!");
})();

// A use case of IIFE would be to enclose a variable that you may likely not use again inside your code. So, as soon as the function is executed, the variable ceases to exist.

const hy = function () {
  console.log("Hello World!");
};

hy();
