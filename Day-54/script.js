// Question 01:- What will be the output of the following code?
console.log(typeof null); // Object

// Question 02:- Given the array let fruits = ['apple', 'banana', 'cherry'], how would you add 'orange' to the end of the array?
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
console.log(fruits);

// Question 03:- How do you access the value of the age property from the following object?
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log("age--->", person["age"]);

// Question 04:- Write a function called multiply that takes two numbers as arguments and returns their product?
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 6));

// Question 05:- Write an if statement that checks if a variable score is greater than or equal to 50. If it is, log "Pass", otherwise log "Fail"?
let score = 20;
if (score >= 50) console.log("Pass");
else {
  console.log("Fail");
}

// Question 06:- Write a for loop that prints the numbers from 1 to 5?
for (let i = 0; i <= 5; i = i + 1) {
  console.log(i);
}

// Question 07:- Given the string let text = "Hello World", how would you convert it to uppercase?
let text = "Hello World!";
console.log(text.toUpperCase());

// Question 08:- What will be the output of the following code?
/*
let numbers = [1, 2, 3, 4];
let result = numbers.map((num) => num * 2);
//2, 4, 6, 8
*/

// Question 09:- What is the difference between a function declaration and a function expression?
// Function Expression
let greet = function () {
  return "Hello!";
};

// Function Declaration
function Hello() {
  return "Hello World!";
}

// Question 10:- What will be the output of the following code?
function testScope() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x);
  }
  console.log(x);
}
testScope(); //Output is 20, 20 due to global scope of var

// Question 11:- Rewrite the following function using an arrow function:
/*
function add(a, b) {
  return a + b;
  }
  */

const arrow = (a, b) => {
  return a + b;
};

// Question 12:- Use destructuring to assign name and age to variables.
const personAlice = { name: "Alice", age: 25 };
const { name, age } = personAlice;
console.log(name, age);

// Question 13:- What is a promise in JavaScript? Write a simple promise that resolves with the string "Success" after 1 second.
// A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

const apnaWada = new Promise((resolve, reject) => {
  resolve("Success");
  reject("Fail");
});

console.log(apnaWada);

// Question 14:- How do you add a click event listener to a button with the id myButton? Provide a simple example.
// const myButton = document.querySelector(".myButton");
// myButton.addEventListener("click", () => {
//   console.log("Clicked--->");
// });

// Question 15:- How do you add a click event listener to a button with the id myButton? Provide a simple example.
const JavaScriptObj = {
  name: "Muhammad Farooq",
  email: "famuhammd907@gmail.com",
};
const JSONObj = JSON.stringify(JavaScriptObj);
const toJs = JSON.parse(JSONObj);
console.log(JSONObj);

// Question 16:- Rewrite the following string concatenation using template literals:
/*
let name = "Bob";
let greeting = "Hello, " + name + "!";
*/
let name1 = "Bob";
let greeting = `Hello, ${name1} !`;
console.log(greeting);

// Question 17:- In the following code, what will console.log(this) output?
const obj = {
  value: 42,
  showValue: function () {
    console.log(this);
  },
};
obj.showValue();

// Question 18:- Given the array let numbers = [1, 2, 3, 4, 5], how would you create a new array containing only the even numbers?

let allnumbers = [1, 2, 3, 4, 5];
const two = allnumbers.slice(1, 2);
const four = allnumbers.slice(3, 4);
const evenNumbers = [...two, ...four];
console.log(evenNumbers);

//Question 19:- What is a closure in JavaScript? Provide a simple example demonstrating how it works.
// Closure is simply the combination of function with refrence to its sorrounding state
// In closure child has access to parent, but parent has not access to child.
function parent() {
  let name = "Ahad";
  function child() {
    return name;
  }
  name = "Muhammad";
  return child();
}
console.log(parent());

//Question 20:-  What is a higher-order function in JavaScript? Provide an example of a function that takes another function as an argument and demonstrates its usage.
let myNumbers = [1, 2, 56, 15, 4, 565, 15];
const logNumber = (num) => {
  return console.log(num);
};
myNumbers.map(logNumber);

/************* The End  **************/
