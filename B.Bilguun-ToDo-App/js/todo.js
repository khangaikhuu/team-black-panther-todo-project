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
let todoChild = document.getElementById("todoList").children;


let edit = [];
let end = [];

button.addEventListener("click", () => {
    console.log("clicked");

    let list = document.createElement('div');
    list.style = "border: none; background-color: orange;padding: 5px;margin: 5px";

    list.innerHTML = `<input value="${todoCreate.value}" disabled style = "background-color: antiquewhite;border: none;"> 

     <button class="btn btn-warning" onclick="editFunc(this)"><img src="./images/pencil-fill.svg" alt=""></button>

     <button class="btn btn-warning" onclick="doneFunc(this)"><img src="./images/check2.svg" alt=""></button> 

     <button class="btn btn-warning" onclick="delClicked(this)"><img src="./images/trash3.svg" alt=""></button>`;
    edit.push(todoList.value);
    todoList.appendChild(list);
    document.getElementById('leftTask').innerHTML = `${todoChild.length} task үлдлээ !`
    if (todoChild.length === 0) {
        document.getElementById('leftTask').style = 'display: none;'
    } else {
        document.getElementById('leftTask').style = 'display: block;'
    }
});

function editFunc(event) {
    console.log('button clicked');
    if (event.parentNode.childNodes[0].disabled === true) {
        event.parentNode.childNodes[0].disabled = false;
        event.innerHTML = `<img src="./images/save2.svg" alt="">`
    } else {
        event.parentNode.childNodes[0].disabled = true;
        event.innerHTML = `<img src="./images/pencil-fill.svg" alt="">`
    }
}

function doneFunc(event) {
    console.log('Done clicked');
    end.push(todoList.value);
    document.getElementById('endTask').innerHTML = `${end.length} task хйисэн !`

    // if (end.length === todoChild.length) {
    //     document.getElementById('endTask').style = 'display: none;'
    // } else {
    //     document.getElementById('endTask').style = 'display: block;'
    // }

}

function delClicked(event) {
    console.log('button done clicked')
    console.log(event.parentNode);
    event.parentNode.remove(event);
    document.getElementById('leftTask').innerHTML = `${(todoChild.length)} task үлдлээ !`
    if (todoChild.length === 0) {
        document.getElementById('leftTask').style = 'display: none;'
    } else {
        document.getElementById('leftTask').style = 'display: block;'
    }
}

// function doneFunc() {
//     console.log('Done clicked');
//     end.push(todoList.value);
//     document.getElementById('endTask').innerHTML = `${end.length} task хйисэн !`
//     if (end.length === 0) {
//         document.getElementById('endTask').style = 'display: none;'
//     } else {
//         document.getElementById('endTask').style = 'display: block;'
//     }
//     edit.pop();
//     document.getElementById('leftTask').innerHTML = `${edit.length} task үлдлээ !`
//     if (edit.length === 0) {
//         document.getElementById('leftTask').style = 'display: none;'
//     } else {
//         document.getElementById('leftTask').style = 'display: block;'
//     }
// }