const uniqueObject = function (name, email) {
  this.name = name;
  this.email = email;
  this.getFullInformation = function () {
    return `Hello! My name is ${name} and my email is ${email}.`;
  };
};

uniqueObject.prototype.getName = function () {
  return `Hello! My name is ${this.name}`;
};

const user1 = new uniqueObject("Muhammad_Farooq", "farooq@gmail.com");
const user2 = new uniqueObject("Muhammad_Faizan", "faizan@gmail.com");
console.log(user1.getName());
console.log(user1.getFullInformation());


