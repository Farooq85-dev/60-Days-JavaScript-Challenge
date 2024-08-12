const object1 = {
  a: 10,
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(value);
}
