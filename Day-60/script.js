// Question 51:- Explain JavaScript Closures.
/*
A closure in JavaScript is a function that has access to variables in its parent scope, even after the parent function has returned. Closures are created when a function is defined inside another function, and the inner function retains access to the variables in the outer function's scope.*/
function parent() {
  let a = 1;
  function child() {
    console.log(a);
  }
  child();
}
parent();
// They are commonly used where we want to create some private methods and variables just like C#.

// Question 52:- Difference Between == and === .
// == only check value not data type
// === check both value and data type
if (2 === 2) {
  console.log("Strict Equality Operator");
}
if ("2" == 2) {
  console.log("Double Equality Operator");
}

// Question 53:- Hoisting in JavaScript.
//Hositing in javascript is a behaviour where variable and function declararion are moved to the top of relative scope in the case , only declaration hoisted.
console.log(a); // Output will be undefined
var a = 566;

console.log(hello()); // Output will be 4
// Function in javascript are treaed as varialbe that's why we called them first class citizen.
function hello() {
  return 2 + 2;
}

// Question 54:- Event delegation.
// vent delegation is a technique in JavaScript where a single event listener is added to a parent element, which handles events triggered by its child elements.

// vent delegation improves performance by reducing the number of event listeners. Instead of adding an event listener to every child element, one event listener is added to a parent element.

// Question 55:- Promises vs async/await.
// A promise in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It is an object that allows you to attach callbacks for handling asynchronous events. Promises can be in three states: pending, resolved (fulfilled), or rejected.

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched successfully!");
  }, 2000);
});

fetchData
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// Question 56:- Prototype and Inheritance.
//   What is the prototype chain in JavaScript, and how does inheritance work using prototypes? JavaScript is a prototype-based language, meaning that objects can inherit properties and methods from other objects. Each object in JavaScript has a prototype (another object), and the object inherits properties from its prototype. This chain of objects is known as the prototype chain.

// Inheritance in JavaScript works by linking an object to another object (its prototype). You can set up inheritance using the Object.create() method or by using constructor functions.
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
const person1 = new Person("John");
person1.greet();

// Question 57:- Prototype-based vs. Class-based inheritance.
// Objects inherit directly from other objects. You define a prototype object, and new objects can be created from that prototype.

// You define a class, and objects are instantiated from that class. Inheritance works by extending classes.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
const newHello = new Animal("Dog");
newHello.speak();
