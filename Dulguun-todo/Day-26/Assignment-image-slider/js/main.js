const imgContainer = document.getElementById('container');

//B.Bilguun version
// function setWidth300px(element) {
//     for (let i = 0; i < element.children.length; i++) {
//         element.children[i].style = 'width: 300px';
//     }
// }

// function slide (element) {
//     for (let n = 0; n <element.children.length; n++) {
//         element.children[n].addEventListener('click', (self) => {
//             setWidth300px(imgContainer)
//             self.target.style = 'width: 800px'
//         })
//     }
// }
// imgContainer.addEventListener('click', slide(imgContainer));

//Khongorzul version
let imgContainerChildren = imgContainer.children;

for(let i = 0; i < imgContainerChildren.length; i++){
    imgContainerChildren[i].addEventListener("click", (self) => {
        for(let j = 0; j < imgContainerChildren.length; j++){
            if(j !== i){
                imgContainerChildren[j].style = "width: 300px";
            }
        }
        self.target.style = "width: 800px";
    })               
}







// photo2.addEventListener('click', (self) => {
//     setWidth300px(imgContainer)
//     self.target.style = "width : 800px";
// })
// photo3.addEventListener('click', (self) => {
//     setWidth300px(imgContainer)
//     self.target.style = "width : 800px";
// })
// photo4.addEventListener('click', (self) => {
//     setWidth300px(imgContainer)
//     self.target.style = "width : 800px";
// })
// photo5.addEventListener('click', (self) => {
//     setWidth300px(imgContainer)
//     self.target.style = "width : 800px";
// })
// photo1.addEventListener('click', (self) => {
//     setWidth300px(imgContainer)
//     self.target.style = "width : 800px";
// })


// for(let i = 0; i< children.length; i++){
//     if (i === 0) {
//         children[i].style = 'width: 500px;'
//     } else{
//         children[i].style = 'width:300px;'
//     }
// }

// photo2.addEventListener('click', () => {
//     document.getElementById("photo1").style.width = "300px"
//     document.getElementById("photo2").style.width = "800px"
//     document.getElementById("photo3").style.width = "300px"
//     document.getElementById("photo4").style.width = "300px"
//     document.getElementById("photo5").style.width = "300px"
// })
// photo3.addEventListener('click', () => {
//     document.getElementById("photo1").style.width = "300px"
//     document.getElementById("photo2").style.width = "300px"
//     document.getElementById("photo3").style.width = "800px"
//     document.getElementById("photo4").style.width = "300px"
//     document.getElementById("photo5").style.width = "300px"
// })
// photo4.addEventListener('click', () => {
//     document.getElementById("photo1").style.width = "300px"
//     document.getElementById("photo2").style.width = "300px"
//     document.getElementById("photo3").style.width = "300px"
//     document.getElementById("photo4").style.width = "800px"
//     document.getElementById("photo5").style.width = "300px"
// })
// photo5.addEventListener('click', () => {
//     document.getElementById("photo1").style.width = "300px"
//     document.getElementById("photo2").style.width = "300px"
//     document.getElementById("photo3").style.width = "300px"
//     document.getElementById("photo4").style.width = "300px"
//     document.getElementById("photo5").style.width = "800px"
// })
// photo1.addEventListener('click', () => {
//     document.getElementById("photo1").style.width = "800px"
//     document.getElementById("photo2").style.width = "300px"
//     document.getElementById("photo3").style.width = "300px"
//     document.getElementById("photo4").style.width = "300px"
//     document.getElementById("photo5").style.width = "300px"
// })
