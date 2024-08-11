// An object is a data type that can take in collections of key-value pairs.
// The key, also known as the property name, is usually a string. If any other data type is used as a property name other than strings, it would be converted into a string.

//There are two ways to access object values through dot notation and bracket notation.
// You Can't Use Values as Property Names with Dot Notation
// You Can't Use Multi-Word Properties with Dot Notation
// There are two methods by which you can create an object: an object literal and the object constructor.
// Basically, constructors are functions whose names are usually capitalized.
let name = {
  name: "Muhammad Farooq",
  className: "WAM-10",
  section: "A+",
};
// name["name"] = "Muhammad Farhan";
// console.log(name["name"]);
// console.log(Object.length);

const newObject = Object.assign({}, name);
console.log(newObject);

for (let key in newObject) {
  console.log(newObject[key]);
}
