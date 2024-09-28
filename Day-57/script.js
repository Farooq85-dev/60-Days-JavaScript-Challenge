// Question 31:- how to empty an array in jvascript?
const numbers = [1, 2, 3, 56, 2, 60];
numbers.length = 0;
console.log(numbers);

// Question 32:- Duplicate an array.

function isInteger(value) {
  if (value % 1 === 0) {
    return "Integer";
  } else {
    return "Not Integer";
  }
}
console.log(isInteger(12));

// Question 33:- How you check whether a number is integer or not?
function duplicate(arr) {
  return arr.concat(arr);
}
console.log(duplicate([6, 7, 8]));

// Question 34:- Write a function to return a passed string value in alphabatical order?
function toAlphabaticalOrder(value) {
  return value.split("").sort().join("");
}
console.log(toAlphabaticalOrder("Farooq"));

// Question 35:- Write a function that accept a string and return all string with uppercase letter of every word?
function upperCs(value) {
  const str = value.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  return str.join(" ");
}
console.log(upperCs("i am Farooq"));

// Question 36:- Write a function that accept a string and return how many times a specific letter comes in?
function howMuch(value) {
  let occurrence = {};

  value.split("").forEach(function (letter) {
    if (occurrence.hasOwnProperty(letter) === false) {
      occurrence[letter] = 1;
    } else {
      occurrence[letter]++;
    }
  });

  return occurrence;
}

console.log(howMuch("Hello My name is Farooq"));

