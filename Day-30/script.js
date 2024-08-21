// You can use a constructor to create a new object by calling the constructor with the new keyword. The new keyword will create an instance of an object and bind the this keyword to the new object.

const greet = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getUserName = function () {
    return `My name is ${firstName} ${lastName}`;
  };
};

const Muhammad_Farooq = new greet("Muhammad", "Farooq");
console.log(Muhammad_Farooq);
