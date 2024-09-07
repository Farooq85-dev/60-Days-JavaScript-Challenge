let toastBox = document.querySelector("#toast-box");

let successMsg = `<i class="fa-solid fa-check"></i> Submitted Successfully!`;
let errorMsg = `<i class="fa-solid fa-xmark"></i> Please try again!`;
let InvalidMsg = `<i class="fa-solid fa-triangle-exclamation"></i> Invalid Call!`;

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("Successfully")) {
    toast.classList.add("success");
  }
  if (msg.includes("try")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
