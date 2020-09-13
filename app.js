// Pobrane elementy
const todosWrapper = document.querySelector("ul.add");
const addTodoBtn = document.querySelector(".todo-form__button");
const addTodoInput = document.querySelector(".todo-form__input");
const listItems = document.getElementsByClassName("task");
const searchInput = document.querySelector(".searchInput");
const ulSearch = document.querySelector("ul.search");

const toDoList = [];

// Funkcja usuwająca taska
const removeTask = (e) => {
  e.target.parentNode.remove();
  const index = e.target.parentNode.id.key;

  toDoList.splice(index, 1);
  console.log(index);
  todosWrapper.textContent = "";
  toDoList.forEach((todoElement, key) => {
    todoElement.id = key;
    todosWrapper.appendChild(todoElement);
  });
};
// Funkcja dodająca taska
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

  btn.addEventListener("click", removeTask);

  toDoList.push(newTask);
  todosWrapper.textContent = "";
  toDoList.forEach((todoElement, key) => {
    todoElement.id = key;
    todosWrapper.appendChild(todoElement);
  });
};
// Funckja wyszukująca taska
const searchTask = (e) => {
  ulSearch.textContent = "";

  const matchingTasks = toDoList.filter((newTask) =>
    newTask.firstChild.nodeValue
      .toLowerCase()
      .includes(e.target.value.toLowerCase())
  );

  matchingTasks.forEach((newTask) => {
    const newEl = document.createElement("li");
    newEl.textContent = newTask.firstChild.nodeValue;
    ulSearch.appendChild(newEl);
  });

  if (e.target.value === "") ulSearch.textContent = "";
};

addTodoBtn.addEventListener("click", addItems);

searchInput.addEventListener("input", searchTask);
