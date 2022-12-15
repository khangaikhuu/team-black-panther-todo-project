console.log("Todo List App");

let timer = document.getElementById("Time");

console.log(timer)


let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();


timer.innerHTML = `On sar odor :${year}-${month+1}-${day}`


let todoCreate = document.getElementById("SearchInput")

let button = document.getElementById("button");
console.log(button)

// for (let i = 0; )

button.addEventListener("click", () => {
    console.log("button clicked")
    console.log(todoCreate.value)

    let input = document.createElement("p");
    input.innerHTML = ` <input id ="disable"value = ${todoCreate.value} disabled> <button id = "pink">Edit</button> <button>Correct</button> <button>Test</button>`
    myListItems.appendChild(input);
  
    const pink = document.getElementById("pink")
    
    pink.addEventListener("click", () => {
        let disable = document.getElementById("disable")

    }) 
    console.log(pink)
    // let create = document.createElement("p")
});

// if (button(input)) {
//     input.querySelector()
// }
// let myListItems = document.getElementById("myListItems");
// console.log(myListItems);

// let p = document.createElement("bb");
// console.log(p)
// p.textContent = "GG";
// ${todoCreate.value}










