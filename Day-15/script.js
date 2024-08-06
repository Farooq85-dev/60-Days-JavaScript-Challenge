// How to Create an Array in JavaScript
/* You can create an array using a literal syntax – specifying its content inside square brackets,
 with each item separated by a comma.*/

let nobleGases = ["He", "Ne", "Ar", "Kr", "Xn"];
console.log(nobleGases);

//Alternate Method

let nobleGases1 = Array("He", "Ne", "Ar", "Kr", "Xn");
console.log(nobleGases1[5]);

/*
Sparse Arrays
Sparse arrays are arrays containing empty slots. For example, if you mistype two consecutive commas when creating an array, you will end up with a sparse array:

let firstGroup = ['H', 'Li', 'Na',, 'K', 'Rb', 'Cs'];
console.log(firstGroup);
// ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs']*/

//A way to create sparse arrays
const countries = ["Pk", "IN"];
countries.length = 5;
console.log(countries);

let set1 = [1, 2, 3];
let set2 = [1, 2, 3];

let alkali = ["Li", "Na", "K", ["Muhammad Farooq"]];
let alkEarth = ["Be", "Mg", "Ca"];
// Merging two arrays with the spread operator
let metals = [...alkali, ...alkEarth];
let metalsCopy = [...metals];
console.log(metalsCopy);

function f1(first, second, third, ...others) {
  console.log(first);
  console.log(second);
  console.log(third);
  console.log(others);
}

f1("He", "Ne", "Ar", "Kr", "Xn", "Rn");

let arr = [
  {
    studentName: "Muhammad Farooq",
    className: "WAM-10",
    teacherName: "Ghous Ahmed",
  },
];
let { studentName, className } = arr[0];
console.log(studentName);

let nobleGases3 = ["He", "Ne", "Ar", "Kr", "Xn"];
let [firstRow, secondRow, FourthRow] = nobleGases3;
console.log(firstRow);

/* Valuable methods of an array */
//pop()---> remove element from the end of array
//push() ---> remove element from the beginning of array
//shift() ---> add element at the brginning of array
//unshift() ---> add element at the end of array
//splice(start,(optinal ---> count),(new value is optional)) ---> remove or add elements at specific given postion
//slice() ---> copy an entire array – or just a portion
// toString() ---> convert arrays into string
let pets = ["Dog", "Cat"];
let petsString = pets.toString();
let petsJoin = pets.join(" vs ");
console.log("petsString--->", petsString);
console.log("petsJoin--->", petsJoin);

//JSON.stringify() ---> Conert Js Object into JSON Format
let albums = [
  { artist: "Frank Zappa", title: "Apostrophe", year: 1974 },
  { artist: "Frank Zappa", title: "One Size Fits All", year: 1975 },
];
let albumsStringfy = JSON.stringify(albums);
console.log(albumsStringfy);

//includes() ---> to know whether a value is included in an array or not
let dMinor = ["D", "E", "F", "G", "A", "B♭", "C"];
dMinor.includes("E"); // true
dMinor.includes("E", 2); // false
// Itt accepts also a second parameter, representing the indexx where to begin to search – the default is zero.