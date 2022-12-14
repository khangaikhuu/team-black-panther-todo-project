console.log('bom js')
console.log(window);

let presentDay = new Date();
let dayd = presentDay.getFullYear() + '-' + (presentDay.getMonth()+1) + '-' + presentDay.getDate();
document.getElementById("odor").innerHTML = dayd;







// bagshiin code
let todoCreate = document.getElementById('putting');

let button = document.getElementById('add');
console.log(button);

button.addEventListener('click', () => {
    console.log('add clicked')
    console.log(todoCreate.value);
    let input = document.createElement('p');
    input.innerHTML = (`${todoCreate.value} <input value `);
     todoList.appendChild(input);
   

});


let todoList = document.getElementById('items');
console.log(todoList)
let p = document.createElement('p');

todoList.appendChild(p)










