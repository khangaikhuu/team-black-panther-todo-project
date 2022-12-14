let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1;
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

newDate = "Он сар өдөр: " + year + "/" + month + "/" + day;
document.getElementById("timer").innerHTML = newDate;

let todoCreate = document.getElementById("create");

let button = document.getElementById("button-addon2");
console.log(button);

button.addEventListener("click", () => {
  console.log("add clicked");
  console.log(todoCreate.value);
  
  let input = document.createElement("p");
  input.innerHTML = `${todoCreate.value} <input value=${todoCreate.value} disabled> <button>Test</button>`;

  todoList.appendChild(input);
  todoList.appendChild("<p>Test</p>");
});

let todoList = document.getElementById("list");
console.log(todoList);

let p = document.createElement("p");
console.log(p);
p.textContent = "First";

todoList.appendChild(p);
