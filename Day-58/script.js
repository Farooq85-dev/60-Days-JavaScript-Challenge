// Question 38:- Loop an array and all members of it?
let arr = [5, 51, 4, 5, 4, 18, 4, 56, 6, 4];
let sum = 0;
arr.map((num) => {
  sum = sum + num;
});
console.log(sum);

// Question 39:- Loop an array that contains both letter and integer and add only integers?
let mixed = ["Arfan", 1, "Farooq", "Ahmed", 1, 5, 5];
let sum1 = 0;
mixed.map((num) => {
  if (typeof num === "number") {
    sum1 = sum1 + num;
  }
});

console.log(sum1);

// Question 40:- Loop an array of object and remove those man whoose payment is unpaid?
let students = [
  {
    id: 1001,
    name: "Farooq",
    status: "paid",
  },
  {
    id: 1002,
    name: "Fahad",
    status: "unpaid",
  },
  {
    id: 1003,
    name: "Faiq",
    status: "unpaid",
  },
  {
    id: 1004,
    name: "Faizan",
    status: "paid",
  },
];

let removeUnpaid = students.filter((student) => student.status !== "unpaid");
console.log(removeUnpaid);

// Question 41:- How can we clone an array using loop?
let arr1 = [1, 2, 591, 96, 26, 4, 6, 4];
let arr2 = [];
arr1.map((item) => {
  return arr2.push(item);
});
console.log(arr2);

// Question 42:- Write a function that accept a value and return its type?
function hello(str) {
  return typeof str;
}
console.log(hello("Hello"));

// Question 42:- Write a function that accept a two argument one is array and second is the n number and print the array on the base of number from first?
function base(arr, n = 1) {
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr);
    }
  } else {
    console.log("Apne ziada demand rakhi hy!");
  }
}
base([1, 2, 56, 65, 6], 10);

// Question 43:- Write a function that accept a two argument one is array and second is the n number and print the array on the base of number from last?
function base(arr, n = 1) {
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr[arr.length - 1 - i]);
    }
  } else {
    console.log("Apne ziada demand rakhi hy!");
  }
}
base([1, 2, 56, 65, 6], 2);
