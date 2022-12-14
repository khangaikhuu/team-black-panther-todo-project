// Date
let now = new Date();
let myTimer = document.getElementById("myTimer");
myTimer.innerHTML = `${now.getFullYear()} - ${
  now.getMonth() + 1
} - ${now.getUTCDate()}`;

// Button to add list
let todoCreate = document.getElementById("myInput");

let todoList = document.getElementById("todoList");
console.log(todoList);

let button = document.getElementById("addButton");



button.addEventListener("click", () => {
  console.log("clicked");

  let list = document.createElement('div');
  list.innerHTML = `${todoCreate.value} <button><img src="./images/pencil-edit-button.svg" alt="" style="width: 10px; height: 10px"></img></button>`

  todoList.appendChild(list);

});


