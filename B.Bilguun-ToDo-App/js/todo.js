// Date
let now = new Date();
let myTimer = document.getElementById("myTimer");
myTimer.innerHTML = `${now.getFullYear()} - ${
  now.getMonth() + 1
} - ${now.getUTCDate()}`;


// Count task


// Button to add list
let todoCreate = document.getElementById("myInput");

let todoList = document.getElementById("todoList");
console.log(todoList);

let button = document.getElementById("addButton");



let edit = [];

button.addEventListener("click", () => {
    console.log("clicked");

    let list = document.createElement('div');

    list.innerHTML = `<input id="secInput" value="${todoCreate.value}" disabled> 
    <button onclick="editFunc(this)"><img src="./images/pencil-fill.svg" alt=""></button>
     <button onclick="doneFunc()">done</button> 
     <button onclick="delClicked(this)">del</button>`;
    // edit.push(todoList.value);
    todoList.appendChild(list);

    edit.push(todoCreate.value);
    document.getElementById('task').innerHTML = `${edit.length} task үлдлээ !`
});

function editFunc(event) {
    console.log('button clicked');
    if (event.parentNode.childNodes[0].disabled === true) {
        event.parentNode.childNodes[0].disabled = false;
        butsaah = event.nextSibling
        console.log(butsaah);
        // event.parentNode.childNodes[1].innerHTML = `<button onclick="editFunc(this)"><img src="./images/save2.svg" alt=""></button>`
    } else {
        event.parentNode.childNodes[0].disabled = true;
        // event.parentNode.childNodes[1].innerHTML = `<button onclick="editFunc(this)"><img src="./images/pencil-fill.svg" alt=""></button>`
    }
}

function doneFunc() {
    console.log('Done clicked');
}

function delClicked(event) {
    console.log('button done clicked')
    console.log(event.parentNode);
    event.parentNode.remove(event);
    edit.pop();
    document.getElementById('task').innerHTML = `${edit.length} task үлдлээ !`
    if (edit.length === 0) {
        document.getElementById('task').style = 'display: none;'
    } else {
        document.getElementById('task').style = 'display: block;'
    }
}