//  Slider
const cont = document.getElementById("cont")

function slide (element){
    for(let j = 0; j < element.children.length ; j++){
        element.children[j].addEventListener("click", (self)=> {
            for(let i=0; i < element.children.length; i++){
                element.children[i].style = "width: 200px";
            }
            self.target.style = "width: 700px;";
        })
    }
}
cont.addEventListener('click', slide(cont))