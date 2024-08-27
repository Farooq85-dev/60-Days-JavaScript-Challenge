/* ------- Bind ------- */

// Bind returns the new function with fixed this context. In other words, it always return reference. While call and apply immediately call the function.

const farooq = {
  firstName: "Muhammad",
  lastName: "Farooq",
  degree: "B.S",
  CGPA: 3.48,
  getDetails: function () {
    return `My Name is ${this.firstName} ${this.lastName}. I am a student of ${this.degree} and my current CGPA is ${this.CGPA}`;
  },
};

const faizan = {
  firstName: "Muhammad",
  lastName: "Faizan",
  degree: "B.S",
  CGPA: 3.96,
};

const faizanGetDetailsReference = farooq.getDetails.bind(faizan);
const faizanGetDetailsCall = farooq.getDetails.call(faizan);
console.log(faizanGetDetailsReference());
console.log(faizanGetDetailsCall);
