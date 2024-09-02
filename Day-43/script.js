/* ------- What is a JavaScript Class? ------- */

// A JavaScript class is an object constructor that the new keyword uses to create a new object instance.

// Define a JavaScript class:
class Name {
  constructor(name, className) {
    this.name = name;
    this.className = className;
  }
}

let Farooq = new Name("Muhammad", "Farooq");
console.log(Farooq);

// Why Classes in JavaScript?

/*
Classes provide a way to create a template for creating objects that have access to private data through public methods.

In other words, classes help you encapsulate your data while providing users indirect access to an instance’s internal workings. This lets you provide users with a clean and friendly interface that is independent of an object’s internal implementations.

For instance, Date is a JavaScript class that allows you to access its date data through its public methods, such as getDate(), setDate(), and getFullYear().
*/

// Syntax of a JavaScript Class
// A class is composed of four components:

// A class keyword
// The name of the class
// A code block ({...})
// The body of the class

// What is a class Keyword?

// We use the class keyword to declare to browsers that a specific piece of code is a JavaScript class—not a mathematical or other generic class.

// What is a Class Name?

// A class name allows you to create an identifier for your class, which you can use to reference it.

// Note: Developers typically use uppercase to begin a class's name. This convention helps to differentiate a constructor from other functions.

// What is a Code Block?

// A block is a pair of braces ({...}) used to group multiple statements together.

{
  var bestColor = "White";
}

// Note: A JavaScript class has two types of prototypal methods:

// User-defined methods
// Constructor methods

// What is a Constructor Method in JavaScript Classes?

// What is the super Keyword in JavaScript?
