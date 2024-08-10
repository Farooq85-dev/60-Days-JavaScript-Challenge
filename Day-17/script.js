const numbers = [0, 54, 455, 5, 55, 5, 5, 5, 55];
console.log(numbers.fill("Farooq"));
console.log(numbers.fill("Farooq", 2));
console.log(numbers.fill("Farooq"), 2, 4);

const users = ["Muhammad Farooq", "Muhammad Asim", "Muhammad Faiq"];
const filterUsers = users.filter((user) => user != "Muhammad Farooq");
console.log(filterUsers);
