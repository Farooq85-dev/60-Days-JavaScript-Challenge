/* ------- Closures ------- */

// Closure is simply the act of bringing something to an end. Closure in a relationship refers to the sense of peace and understanding you get after the relationship comes to an end. It's that feeling of "letting go" and being able to move on.

/*In JavaScript, a closure is said to be created when a function retains access to resource(s) declared in it's parent scope even after the parent function has been removed from the call stack.

Note: In JavaScript, when a function is said have been popped-off/removed from the stack, it means that the function has completed its life-span (is done executing), and all of its resources have been removed from memory and are no longer accessible.*/

/*
Think of the call stack like the world, while parent and child are two entities in the world.

In this case, parent is the function that has completed execution and logically, everything about it should be out of reach. But because of the concept of closure, even when the relationship between the parent and child functions has ended – that is, when the parent gets popped-off the stack (removed from the world) – the child function still remembers everything they shared together.*/

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

//
let func2 = (element) => {
  return () => {
    return document.createElement(element);
  };
};

let createDiv = func2("div");
let createSpan = func2("span");
console.log(createDiv());
console.log(createSpan());

//

function parent() {
  let a = 12;
  function child() {
    console.log(a);
    let name = 13;
    function childInner() {
      console.log(a);
    }
    return childInner;
  }
  return child;
}

let c = parent();
console.log(c);
