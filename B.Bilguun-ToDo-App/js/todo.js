// Date
let now = new Date();
let myTimer = document.getElementById("myTimer");
myTimer.innerHTML = `${now.getFullYear()} - ${
  now.getMonth() + 1
} - ${now.getUTCDate()}`;

// Button to add list
let todoCreate = document.getElementById("myInput");

let todoList = document.getElementById("todoList");
console.log(todoList);

let button = document.getElementById("addButton");



// let edit = [];

button.addEventListener("click", () => {
    console.log("clicked");

    let list = document.createElement('div');

    list.innerHTML = `<input id="secInput" value="${todoCreate.value}" disabled> 
    <button onclick="editFunc(this)">edit</button>
     <button >done</button> 
     <button onclick="delClicked(this)">del</button>`;
    // edit.push(todoList.value);
    todoList.appendChild(list);

});

// let secInput = document.getElementById("secInput");

let editbutton = document.getElementById('edButton');

// editbutton.addEventListener("click", () => {
//     console.log("clicked");
// });
// let secInput = [];


// function editClicked(event) {
//     console.log('button clicked')
//     console.log(event.parentNode);
//     event.parentNode.childNodes[0].disabled = false;
//     // document.getElementById("secInput").disabled = false;
// }

// function doneClicked(eve) {
//     console.log('button done clicked')
//     console.log(eve.parentNode);
//     eve.parentNode.childNodes[0].disabled = true;
// }

function editFunc(event) {
    console.log('button clicked');
    if (event.parentNode.childNodes[0].disabled === true) {
        event.parentNode.childNodes[0].disabled = false;
    } else {
        event.parentNode.childNodes[0].disabled = true;
    }
}

function delClicked(event) {
    console.log('button done clicked')
    console.log(event.parentNode);
    event.parentNode.remove(event);
}