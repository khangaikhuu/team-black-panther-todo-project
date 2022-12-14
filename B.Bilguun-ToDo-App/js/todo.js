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


    list.innerHTML = `<input class="secInput" value="${todoCreate.value}" disabled> 
    <button class="edButton" onclick="clicked()">edit</button>
     <button class="doneButton">done</button> 
     <button class="delButton">del</button>`;
    // edit.push(todoList.value);
    todoList.appendChild(list);

});

// let secInput = document.getElementById("secInput");

let editbutton = document.getElementById('edButton');

// editbutton.addEventListener("click", () => {
//     console.log("clicked");
// });

function clicked() {
    console.log('button clicked')
    let secInput = [];

    for (let i = 0; i < secInput.length; i++) {
        let secInput = document.getElementsByClassName("secInput")[i];
        secInput.disabled = false;
    }


    // secInput.disabled = false;
}