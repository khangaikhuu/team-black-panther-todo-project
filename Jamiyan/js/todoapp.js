let varDate = new Date();
document.getElementById("date").innerHTML = `Он сар өдөр: ${varDate.getFullYear()}-${varDate.getMonth() + 1}-${varDate.getDate()}`
let array = [];
let todoList = document.getElementById("todoList");
let todoCreate = document.getElementById("todo-create");
let saveDiv = document.getElementById("saveDiv");
let add = document.getElementById("add");
add.addEventListener("click", () => {

    let div = document.createElement("div");
    div.classList.add('divStyle');
    todoList.appendChild(div);

    let input = document.createElement("input");
    input.value = todoCreate.value;
    input.disabled = true;
    input.classList.add('inputStyle')
    div.appendChild(input);

    let button1 = document.createElement("button");
    button1.classList.add('buttonStyle');
    div.appendChild(button1);
    let img1 = document.createElement("img");
    img1.src = "./img/pen.svg";
    button1.appendChild(img1);
    let color = "white";

    button1.addEventListener("click", () => {
        if (color === "white") {
            input.disabled = false;
            input.style = `background-color: ${color}`;
            img1.src = "./img/save.svg";
            color = "#eeeeee";
        } else {
            input.disabled = true;
            input.style = "background-color: #eeeeee;";
            img1.src = "./img/pen.svg";
            color = "white";
        }
    })

    let button2 = document.createElement("button");
    button2.classList.add('buttonStyle');
    div.appendChild(button2);
    let img2 = document.createElement("img");
    img2.src = "./img/correct.svg";
    button2.appendChild(img2);
    button2.addEventListener("click", () => {
        saveDiv.appendChild(div);
    })

    let button3 = document.createElement("button");
    button3.classList.add('buttonStyle');
    div.appendChild(button3);
    let img3 = document.createElement("img");
    img3.src = "./img/bin.svg";
    button3.appendChild(img3);

    button3.addEventListener("click", () => {
        div.remove();
        array.pop(2)
        let task = document.getElementById("task").innerHTML = `${array.length} task үлдлээ!`;
    })
   
    array.push(5);
    console.log(array);
    let task = document.getElementById("task").innerHTML = `${array.length} task үлдлээ!`;
    

})




//     let todoElement = document.createElement('div');
//     todoElement.id = 'test'
//     todoElement.innerHTML = `TODO <input> <button  onclick="editFunc() "><img src="./img/pen.svg" alt="" style = "width : 10px; height: 10px"></button> <button onclick="saveFunc()">SAVE</button> <button  onclick="deleteFunc(this)">DELETE</button>` // this gedeeg n ooriigoo ogj baigaa gesen ug
//     todoList.appendChild(todoElement);

// })

// function editFunc() {
//     console.log('edit button clicked');
// }

// function saveFunc() {
//     console.log('save button clicked');
// }
// function deleteFunc(even) {
//     console.log(even)
//     console.log(even.parentNode)
//     even.parentNode.remove(even);
//     console.log('delete button clicked');
// }


