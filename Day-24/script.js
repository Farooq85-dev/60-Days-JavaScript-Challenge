// The JavaScript forEach method is one of the several ways to loop through arrays. Each method has different features, and it is up to you, depending on what you're doing, to decide which one to use.
// The forEach method is also used to loop through arrays, but it uses a function differently than the classic "for loop".

let numbers = [1, 1, 1, 2, 1, 21, 1, 1];

numbers.forEach((elemnets) => {
  return console.log(elemnets);
});

// Simplify
numbers.forEach(elemnets => console.log(elemnets));
numbers.forEach((elemnets) => console.log(elemnets));
