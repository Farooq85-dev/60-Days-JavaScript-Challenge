let laptops = [
  {
    company: "HP",
    model: 2012,
    core: "i3",
  },
  {
    company: "ASUS",
    model: 2014,
    core: "i5",
  },
  {
    company: "TOSHIBA",
    model: 2018,
    core: "i9",
  },
];

function generateList() {
  laptops.forEach((laptop) => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.classList.add("li-item"); // Adding class for styling if needed

    // Setting the content of the list item
    li.innerHTML = `${laptop.model} *** ${laptop.company} *** ${laptop.core}`;

    // Append the list item to the unordered list
    ul.appendChild(li);

    // Append the unordered list to the body
    document.body.appendChild(ul);
  });
}

// Generate list when the window loads
window.addEventListener("load", generateList);

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  laptops.sort((a, b) => {
    return a.company.localeCompare(b.company);
  });
  console.log(laptops);

  document.body.innerHTML = "";
  generateList();
});
