
// Date part
let presentTime = new Date();
let shortDate = ' Он cар өдөр  ' + presentTime.getFullYear() + ' - ' + presentTime.getMonth() + ' - ' + presentTime.getDate();
document.getElementById("presentTime").innerHTML = shortDate;

// TODO APP
let todoCreate = document.getElementById("todo-create");
let todoList = document.getElementById("todo-list");
let button = document.getElementById("add");






// BUTTON FUNCTION

button.addEventListener('click', () => {
    console.log('add clicked');
    console.log(todoCreate.value);

    let input = document.createElement('p');
    input.innerHTML = `<input value=${todoCreate.value} disabled> 
            <button onclick="edit(this)" style="width: 50px; height: 30px;margin-left:-6px; background-color: #f49d1a; color: blue" > Edit </button> 
            <button onclick="correct" style="width: 50px; height: 30px;margin-left:-6px; margin-top: -100px; background-color: #f49d1a; color:green"> SAVE </button> 
            <button onclick="delete" style="width: 50px; height: 30px;margin-left:-6px; background-color: #f49d1a; color:red"> DEL </button>`;

    todoList.appendChild(input);

})

//FUNCTION BUTTON

const edit = (e) => {
    let p = e.parentNode.firstElementChild;
    child.removeAttribute("disabled")
    console.log('edit button', child)
}



// function editFunc() {
//     console.log('edit button clicked');
// }
    

// function correctFunc() {
//     console.log('save button clicked');
// }
// function deleteFunc() {
//     // console.log()
//     console.log('delete button clicked').remove();
// }



