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


// delete button starts from here 
function deleteFunc(event){
    console.log(event)
    console.log(event.parentNode)
    event.parentNode.remove(event);
    console.log('delete button clicked');
}

// check button starts from here 

function checkFunc(eve){
    // eve.disabled("button") = true;
    eve.parentNode.disabled(eve, uur) = true;
    console.log(eve.parentNode)
    console.log("button check clicked")
}

// edit buttons starts from here 
function editFunc(uur){
    console.log(uur.parentNode) 
    if (uur.parentNode.childNodes[0].disabled === true) { uur.parentNode.childNodes[0].disabled = false
    } else{
    uur.parentNode.childNodes[0].disabled = false;
    console.log("button edit clicked")
    }
}

function editFunc2(uur){
    console.log(uur.parentNode)
    
    console.log("button edit clicked")
}

// all button func starts from here 
button.addEventListener("click", () => {
    let input = document.createElement('p');
    input.innerHTML = `<input class = "py-2 px-4 rounded" value="${todoCreate.value}" disabled>  <button id="edit" class=" py-2 px-4 rounded bg-primary" onclick="editFunc(this)">  <i class='fas fa-pencil bg-primary'>   </i></button>      <button class=" py-2 px-4 rounded bg-info" onclick="checkFunc(this)">   <i class='fas fa-check bg-info'>    </i>    </button>   <button class=" py-2 px-4 rounded bg-danger" onclick="deleteFunc(this)">    <i class='fas fa-trash bg-danger'>  </i>    </button>`;

    todo.appendChild(input);
    console.log(input);
})

















// Өнөөдөр энийг заавал дуусгана. CSS Transition ашиглаж хийж дуусгана. хичээлээ сайн нухах хэрэгтэй байна.
// Эхлээд эдгээр ойлголтуудыг яг юунд зориулагдсан юуны төлөө гэдгийг мэдэж авах. Бүгдэн дээр нь тэмдэглэл хөтөлж явах хэрэгтэй.  
// оноос өмнө бүч дасгалуудаа дуусгана. 