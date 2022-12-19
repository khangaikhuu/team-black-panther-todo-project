console.log('TODO APP')

const addButton = document.getElementById('add');
console.log(addButton);
const todoList = document.getElementById('todolist');
console.log(todoList);

function editFunc() {
    console.log('edit button clicked');
}

function saveFunc() {
    console.log('save button clicked');
}
function deleteFunc(event) {
    console.log(event)
    console.log(event.parentNode)
    event.parentNode.remove(event);
    console.log('delete button clicked');
    event.parentNode.remove(event);
    console.log("delete button clicked");
}

let addTodo = () => {
    let randomIndex = Math.floor(Math.random() * 100);
    let todoElement = document.createElement('div');
    todoElement.id = 'test'
    todoElement.innerHTML = `TODO <input> <button id="edit_${randomIndex}" onclick="editFunc()">EDIT</button> <button onclick="saveFunc()">SAVE</button> <button id="${randomIndex}" onclick="deleteFunc(this)">DELETE</button>`
    todoList.appendChild(todoElement);

    let eBtn = document.getElementById('edit');

    console.log(eBtn);

}



addButton.addEventListener('click', addTodo)