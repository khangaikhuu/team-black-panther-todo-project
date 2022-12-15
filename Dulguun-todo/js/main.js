console.log("Todo list project");
console.log("Todo list project #2");
// Date

let now = new Date();
let years = now.getFullYear();
let months = now.getMonth()+1;
let days = now.getDate();

let myTimer = document.getElementById('myTimer');
myTimer.innerHTML = `Year Month Days: ${years}-${months}-${days}`;



// Add list

let todoCreate = document.getElementById('todo-create');
let todoList = document.getElementById('todo-list');
let button = document.getElementById('add');

let list = [];


button.addEventListener('click', () => {

    let input = document.createElement('p');
    input.innerHTML = myValue(todoCreate.value);;

    todoList.appendChild(input);
})

function myValue (arr) {
    let i = `<div class="input-group mb-3">
            <input type="text" class="form-control" name="task" value=${arr} id="input" disabled>

            <button class="btn btn-warning" type="button" id="editBtn">+ Edit</button>

            <button class="btn btn-warning" type="button" id="saveBtn" disabled>Confirm</button>

            <button class="btn btn-warning" type="button" id="removeBtn">Delete</button>
            </div>`
    return i;
}

let myRemove = document.getElementById('removeBtn');
myRemove.addEventListener('click', () => {
    input.remove();
})