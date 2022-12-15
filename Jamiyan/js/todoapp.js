let varDate = new Date();
document.getElementById("date").innerHTML = `Он сар өдөр: ${varDate.getFullYear()}-${varDate.getMonth() + 1}-${varDate.getDate()}`

let todoList = document.getElementById("todoList");
let todoCreate = document.getElementById("todo-create");
let button = document.getElementById("button");
button.addEventListener("click", () => {

    let div = document.createElement("div");
    // input.innerHTML = ` <input value=${todoCreate.value} disabled>  `;
    div.classList.add('inputStyle');
    todoList.appendChild(div);

    let input = document.createElement("input");
    input.value = todoCreate.value;
    input.disabled = true;
   div.appendChild(input);
     
    let button1 = document.createElement("img");
    button1.src = `./img/pen.svg`;
    button1.classList.add('buttonStyle');
   div.appendChild(button1);

    let button2 = document.createElement("img");
    button2.src = `./img/correct.svg`;
    button2.classList.add('buttonStyle');
    div.appendChild(button2);

    let button3 = document.createElement("img");
    button3.src = `./img/bin.svg`;
    button3.classList.add('buttonStyle');
     div.appendChild(button3);

    button1.addEventListener("click", () => {
        input.disabled = false;
        button1.src = `./img/save.svg`;
    })
    button2.addEventListener("click", () => {
        input.disabled = true;
        input.style = "text-decoration: line-through";
    })

})


let arr = [1, 20, 3];
console.log(arr.reverse())


