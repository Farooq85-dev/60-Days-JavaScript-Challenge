/* ------- Map Object ------- */
/*
The Map object stores data in a key/value pair structure, just like an Object. The main differences between a regular object and a Map are:
*/

let map = new Map();

map.set(0, "Muhammad Farooq");
map.set(1, "Muhammad Azam");
map.get(0); // use to retrieve all values
map.has(0); // use to check wether the key exist or not
map.delete(1); // use to delete item
map.entries(); // use to retrieve all items with key and value

/* ------- Other Ways to Create a Map Object ------- */

const myMap = new Map([
  ["FirstName", "Muhammad"],
  ["LastName", "Farooq"],
]);

myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

/* ------- Set Object ------- */

const setOfAnimals = new Set([["Dog", "Cat"]]);

// setOfAnimals.add(0); // use to add values
// setOfAnimals.vales(0); // use to retrieve values
// setOfAnimals.has(0); // use to check wether the key exist or not
// map.delete(1); // use to delete value
// map.entries(); // use to retrieve all items with key and value
// map.size; // use to retrieve all items with key and value
// map.clear(); // use to clear all values

console.log(setOfAnimals.entries());

const setA = new Set([1, 2, 3, 4, 5]);

const setB = new Set([4, 5, 6, 7, 8]);

const diffsA = setA.difference(setB); // Set(3) {1, 2, 3}
const diffsB = setB.difference(setA); // Set(3) {6, 7, 8}