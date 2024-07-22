//Math familiar operators

//There are five math familiar operators in Js
// Plus ===> +
// Minus ===> -
// Mutiplication ===> *
// Division ===> /
// Modulus Operator ===> %

const num1 = 8;
const num2 = 6;
// console.log(num1 * num2); ===> 48
// console.log(num1 + num2); ===> 14
// console.log(num1 - num2); ===> 2
// console.log(num1 / num2); ===> 1.333

//How to calculate discount price
const listingPrice = 172;
const sellingPrice = 100;
console.log(Math.round(((listingPrice - sellingPrice) / listingPrice) * 100));
//Duscount is 42% off
