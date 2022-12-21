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


// const button = document.getElementById("myBtn")


// 
// function set200 (element){
//     for(let i=0; i < element.children.length; i++){
//         element.children[i].style = "width: 200px";
//     }
// }

// image1.addEventListener("click", (self) => {
//     set200(cont)
//     self.target.style = "width: 700px;";
//     // self.target.style = "width: 40vh";
// })
// image2.addEventListener("click", (self) => {
//     set200(cont)
//     self.target.style = "width: 700px";
//     // self.target.style = "width: 40vh";
// })
// image3.addEventListener("click", (self) => {
//     set200(cont)
//     self.target.style = "width: 700px";
//     // self.target.style = "width: 40vh";
// })
// image4.addEventListener("click", (self) => {
//     set200(cont)
//     self.target.style = "width: 700px";
//     // self.target.style = "width: 40vh";
// })
// image5.addEventListener("click", (self) => {
//     set200(cont)
//     self.target.style = "width: 700px";
//     // self.target.style = "width: 40vh";
// })







