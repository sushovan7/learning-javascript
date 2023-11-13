let todoList = [
  // {
  //   item: "heloo",
  //   duedate: "10/4/2023",
  // },
  // {
  //   item: "he",
  //   duedate: "10/4/2023",
  // },
  // {
  //   item: "heoo",
  //   duedate: "10/4/2023",
  // },
];
displayTodoItems();

function addTodo() {
  let inputElement = document.querySelector("#input-todo");
  let dateElement = document.querySelector("#input-date");
  let inputValue = inputElement.value;
  let dateValue = dateElement.value;
  todoList.push({item:inputValue , duedate:dateValue});
  inputElement.value = "";
  dateElement.value="";
  displayTodoItems();
}

function displayTodoItems() {
  let displayContainer = document.querySelector(".todo-container");
  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    // let item =todoList[i].item;
    // let duedate =todoList[i].duedate;
    let {item ,duedate} = todoList[i];
    newHtml += `
   
   <span>${item}</span>
   <span>${duedate}</span>
   <button class='btn-delete' onclick = "todoList.splice(${i}, 1); displayTodoItems();" >Delete</button>
   
   `;
  }
  displayContainer.innerHTML = newHtml;
}
