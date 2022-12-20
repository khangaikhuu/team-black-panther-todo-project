console.log("Todo List App");

let timer = document.getElementById("Time");

console.log(timer)


let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();


timer.innerHTML = `On sar odor :${year}-${month + 1}-${day}`


let todoCreate = document.getElementById("SearchInput")

function editFunc(event) {
    console.log("edit button clicked");
    
    event.parentNode.childNodes[0].disabled=false;
}
let button = document.getElementById("button");
console.log(button)

// for (let i = 0; )


function saveFunc() {
    console.log("save button clicked")
    
}


function deleteFunc(event) {
    console.log(event);
    console.log("delete button clicked");
    console.log(event.parentNode);
    event.parentNode.remove(event)
}



let addTodo = () => {
    console.log("button clicked")
    console.log(todoCreate.value)
    let randomIndex = Math.floor(Math.random() * 100);
    let input = document.createElement("div");
    // let active = disable == false;
    input.innerHTML = ` <input id ="disable"value = ${todoCreate.value} disabled> 
    <button id = "edit_${randomIndex}"onclick id= "editFunc()">Edit</button> 
    <button onlick="saveFunc()">Save</button> <button id="${randomIndex}" onclick="deleteFunc(this)">delete</button>`
    myListItems.appendChild(input);
}




// let create = document.createElement("p")

button.addEventListener("click", addTodo)
// if (button(input)) {
//     input.querySelector()
// }
// let myListItems = document.getElementById("myListItems");
// console.log(myListItems);

// let p = document.createElement("bb");
// console.log(p)
// p.textContent = "GG";
// ${todoCreate.value}










