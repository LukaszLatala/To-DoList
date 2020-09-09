const todosWrapper = document.querySelector("todos__wrapper");
const addTodoBtn = document.querySelector("todo-form__button");
const addTodoInput = document.querySelector("todo-form__input");

const todos = [];

class Todo {
  // w klasie sa metody. w naszym przypadku metoda construktor, ktora przyjmuje jakies parametry
  // załozenie jest takie. Dodawaj funkcje do prototypu a wlasciwosci pisz w construktorze
  constructor(todoName) {
    this.createTodo(todoName);
  }

  //   to jest funkcja

  createTodo(todoName) {
    const todoWrapper = document.createElement("div");
    todoWrapper.classList.add("todo__wrapper");

    const todoInput = document.createElement("input");
    todoInput.classList.add("todo__input");
    todoInput.type = "text";
    todoInput.disabled = true;
    todoInput.value = todoName;

    const editTodoBtn = document.createElement("button");
    editTodo.classList.add("todo-edit__button");
    editTodo.innerHTML = "edit";

    const removeTodoBtn = document.createElement("button");
    removeTodoBtn.classList.add("todo-remove__button");
    removeTodoBtn.innerHTML = "remove";

    todoWrapper.appendChild(todoWrapper);
    todoWrapper.appendChild(todoInput);
    todoWrapper.appendChild(editTodoBtn);
    todoWrapper.appendChild(removeTodoBtn);

    const addedInputValue = addTodoInput.value;
  }
}
