//Logical Consitions

let facebook = true;
let google = false;
let github = false;

if (facebook) {
  console.log("Successfully login via facebook.");
}
if (google) {
  console.log("Successfully login via google.");
}
if (github) {
  console.log("Successfully login via github.");
}

//Or Operator
if (facebook || google || github) {
  console.log("Successfully Login!");
}
//And Operator
if (facebook && google && github) {
  console.log("Successfully Login!");
}
