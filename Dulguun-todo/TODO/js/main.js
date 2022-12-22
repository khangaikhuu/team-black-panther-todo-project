// Date

let now = new Date();
let years = now.getFullYear();
let months = now.getMonth() + 1;
let days = now.getDate();

let myTimer = document.getElementById('myTimer');
myTimer.innerHTML = `Year Month Days: ${years}-${months}-${days}`;



// Add list

let todoInput = document.getElementById('todoInput');
let todoList = document.getElementById('todoList');
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
    if(todoInput.value == "") {
        alert ('List is empty')
    }
})


function editFunc() {
    console.log('edit button clicked');
    document.getElementById("saveBtn").disabled = false;
    document.getElementById("inputArea").disabled = false;
}

function saveFunc() {
    console.log('save button clicked');
    document.getElementById("inputArea").disabled = true;
}
function deleteFunc(event) {
    // console.log(event);
    // console.log(event.parentNode);
    // console.log('delete button clicked');
    event.parentNode.remove(event);
}


addBtn.addEventListener('click', () => {
    let randomIndex = Math.floor(Math.random() * 100);
    let todo = document.createElement('div');
    todo.id = "test";
    todo.innerHTML = addList(todoInput.value);;
    todoList.appendChild(todo);
})

function addList(value) {
    let i = `<div class="input-group my-3">
            <input type="text" class="form-control" name="task" value=${value} id="inputArea">

            <button class="btn btn-warning" type="button" id="editBtn" onclick="editFunc(this)"><i class="bi bi-pencil-fill myEdit"></i></button>

            <button class="btn btn-warning" type="button" id="saveBtn" onclick="saveFunc(this)" disabled><i class="bi bi-check myConfirm"></i></button>

            <button class="btn btn-warning" type="button" id="deleteBtn" onclick="deleteFunc(this)"><i class="bi bi-trash-fill myDelete"></i></button>
            </div>`
    return i;
}