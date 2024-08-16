// The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

const userData = {
  name: "Muhammad Farooq",
  className: "WAM-10",
};

for (const i in userData) {
  console.log(userData[i]);
}
// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
const names = ["YT", "FB"];

for (const name of names) {
  console.log(name);
}
