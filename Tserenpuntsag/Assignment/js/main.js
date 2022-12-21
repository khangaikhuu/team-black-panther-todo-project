
let container = document.getElementById("bigDiv");

console.log(container.children)

function firstFunc(element) {
    for (let i = 0; i <= element.children.length; i++) {
        element.children[i].addEventListener("click", (self) =>{
            for(let j = 0; j < element.children.length; j++){
                element.children[j].style = "width: 150px";
            }
            self.target.style = "width: 400px";
        })
    }
}
container.addEventListener("click", firstFunc(container))




