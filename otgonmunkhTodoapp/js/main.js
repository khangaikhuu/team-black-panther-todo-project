console.log("wishluck");
let startMyTimer = document.getElementById("startTimer")
console.log(startMyTimer);

let now = new Date();
let mytimer = document.getElementById("startTimer");
let fullYear = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDay();


mytimer.innerHTML = `Он сар өдөр: ${fullYear}-${month}-${day}`



let found = document.getElementById("myInput");
console.log(found);
let button  = document.getElementById("control");
console.log(button );
let todolist = document.getElementById("dish");
console.log(todolist);

button.addEventListener('click', () => {
    console.log("control clicked");
    console.log(found.value);
    let input = document.createElement("div");
    input.innerHTML = `<input value=${found.value}  disabled  <button  ><button/>`

    todolist.appendChild(input);
   
})





