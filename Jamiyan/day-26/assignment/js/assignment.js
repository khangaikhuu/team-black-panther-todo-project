console.log("assignment");

// img1 = document.getElementById("img1");
// img2 = document.getElementById("img2");
// img3 = document.getElementById("img3");
// img4 = document.getElementById("img4");
// img5 = document.getElementById("img5");

// img2.addEventListener("click", () => {
//     img2.style = "width: 400px; transition-duration: 1s; "
//     img1.style = "width: 200px;  transition-duration: 1s;  "
// })
// img3.addEventListener("click", () => {
//     img3.style = "width: 400px; transition-duration: 1s;"
//     img2.style = "width: 200px; transition-duration: 1s; "
// })
// img4.addEventListener("click", () => {
//     img4.style = "width: 400px; transition-duration: 1s;"
//     img3.style = "width: 200px; transition-duration: 1s;"
// })
// img5.addEventListener("click", () => {
//     img5.style = "width: 400px; transition-duration: 1s;"
//     img4.style = "width: 200px; transition-duration: 1s;"
// })
// img1.addEventListener("click", () => {
//     img5.style = "width: 200px "
//     img4.style = "width: 200px"
//     img3.style = "width: 200px"
//     img2.style = "width: 200px"
//     img1.style = "width: 400px"
// })

const imgContainer = document.getElementById('div');

const children = imgContainer.children;

imgContainer.children[0].style = "width: 300px;"

console.log(imgContainer.children);


for (let i = 0; i < imgContainer.children.length; i++) {
    imgContainer.children[i].addEventListener('click', (self) => {
        self.target.style = "width: 300px; transition-duration: 1s;"
        for(j = 0; j < imgContainer.children.length; j++){
            if(j != i){
            imgContainer.children[j].style = "width:150px; transition-duration: 1s;";
            }
        }
    })
}