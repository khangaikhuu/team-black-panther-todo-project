// // Date part
// let presentTime = new Date();
// let shortDate = ' Он cар өдөр  ' + presentTime.getFullYear() + ' - ' + presentTime.getMonth() + ' - ' + presentTime.getDate();
// document.getElementById("presentTime").innerHTML = shortDate;

// // TODO APP
// let todoCreate = document.getElementById("todo-create");
// let todoList = document.getElementById("todo-list");
// let button = document.getElementById("add");

// // console.log(button);


// function editFunc(){
//     console.log('edit button clicked');
// }

// function correctFunc(){
//     console.log('save button clicked');
// }
// function deleteFunc(event){
//     console.log(event)
//     console.log('delete button clicked');



// button.addEventListener('click', () => {
    
//     console.log('add clicked');
//     console.log(todoCreate.value);


//     let input = document.createElement('p');
//     input.innerHTML = `<input value=${todoCreate.value} > 
//                                     <button id="edit_${randomIndex}" onclick="editFunc()"> EDIT </button> 
//                                     <button onclick="saveFunc()"> SAVE </button> 
//                                     <button id="${randomIndex}" onclick="deleteFunc(this)"> DELETE </button>`

//     todoList.appendChild(input);
// });

// Date part
let presentTime = new Date();
let shortDate = ' Он cар өдөр  ' + presentTime.getFullYear() + ' - ' + presentTime.getMonth() + ' - ' + presentTime.getDate();
document.getElementById("presentTime").innerHTML = shortDate;

// TODO APP
let todoCreate = document.getElementById("todo-create");
let todoList = document.getElementById("todo-list");
let button = document.getElementById("add");

// console.log(button);

button.addEventListener('click', () => {
    console.log('add clicked');
    console.log(todoCreate.value);

    let input = document.createElement('p');
    input.innerHTML = `<input value=${todoCreate.value} disabled> <i class="fa-solid fa-pen"></i> <i class="fa-sharp fa-solid fa-check"></i> <i class="fa-solid fa-trash"></i>`;

    todoList.appendChild(input);

});
