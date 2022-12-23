let images = document.getElementById("images");
let childrens = images.children;
console.log(childrens);

for(let i = 0; i < childrens.length; i++){
    childrens[i].addEventListener("click", (self) => {
        for(let j = 0; j < childrens.length; j++){
            if(j !== i){
                childrens[j].style = "width: 200px";
            }
        }
        self.target.style = "width: 1000px";
    })               
}