//Object Methods
let userData = {
  userName: "Muhammad Farooq",
  IsVerified: true,
};
// The Object.is() static method determines whether prperty exists or not.
console.log(Object.hasOwn(userData, "userName"));

// The Object.is() static method determines whether two values are the same value.
console.log(Object.is(1, 1));

//The Object.isExtensible() static method determines if an object is extensible (whether it can have new properties added to it).
console.log(Object.isExtensible(userData));
console.log(Object.preventExtensions(userData));
console.log(Object.isExtensible(userData));

//The Object.isFrozen() static method determines if an object is frozen.
console.log(Object.isFrozen(userData));
Object.freeze(userData);
console.log(Object.isFrozen(userData));

//The Object.isSealed() static method determines if an object is sealed.
console.log(Object.isSealed(userData));
Object.seal(userData);
console.log(Object.isSealed(userData));

//The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names
console.log(Object.keys(userData));
//The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
console.log(Object.values(userData));
