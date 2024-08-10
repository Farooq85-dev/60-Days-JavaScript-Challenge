const birds = ["Dog", "Crow", "Parrot", "Cat"];
const copy = birds.slice(0, 2);
const copy1 = birds.slice(0);
console.log(copy);
console.log(copy1);

const animals = ["Bafflos", "Goat", "Ox"];
const deleteAnimals = animals.splice(0);
const deleteAndAddNew = animals.splice(0, 1, "Hen");
const onlyDeleteWithRange = animals.splice(0, 1);
console.log(animals);
