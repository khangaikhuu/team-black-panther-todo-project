// let img1 = document.getElementById("img1")
// let img2 = document.getElementById("img2")
// let img3 = document.getElementById("img3")
// let img4 = document.getElementById("img4")
// let img5 = document.getElementById("img5")

// const container = document.getElementById("container")

// function slide (element){
//     for(let j = 0; j < element.children.length ; j++){
//         element.children[j].addEventListener("click", (self)=> {
//             for(let i=0; i < element.children.length; i++){
//                 element.children[i].style = "width: 200px";
//             }
//             self.target.style = "width: 700px;";
//         })
//     }
// }
// container.addEventListener('click', slide(container))

let images = document.querySelectorAll(".imgAll");

function removeActiveClass() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active')
  }
}

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', () => {
    removeActiveClass();
    images[i].classList.add('active');
  })
}
