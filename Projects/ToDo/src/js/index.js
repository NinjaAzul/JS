function meuTodo() {
  const inputTodo = document.querySelector(".input-todo");
  const btnTodo = document.querySelector(".btn-todo");
  const todos = document.querySelector(".todos");
  //key teclado
  window.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (!inputTodo.value) return;
      createTodo(inputTodo.value);
    }
  });

  btnTodo.addEventListener("click", function () {
    if (!inputTodo.value) return;
    createTodo(inputTodo.value);
  });

  const createLi = () => {
    const li = document.createElement("li");
    return li;
  };

  function cleanInput() {
    inputTodo.value = "";
    inputTodo.focus();
  }

  function createButtonDelete(li) {
    li.innerText += "  ";
    const btnDelete = document.createElement("button");
    btnDelete.innerText += "Delete";
    btnDelete.setAttribute("class", "apagar");
    btnDelete.setAttribute("title", "Apagar está tarefa...");
    li.appendChild(btnDelete);
  }

  const createTodo = (textInput) => {
    const li = createLi();
    li.innerText = textInput;
    todos.appendChild(li); // cria um filho
    cleanInput();
    createButtonDelete(li);
    saveTodo();
  };

  document.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("apagar")) {
      el.parentElement.remove();
      saveTodo();
    }
  });

  const saveTodo = () => {
    const todoALl = todos.querySelectorAll("li");
    const listaTodo = [];
    for (let todo of todoALl) {
      let todotext = todo.innerText;
      todotext = todotext.replace("Delete", "").trim();
      listaTodo.push(todotext);

      const todoJSON = JSON.stringify(listaTodo);
      localStorage.setItem("todos", todoJSON);
    }
  };

  const addTodoSaves = () => {
    const todos = localStorage.getItem("todos");
    const listTodos = JSON.parse(todos);

    for (let todo of listTodos){
      createTodo(todo);
    }
  };

  addTodoSaves();
}

meuTodo();
