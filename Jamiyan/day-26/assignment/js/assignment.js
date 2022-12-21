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

for(let i = 0; i< children.length; i++){
    if (i === 0) {
        children[i].style = 'width: 400px;'
    } else{
        children[i].style = 'width:200px;'
    }
}

console.log(imgContainer.children);

const button = document.getElementById('my-button');

button.addEventListener('click', () => {
    for (let i = 0; i < imgContainer.children.length; i++) {
        console.log(imgContainer.children[i]);
        imgContainer.children[i].alt='img';
        imgContainer.children[i].style = 'width: 200px;'

        imgContainer.children[i].addEventListener('click', (self)=>{
            console.log(self.target)
            self.target.src="https://images.unsplash.com/photo-1671533418073-6b39f9163e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80";
        })
    }
})