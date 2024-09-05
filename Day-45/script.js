/* ------- Async Await JavaScript ------- */

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.log(error));

// const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const json = await response.json();
// console.log(json);

// The Await Keyword

/*
The await keyword basically makes JavaScript wait until the Promise object is resolved or rejected. Instead of having to use the callback pattern inside the then() method, you can assign the fulfilled promise into a variable like this:

The await keyword is placed before the call to a function or variable that returns a promise. It makes JavaScript wait for the promise object to settle before running the code in the next line.

This error occurs because the await keyword must be used inside an asynchronous function or a module.
*/

// The Async Keyword

async function runProcess() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  console.log(json);
}

runProcess();

// How to Handle Errors in Async/Await

// To handle an error that might occur from the async/await syntax, you can use the try/catch block to catch any rejection from your promise.

async function runProcess() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

runProcess();

// How to Use Async/Await in IIFE and Arrow Functions

/*
An Immediately Invoked Function Expression (IIFE) is a technique used to execute a function immediately as soon as you define it.
Unlike regular functions and variables, IIFEs will be removed from the running process once they are executed. Aside from the standard function, you can also make an asynchronous IIFE. This is useful when you need to run the asynchronous function only once:*/

// (async function () {
//   const alog = `Hy I am a Async/await!`;
//   return await alog;
// }());

// How JavaScript Promises Work – Tutorial for Beginners

let p = new Promise((resolve, reject) => {
  let isTrue = true;
  if (isTrue) {
    resolve("Promise resolved");
  } else {
    reject("Promise rejected");
  }
});
