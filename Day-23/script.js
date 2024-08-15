// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

let i = 0;

while (i < 10) {
  if (i === 4) {
    console.log(i);
    break;
  }
  i++;
}
// The do...while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 0);
