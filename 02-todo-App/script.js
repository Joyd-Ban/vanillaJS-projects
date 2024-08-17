const inputText = document.querySelector(".todo-input");
const addButton = document.querySelector(".btn-add");
const todoList = document.querySelector(".todo-list");

//Add funtionality
addButton.addEventListener("click", function (e) {
  console.log("hi");
  e.preventDefault();
  const inp = inputText.value.trim();
  if (inp === "") {
    return;
  }
  const html = `<div class="todo">
  <div class="para"><p>${inp}</p></div>
  <div class="td-btn">
    <button class="btn btn-2 btn-edit">EDIT</button>
    <button class="btn btn-2 btn-del">DELETE</button>
  </div>
</div>`;
  todoList.insertAdjacentHTML("beforeend", html);
  inputText.value = "";
});

//Using event bubbling
todoList.addEventListener("click", function (e) {
  const click = e.target;
  //Delete Functionality
  if (click.classList.contains("btn-del")) {
    const closest = click.closest(".todo");
    closest.remove();
  }
  //edit functionality
  if (click.classList.contains("btn-edit")) {
    const closest = click.closest(".todo");
    const para = closest.querySelector(".para p");
    const currentText = para.textContent;
    para.outerHTML = `<input type="text" class="edit-input" value="${currentText}" />`;

    const editContent = document.querySelector(".edit-input");

    editContent.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const newText = editContent.value;
        editContent.outerHTML = `<p>${newText}</p>`;
      }
    });
  }
});
