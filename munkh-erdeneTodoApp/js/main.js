console.log('bom js')
console.log(window);

let presentDay = new Date();
let dayd = presentDay.getFullYear() + '-' + (presentDay.getMonth()+1) + '-' + presentDay.getDate();
document.getElementById("odor").innerHTML = dayd;




// bagshiin code
// let todoCreate = document.getElementById('putting');

// let button = document.getElementById('add');
// console.log(button);

// button.addEventListener('click', () => {
//     console.log('add clicked')
//     console.log(todoCreate.value);
//     let input = document.createElement('p');
//     input.innerHTML = (`${todoCreate.value} <input value `);
//      todoList.appendChild(input);
   

// });


// let todoList = document.getElementById('items');
// console.log(todoList)
// let p = document.createElement('p');

// todoList.appendChild(p)









const addButton = document.getElementById('add');
console.log(addButton);
const todoList = document.getElementById('todolist');
console.log(todoList);

function editFunc(){
    console.log('edit button clicked');
}

function saveFunc(){
    console.log('save button clicked');
}
function deleteFunc(event){
    console.log(event)
    console.log(event.parentNode);
    event.parentNode.removeChild(event);
    console.log('delete button clicked');
}

let addTodo = () => {
    let randomIndex = Math.floor(Math.random()*100);
    let todoElement = document.createElement('div');
    todoElement.id = 'test'
     todoElement.innerHTML = ` <input> <button id="edit_${randomIndex}" onclick="editFunc()">EDIT</button> <button onclick="saveFunc()">SAVE</button> <button id="${randomIndex}" onclick="deleteFunc(this)">DELETE</button>`
    todoList.appendChild(todoElement);
    
   
    
}
addButton.addEventListener('click', addTodo)
