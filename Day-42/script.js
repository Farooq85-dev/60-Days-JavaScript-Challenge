/* ------- Rest An Spread Operator ------- */

/*
JavaScript uses three dots (...) for both the rest and spread operators. But these two operators are not the same.*/

/*
Spread Operator(`…`): The spread operator(…) is used to expand or spread elements from an iterable (such as an array, string, or object) into individual elements.
*/

/* ------- Some Use Cases Of Rest Operator ------- */

// Copy
const group1 = ["Ahmed", "Azam", "Asad"];
const copyOfGroup1 = [...group1];
console.log(copyOfGroup1);

// Merge
const group2 = [1, 2, 3, 5];
const group3 = [6, 56, 86, 4, 8];
const combine = [...group2, ...group3];
console.log(combine);
