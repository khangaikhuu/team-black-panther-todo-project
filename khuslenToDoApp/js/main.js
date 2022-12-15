let now = new Date();
let myTimer = document.getElementById("myTimer");
myTimer.innerHTML = `Он сар өдөр - ${now.getFullYear()} - ${now.getMonth() + 1} - ${now.getDay()}`;

// утга оруулахад нэмж таскийг оруулах арга 
let button = document.getElementById("add");
console.log(button)
let todo = document.getElementById("todo-list");
console.group(todo)
let p = document.createElement("p");
console.log(p)
let todoCreate = document.getElementById("todo-create");

 
// style нэмж оруулав

button.style = "padding: 10px 20px; border: 2px solid silver; border-radius: 5px; width: 100px"
button.style.backgroundColor = "gold"
todoCreate.style = "padding: 10px 20px; border: 2px solid silver; border-radius: 5px; width: 200px"

// let too = 0;
// let edit1 = document.getElementById("edit")

// let input = document.createElement('p');

function deleteFunc(event){
    console.log(event)
    console.log(event.parentNode)
    event.parentNode.remove(event);
    console.log('delete button clicked');
}

button.addEventListener("click", () => {
    let input = document.createElement('p');
    input.innerHTML = `<input class = "py-2 px-4 rounded" value="${todoCreate.value}" disabled><button id="edit" class=" py-2 px-4 rounded bg-primary"><i class='fas fa-pencil bg-primary'></i></button><button class=" py-2 px-4 rounded bg-info"><i class='fas fa-check bg-info'></i></button><button class=" py-2 px-4 rounded bg-danger" onclick="deleteFunc(this)"><i class='fas fa-trash bg-danger'></i></button>`;

    // let btn1 = document.createElement("button")


    // btn1.innerHTML = 
    todo.appendChild(input);
    console.log(input);
})

















// Өнөөдөр энийг заавал дуусгана. CSS Transition ашиглаж хийж дуусгана. хичээлээ сайн нухах хэрэгтэй байна.
// Эхлээд эдгээр ойлголтуудыг яг юунд зориулагдсан юуны төлөө гэдгийг мэдэж авах. Бүгдэн дээр нь тэмдэглэл хөтөлж явах хэрэгтэй.  
// оноос өмнө бүч дасгалуудаа дуусгана. 