// Date

let now = new Date();
let years = now.getFullYear();
let months = now.getMonth()+1;
let days = now.getDate();

let myTimer = document.getElementById('myTimer');
myTimer.innerHTML = `Он сар өдөр: ${years}-${months}-${days}`;



// Add list

let todoCreate = document.getElementById('todo-create');
let todoList = document.getElementById('todo-list');
let button = document.getElementById('add');

let toDoList = [];


button.addEventListener('click', () => {

    let input = document.createElement('p');
    input.innerHTML = `<input value=${todoCreate.value}> <button>Edit</button> <button>Del</button>`;

    todoList.appendChild(input);
    

})


function passValue (value, count) {

    let n = `<div class="input-group mb-3">
            <input type="text" class="form-control" name="task" value=${value} id="input" disabled>
            <button class="btn btn-warning btn-outline-secondary" type="button" id="editBtn">+ Edit</button>
            <button class="btn btn-warning btn-outline-secondary" type="button" id="saveBtn" disabled> Confirm</button>
            <button class="btn btn-warning btn-outline-secondary" type="button" id="removeBtn" onclick="deleteTask()"> Delete</button>
            </div>`
    return n;
}
