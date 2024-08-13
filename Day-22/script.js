//For Loop
/* Loops are computer programs that execute a set of instructions or a block of code a certain number of times without having to write it again until a certain condition is met. In other words, loops let your code execute one or more statements as many times as desired.*/

for (let i = 0; i < 9; i++) {
  console.log(i);
}

//Step  #01;
// for loop start
// Check the condition if ture
// then it goes to statement or block of code
// itterate and update the expression
// again check condition and if flase this loop will goes to its end
// for (initialExpression; condition; updateExpression) {
// for loop body: statement
// }

for (let index = 1; index < 9; index++) {
  if (index === 3) {
    console.log("index--->", index);
    break;
  }
  console.log(index);
}

let sum = 1;
for (let i = 1; i <= 10; i++) {
  console.log(i);
  sum += i;
}

console.log(sum);

// It is important to understand that there are many other types of loops, including the while loop, which is best used when you don't know the number of iterations. Otherwise, always use the for loop when you do know the number of iterations.
