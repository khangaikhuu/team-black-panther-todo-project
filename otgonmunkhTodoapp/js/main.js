console.log("wishluck");
let startMyTimer = document.getElementById("startTimer")
console.log(startMyTimer);

let now = new Date();
let mytimer = document.getElementById("startTimer");
let fullYear = now.getFullYear();
let month = now.getMonth()+1 ;
let day = now.getDay()+18;


mytimer.innerHTML = `Он сар өдөр: ${fullYear}-${month}-${day}`



let found = document.getElementById("myInput");
console.log(found);
let button = document.getElementById("control");
console.log(button);
let todolist = document.getElementById("dish");
console.log(todolist);

function editFunc(event) {
    console.log("edit button clicked");
    console.log(event);
    console.log(event.parentNode.firstChild);
    if(event.parentNode.firstChild.disabled == true){
        event.parentNode.firstChild.disabled == false;

    } else{
        event.parentNode.firstChild.disabled == true;
    }
    
}
function saveFunc() {
    console.log("save button clicked");
}
function deleteFunc(event) {
    console.log(event);
    console.log(event.parentNode);
    event.parentNode.remove(event);
    console.log("delete button clicked");

}



button.addEventListener('click', () => {
    console.log("control clicked");
    console.log(found.value);
    let input = document.createElement("div");
    let randomIndex = Math.floor(Math.random() * 100);

    input.innerHTML = `<input value=${found.value} disabled >
    
    <button onclick="editFunc(this)"  class="btn btn-border-none bi bi-pencil-fill"></button>
    <button onclick="saveFunc(this)"  class="btn btn-border-none bi bi-check-lg"></button>
    <button onclick="deleteFunc(this)" id="edit_${randomIndex}" class="btn btn-border-none bi bi-trash bg-warning border-radius-none "></button>`

    todolist.appendChild(input);
    todolist.id="exterordonary"
    // document.getElementById("exterordonary").style="background-color: red"

})





console.log("change");