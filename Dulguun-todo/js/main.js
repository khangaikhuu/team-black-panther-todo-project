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

function editFunc(){
    console.log('edit button clicked');
}

function saveFunc(){
    console.log('save button clicked');
}
function deleteFunc(event){
    console.log(event);
    console.log('delete button clicked');
}


button.addEventListener('click', () => {
    let randomIndex = Math.floor(Math.random()*100);
    let input = document.createElement('div');
    input.innerHTML = myValue(todoCreate.value);;

    todoList.appendChild(input);
})

function myValue (value) {
    let i = `<div class="input-group mb-3">
            <input type="text" class="form-control" name="task" value=${value} id="input" disabled>

            <button class="btn btn-warning" type="button" id="editBtn" onclick="editFunc(this)">+ Edit</button>

            <button class="btn btn-warning" type="button" id="saveBtn" onclick="saveFunc(this)" disabled>Confirm</button>

            <button class="btn btn-warning" type="button" id="deleteBtn" onclick="deleteFunc(this)">Delete</button>
            </div>`
    return i;
}