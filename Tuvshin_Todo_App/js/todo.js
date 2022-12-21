
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
    input.innerHTML = `<input value="${todoCreate.value}" disabled> 
            <button id="btn1" onclick="editFunc(this)"> Edit </button> 
            <button onclick="correctFunc()"> SAVE </button> 
            <button onclick="deleteFunc(this)"> DEL </button>`;

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


function btn1(event) {
    let editInput = event.parentNode.firstElementChild;
    if (editInput.disapled == true) {
        editInput.disapled = false;
        event.innerHTML = `hi`
    } else {
        editInput.disapled = true;
        event.innerHTML = `hi2`
    }
}