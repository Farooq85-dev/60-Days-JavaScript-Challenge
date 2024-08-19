// Programmers use timing events to delay the execution of certain code, or to repeat code at a specific interval.
// setTimeOut
/* setTimeout() is used to delay the execution of the passed function by a specified amount of time.*/

let number = document.getElementById("number");

// let timeoutId = setTimeout(() => {
//   number.innerText = "Three Seconds are up.";
//   console.log("Three Seconds are up.");
// }, 3000);

// const clearTimer = () => {
//   clearTimeout(timeoutId);
//   console.log("Time is cleared!");
// };

// let clearTimeOut = document.getElementById("clearTimeOut");

// let counter = 0;
// const intervalTimer = setInterval(() => {
//   counter++;
//   number.innerText = counter;
// }, 1000);

// const intervalclear = () => {
//   clearInterval(intervalTimer);
// };

// clearTimeOut.addEventListener("click", intervalclear);

// clearTimeout and clearInterval
/*
There are also corresponding native functions to stop the timing events: clearTimeout() and clearInterval().*/

/* For clarity of your code, you should always match clearTimeout() to setTimeout() and clearInterval() to setInterval().

To stop a timer, call the corresponding clear function and pass it the timer ID variable that matches the timer you wish to stop. The syntax for clearInterval() and clearTimeout() are the same.*/
