/* ------- JavaScript Concurrency Model and Event Loop ------- */

// Javascript runtime is single threaded which means that it can execute one piece of code at a time. In order to understand the concurrency model and the event loop in Javascript we have to first get to know some common terms that are associated with it.

// The call stack

// A call stack is a simple data structure that records where in the code we are currently. So if we step into a function that is a function invocation it is pushed to the call stack. When we return from a function it is popped out of the stack.

//Summary:-  whenever a function is invoked it is pushed into the call stack where it executes. Finally when the function is done with its execution and is returning either implicitly or explicitly it will be popped off the stack

// The call stack just records at what point in time which function was executing. And it keeps track of which function is currently executing.

// Some more terms are introduced here, so let's go through them:

// Heap: It’s mostly the place where objects are allocated.

// Callback Queue: It’s a data structure that stores all the callbacks. Since it’s a queue, the elements are processed based on FIFO which is First in First Out.

// Event Loop: This is where all these things come together. The event loop simply checks the call stack, and if it is empty (which means there are no functions in the stack) it takes the oldest callback from the callback queue and pushes it into the call stack which eventually executes the callback.

// Let’s understand this with a code example:

console.log("hi");

setTimeout(function () {
  console.log("freecodeCamp");
}, 5000);

console.log("JS");

/*
When the first line executes it’s a console.log(). This is a function invocation which means that this function is pushed into the call stack where it executes printing ‘hi’ to the console. Finally it’s returned and is popped off the stack.

Then when the runtime goes to execute setTimeout() it knows that this is a web API. Therefore it gives it off to the browser to handle its execution. The browser starts the timer and then JS runtime pops the setTimeout() out of the stack. It encounters another console.log() invocation and so it pushes this into the call stack, the message ‘JS’ is logged into the console, and then it’s finally returned. Then the last console.log() is popped off the stack. Now the call stack is empty.

Meanwhile while all of this was going on the timer finishes. When 5 seconds have elapsed the browser goes ahead and pushes the callback function into the callback queue.

Next the event loop checks if the call stack is free or not. Since it is free it takes the callback function and pushes it again back to the call stack which executes the code inside it.

Again inside the code there is a console.log() invocation so this function goes to the top of the stack executes which logs ‘freecodecamp’ into the console and finally it returns. This means it gets popped off the stack and finally the callback gets popped off the stack and we are done.*/
