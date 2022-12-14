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


button.addEventListener('click', () => {

    let input = document.createElement('p');
    input.innerHTML = `<input value=${todoCreate.value}> <button>Edit</button> <button>Del</button>`;

    todoList.appendChild(input);
    

})

