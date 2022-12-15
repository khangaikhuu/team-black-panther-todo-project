let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1;
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

newDate = "Он сар өдөр: " + year + "-" + month + "-" + day;
document.getElementById("timer").innerHTML = newDate;

let todoCreate = document.getElementById("create");
let todoList = document.getElementById("list"); 
let button = document.getElementById("button-addon2");
console.log(button);

function editFunc(){
  console.log('edit button clicked');
}

function saveFunc(){
  console.log('save button clicked');
}
function deleteFunc(event){
  console.log(event)
  console.log('delete button clicked')
}

let addToDo = () => {
  let randomIndex = Math.floor(Math.random()*100);
  let todoElement = document.createElement('div');
  todoElement.id = ('test')
  todoElement.innerHTML = `TODO <input> <button id="edit_${randomIndex}" onclick="editFunc()">EDIT</button> <button onclick="saveFunc()">SAVE</button> <button id="${randomIndex}" onclick="deleteFunc(this)">DELETE</button>`
  todoList.appendChild(todoElement);
  let eBtn = document.getElementById('edit');
  
  console.log(eBtn);
}
button.addEventListener('click', addToDo)

// button.addEventListener("click", () => {
//   console.log("add clicked");
//   console.log(todoCreate.value);
  
//   let input = document.createElement("p");
//   input.innerHTML = `<input value=${todoCreate.value} disabled> <button>Test</button> `;

//   todoList.appendChild(input);
// });


let p = document.createElement("p");
console.log(p);
p.textContent = "First";

todoList.appendChild(p);
