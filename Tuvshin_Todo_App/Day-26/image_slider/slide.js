

let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");

// console.log(image1);
// console.log(image2);
// console.log(image3);
// console.log(image4);

// image1.addEventListener('click', (self) => {
//     console.log('image1 clicked');
//     console.log(self.target);
//     self.target.style = "width: 300px"
// })
// image2.addEventListener('click', (self) => {
//     console.log('image2 clicked');
//     console.log(self.target);
//     self.target.style = "width: 300px;"
// })
// image3.addEventListener('click', (self) => {
//     console.log('image3 clicked');
//     console.log(self.target);
//     self.target.style = "width: 300px"
// })
// image4.addEventListener('click', (self) => {
//     console.log('image4 clicked');
//     console.log(self.target);
//     self.target.style = "width: 300px"
// })



const containerPhoto = document.getElementById('img-container');

const children = containerPhoto.children;

for(let i = 0; i< children.length; i++){
    if (i === 0) {
        children[i].style = 'width: 500px;'
    } else{
        children[i].style = 'width:200px;'
    }
}

console.log(containerPhoto.children);

const button = document.getElementById('my-button');

button.addEventListener('click', () => {
    for (let i = 0; i < containerPhoto.children.length; i++) {
        console.log(containerPhoto.children[i]);
        containerPhoto.children[i].alt='img';
        containerPhoto.children[i].style = 'width: 200px;'

        containerPhoto.children[i].addEventListener('click', (self)=>{
            console.log(self.target)
            self.target.image1
        })
    }
})
