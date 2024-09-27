// Question 26:- Create a function that takes a string and returns it reversed.
function reverseKaro(input) {
  return input.split("").reverse("").join("");
}
console.log(reverseKaro("Hello!"));

// Question 27:- Write a function to remove all duplicate values from an array without using Set.
function removeDuplicates(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log(arrayWithoutDuplicates);

// Question 28:- Create a function that flattens a nested array of any depth.
function flatten(nestedArray) {
  let flatArray = [];
  nestedArray.forEach((item) => {
    if (Array.isArray(item)) {
      flatArray = flatArray.concat(flatten(item));
    } else {
      flatArray.push(item);
    }
  });

  return flatArray;
}
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flattenedArray = flatten(nestedArray);
console.log(flattenedArray);

// Question 29:- Create a function that finds the second largest number in an array.
function findSecondLargest(arr) {
  if (arr.length < 2) {
    return console.log("Array must contain at least two numbers.");
  }

  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }

  if (second === -Infinity) {
    throw new Error(
      "There is no second largest number (all elements may be the same)."
    );
  }

  return second;
}
const numbers = [3, 5, 1, 4, 2, 10, 21];
console.log(findSecondLargest(numbers));

// Question 30:- Create a function that finds the second largest number in an array.
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }

  return clonedObj;
}

const original = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "gaming"],
  address: {
    city: "Wonderland",
    zip: 12345,
  },
};
const cloned = deepClone(original);
console.log(cloned);
