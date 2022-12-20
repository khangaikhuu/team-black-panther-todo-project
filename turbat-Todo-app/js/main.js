
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

let newdate = "Он сар өдөр: " + year + "/" + month + "/" + day;
document.getElementById("ognoo").innerHTML = newdate;
setInterval(dateObj, 10000);

//create.Element

function create() {

}



// document.getElementById("button-addon2").addEventListener("click", createElemet);



//bagshiinh copy pasted


// TODO APP
// let todoCreate = document.getElementById('todo-create');

// let button = document.getElementById('button-addon2');
// console.log(button);

// button.addEventListener('click', () => {
//     console.log('button-addon2 clicked')
//     console.log(todoCreate.value);
//     let todoList = document.getElementById('todo-list');
//     console.log(todoList)

//     let p = document.createElement('p');
//     console.log(p)
//     p.textContent = todoCreate.value;

//     todoList.appendChild(p)

// });



// TODO APP
let todoCreate = document.getElementById('todo-create');
let todoList = document.getElementById('todo-list');
console.log(todoList)

let button = document.getElementById('button-addon2');
console.log(button);

button.addEventListener('click', () => {
    console.log('button-addon2 clicked')
    console.log(todoCreate.value);
    let input = document.createElement('p');
    input.innerHTML = `${todoCreate.value} <input value=${todoCreate.value} disabled> <button id="btn1">edit</button><button id="btn1">done</button><button id="btn1">delete</button>`;

    todoList.appendChild(input);
    todoList.appendChild('<button>Дууссан</button>')
    let btnDone = document.getElementById("btn1");
    let uldegdelChecker = document.getElementById("uldegdelShalgah");
    console.log(btnDone)
    btnDone.addEventListener("click", () => {
        console.log("Duussan button clicked")
        let uldegdel = document.createElement("p");
        uldegdel.textContent = `Uldegdelllllll`;

        uldegdelChecker.appendChild(uldegdel);
        uldegdelChecker.appendChild(`<p>Uldegdelllllll</p>`)

    })
    function deleteFunc(event) {
        console.log(event)
        console.log(event.parentNode)
        event.parentNode.remove(event);
        console.log('delete button clicked');
        event.parentNode.remove(event);
        console.log("delete button clicked");
    }

});



