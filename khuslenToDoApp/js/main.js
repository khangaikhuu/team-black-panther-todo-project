let now = new Date();
let myTimer = document.getElementById("myTimer");
myTimer.innerHTML = `${now.getFullYear()} - ${now.getMonth() + 1} - ${now.getDay()}`;

// утга оруулахад нэмж таскийг оруулах арга 
let button = document.getElementById("add");
console.log(button)
let todo = document.getElementById("todo-list");
console.group(todo)
let p = document.createElement("p");
console.log(p)
let todoCreate = document.getElementById("todo-create");

button.addEventListener("click", () => {
    console.log("add.clicked")
    console.log(todoCreate.value);
    p.textContent = todoCreate.value;
    console.log(p)
    let input = document.createElement('p');
    input.innerHTML = `<input value=${todoCreate.value} disabled> <button>arrow</button>`;
    todo.appendChild(input);
    // todo.appendChild('<p>p</p>')
})


















// Өнөөдөр энийг заавал дуусгана. CSS Transition ашиглаж хийж дуусгана. хичээлээ сайн нухах хэрэгтэй байна.
// Эхлээд эдгээр ойлголтуудыг яг юунд зориулагдсан юуны төлөө гэдгийг мэдэж авах. Бүгдэн дээр нь тэмдэглэл хөтөлж явах хэрэгтэй.  
// оноос өмнө бүч дасгалуудаа дуусгана. 