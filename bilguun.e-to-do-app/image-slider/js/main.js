
// const imgContainer = document.getElementById('img-container');

// const children = imgContainer.children;

// const button1 = document.getElementById('img1');


// function makeSmall() {
//     imgContainer.children.style = "200px"
// }

// button1.addEventListener('click', (self) => {
//     imgContainer.children[0].alt = 'img';
//     makeSmall()
//     self.target.style = "width:500px; transition: width 500ms, ease-in;"
// })

// const button2 = document.getElementById("img2")

// button2.addEventListener('click', (self) => {
//     imgContainer.children[1].alt = 'img';
//     makeSmall()
//     self.target.style = "width:500px"
    
// })
// const button3 = document.getElementById("img3")

// button3.addEventListener('click', (self) => {
//     imgContainer.children[2].alt = 'img';
//     self.target.style = "width:500px"
// })
// const button4 = document.getElementById("img4")

// button4.addEventListener('click', (self) => {
//     imgContainer.children[3].alt = 'img';
//     self.target.style = "width:500px"

// })
// const button5 = document.getElementById("img5")

// button5.addEventListener('click', (self) => {
//     imgContainer.children[4].alt = 'img';
//     self.target.style = "width:500px"
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

let resetBtn = document.getElementById("resetBtn")

resetBtn.addEventListener("click", removeActiveClass)