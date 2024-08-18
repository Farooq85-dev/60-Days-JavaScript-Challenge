const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

const ul = document.createElement("ul");
document.body.appendChild(ul);

addTodoBtn.addEventListener("click", () => {
  if (!todoInput.value) {
    alert("Please add todo first!");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `
  ${todoInput.value}
  <button onclick="editTodo(this)">Edit</button>
  <button onclick="deleteTodo(this)">Delete</button>
  </br>
  </br>
  `;
  ul.appendChild(li);
  todoInput.value = "";
});

const editTodo = (editBtn) => {
  const li = editBtn.parentElement;
  currentTodo = li.firstChild.textContent.trim();
  let newTodo = prompt("Edit your todo", currentTodo);
  if (newTodo) {
    li.firstChild.textContent = newTodo + " ";
  }
};

const deleteTodo = (deleteBtn) => {
  const li = deleteBtn.parentElement;
  ul.removeChild(li);
};
