
function startInterval() {
    let now = new Date()
    let myTimer = document.getElementById("myTimer")
    setInterval(startInterval, 1000)
    myTimer.innerHTML = `Today's date: ${now.getFullYear()}/${now.getDate()}/${now.getDay()}`
}
let inputText = document.getElementById("inputText")

let submitBtn = document.getElementById("submitBtn")
let toDoInput = document.getElementById("toDoInput");
let taskL = document.getElementById('taskList');
let value;
submitBtn.addEventListener("click", () => {
    let value = toDoInput.value
    console.log(value)
    let p = document.createElement("p")
    let div = document.createElement("div")
    p.textContent = value
    inputText.appendChild(p);
    inputText.appendChild(div);
    p.innerHTML = `${value}`
    div.innerHTML = `<button class="btn btn-warning">Edit </button> <button class="btn btn-success">Check</button> <button class="btn btn-danger">Delete</button>`

    // task container
    // let taskContainer = document.createElement('div');
    // taskContainer.classList.add('task');

    // taskL.appendChild(taskContainer);

})


