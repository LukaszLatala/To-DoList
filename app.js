// pobrane elementy
const todosWrapper = document.querySelector("ul.add");
const addTodoBtn = document.querySelector(".todo-form__button");
const addTodoInput = document.querySelector(".todo-form__input");

const listItems = document.getElementsByClassName("task");
// funkcja

const removeTask = (e) => {
  e.target.parentNode.remove();
};

const addItems = (e) => {
  e.preventDefault();

  const titleTask = addTodoInput.value;
  if (!addTodoInput.value) return;

  const newTask = document.createElement("li");
  newTask.className = "task";
  const btn = document.createElement("button");
  btn.textContent = "x";
  btn.className = "btnRemove";

  newTask.innerHTML = titleTask;

  todosWrapper.appendChild(newTask);
  newTask.appendChild(btn);
  addTodoInput.value = "";
  // nasluchiwanie
  btn.addEventListener("click", removeTask);
};
// nasluchiwanie
addTodoBtn.addEventListener("click", addItems);
