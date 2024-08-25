//IIFE Stand For Immediately Invoked Function Expression
// IIFE is also known as Self Executing Anonymous Function

(function Hello() {
  return console.log("Hello World!");
})();

(async () => {
  return console.log("Hello World!");
})();

// Use Cases:-
// Avoid polluting the global namespace
// If you don't use the code again in your application. Then, IIFE comes here.
