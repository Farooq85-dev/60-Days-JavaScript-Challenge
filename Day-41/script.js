/* ------- Destructuring ------- */

/* ------- Array Destructuring  ------- */
let pets = ["Dog", "Cat"];
let [first, second] = pets;
console.log(first);

let [greeting] = ["Hello", "I", "am", "Sarah"];
console.log(greeting);

/* ------- Assigning the rest of an array  ------- */

let [userName, ...restData] = ["Farooq", "farooq85-dev", "sdsfdsd", "46545"];
console.log(restData);

/* ------- Destructuring Assignment with Functions ------- */

function getValues() {
  const pets = ["Dog", "Cat", "Cow"];
  return pets;
}
let [a, b] = getValues();
console.log(b);

/* ------- Using Default Values ------- */

let [c = "hi", d = "Sarah"] = ["hello"];

console.log(c);

/* ------- Swapping Values using the Destructuring Assignment ------- */

let e = 10;
let f = 20;

[e, f] = [f, e];

console.log(f);
console.log(e);

/* ------- Object Destructuring ------- */

const userData = {
  name: "Muhammad Farooq",
  email: "farooq@gmail.com",
  password: 65165165,
};
let { name, password } = userData;
console.log(userData);

const myName = {
  firstName: "Muhamamd",
  lastName: "Muhamamd",
};

({ firstName, lastName } = myName);

console.log(firstName);

/* ------- Using a new Variable Name ------- */

let person = { name: "Sarah", country: "Nigeria", job: "Developer" };

let { name: foo, job: bar } = person;

console.log(foo);
console.log(bar);

let userNested = {
  userName1: "Muhammad",
  userPassword: {
    hashPassword: "1sa56f65sdf6sd4fa",
    originalPasssowrd: 26465141651654,
  },
};

let {
  userName1,
  userPassword: { hashPassword },
} = userNested;
// let { hashPassword } = userNested.userPassword;

console.log(hashPassword);
