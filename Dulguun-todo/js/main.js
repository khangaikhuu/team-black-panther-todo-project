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
    let n = `<div class="input-group mb-3">
            <input type="text" class="form-control" name="task" value=${arr} id="input" disabled>
            <button class="btn btn-warning btn-outline-secondary" type="button" id="editBtn">+ Edit</button>
            <button class="btn btn-warning btn-outline-secondary" type="button" id="saveBtn" disabled> Confirm</button>
            <button class="btn btn-warning btn-outline-secondary" type="button" id="removeBtn" onclick="deleteTask()"> Delete</button>
            </div>`
    return n;
}

const myRemove = document.getElementById('removeBtn');
myRemove.addEventListener('click', () => {
    myRemove.remove();
})

// for (const myRemove of myRemoves) {
//     myRemove.addEventListener('click', (event) => {
//       event.target.remove();
//     });
//   }