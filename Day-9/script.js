/* Type coercion is the automatic or implicit conversion of values from one data type to another
(such as strings to numbers). Type conversion is similar to type coercion because they both convert
values from one data type to another with one key difference — type coercion is implicit whereas type
conversion can be either implicit or explicit. */

//Falsy Values

// null
// NaN
// undefined
// ""
// -0
// 0
// 0n

let user;
console.log(user);

let user1 = null;
if (user1) {
  console.log("HY!");
}

let user2 = "";
if (user2) {
  console.log("HY!");
}
