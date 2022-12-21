// console.log("exercise01");

// const imgContainer = document.getElementById("img-container");

// const imgChildren = imgContainer.children;


// for(let i = 0; i < imgChildren.length; i++ ){
//     if(i === 0){
//         imgChildren[i].style = "width: 500px;"
        
//     } else {
//         imgChildren[i].style = "width: 200px;"
//     }
// }

// console.log(imgContainer.children);
// let button = document.getElementById("myButton");

// button.addEventListener("click", () => {

//     for(let i = 0; i < imgContainer.children.length; i++){
//         console.log(imgContainer.children[i]);
//         imgContainer.children[i].alt = "img";


//         imgContainer.children[i].addEventListener("click", (self) =>{
//             console.log(self.target);
//         })
//     }
    
// })



let images = document.querySelectorAll(".image");

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


