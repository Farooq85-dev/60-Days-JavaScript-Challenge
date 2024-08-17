// What is the DOM?

// DOM stands for Document Object Model.
// The Document part refers to the webpage you see in the browser.
// Object means the elements like images, headers, and paragraphs are treated like objects

/*What You Can Do With the DOM
DOM manipulation allows developers to interact with the structure, style, and content of web pages. The following are some of the things you can do with the DOM:

Change and remove existing elements in the DOM.
Create and add new elements to the page.
Change the styles for elements.
Add event listeners to the elements to make them interactive.*/

// How to Select DOM Elements
// By getElementById

/* if a element has an id attribute with a value of "page-title", no other element on the page should also have an id with the same value.

This means anytime you use the getElementById method, you are going to select only one element from the DOM.*/

const myName = document.getElementById("myName");
console.log(myName);

// By getElementsByClassName
// You can use this method to select more than one object. This method takes in the value of a class attribute as an argument and selects all elements in the DOM that has the given class. Unlike ids, you can give the same class value for different HTML elements.
const myClassName = document.getElementsByClassName("myClassName");
console.log(myClassName);

//By getElementsByTagName

/* This method will select elements using their tag name. For example, getElementByTagName('p') will select all paragraphs on the page.
Like getElementsByClassName, this method also returns an HTML collection of the selected elements*/

const allParagraphs = document.getElementsByTagName("p");

arrayMethodsOnHTMLCollection = [...allParagraphs];
arrayMethodsOnHTMLCollection.forEach((element) => {
  console.log(element.innerText);
});

// By  querySelector

/* You can use this method to select any HTML element in the DOM. It returns only one element: the first element that matches the given selector.

The querySelector method works like how CSS selectors work.
For example, what do you do when you want to select an element with an id? You use the hash # symbol. How about when you want to select elements with a class? You put a dot . in front of the class name.*/

const qId = document.querySelector("#myName");
const qClassName = document.querySelector(".myClassName");
console.log(qId);
console.log(qClassName);

const likeCssSelector = document.querySelector("div button:nth-child(3)");
console.log(likeCssSelector.innerHTML);

const allBtns = document.querySelectorAll("button");
const loopThroughButtons = [...allBtns];
const filteredButtons = loopThroughButtons.filter(
  (btn) => btn.innerHTML !== "Third button"
);
console.log(filteredButtons);

//How to Change the Content of DOM Elements

// The innerHTML Property
// The innerText and textContent Properties

console.log("innerText: ", qId.innerText);
console.log("textContent: ", qId.textContent);

const fourthBtn = document.getElementById("fourthBtn");
fourthBtn.setAttribute("type", "menu");
console.log(fourthBtn.removeAttribute("type"));

// classList Methods are simply add another and replace the classes values

// classList.add();
//classList.remove();
//classList.replace();
//classList.contains();
//classList.toggle();

const giftBox = document.getElementById("gift-box");

const clickBtn = document.getElementById("click-btn");
clickBtn.addEventListener("click", function () {
  giftBox.style.display = "flex";
  //   giftBox.classList.remove('hide')
});

// const button = document.getElementById('btn')
// const innerDiv = document.getElementById('inner')
// const outerDiv = document.getElementById('outer')

// button.addEventListener('click', function() {
//   console.log('Click on button')
// })

// innerDiv.addEventListener('click', function() {
//   console.log('Click on inner Div')
// })

// outerDiv.addEventListener('click', function() {
//   console.log('Click on outer Div')
// })

const button = document.getElementById("btn");
const innerDiv = document.getElementById("inner");
const outerDiv = document.getElementById("outer");

button.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Click on button");
});

innerDiv.addEventListener("click", function () {
  console.log("Click on inner Div");
});

outerDiv.addEventListener("click", function () {
  console.log("Click on outer Div");
});

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("passwordInput");

togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.innerText = "Hide Password";
  } else {
    passwordInput.type = "password";
    togglePassword.innerText = "Show Password";
  }
});

const textInput = document.getElementById("textInput");
const counts = document.getElementById("counts");

textInput.addEventListener("input", () => {
  let text = textInput.value.trim();
  let words = text ? text.split(/[\w-]+/) : [];
  counts.innerText = words.length;
});
