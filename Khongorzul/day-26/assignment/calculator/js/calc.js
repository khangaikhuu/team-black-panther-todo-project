const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator-body");

keys.addEventListener("click", e => {
    if(e.target.mathces("button")){

    }
})

const key = e.target;
const action = key.dataset.action;

if(!action){
    
}

if(action === "add" || action === "subtract" || action === "multiply" || action === "divide"){

}