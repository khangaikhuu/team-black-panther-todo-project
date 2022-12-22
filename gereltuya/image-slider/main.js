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

// images.forEach(element => {
//   element.classList.remove('active');
// })

// images.forEach(element => {
//   element.addEventListener('click', () => {
//     removeActiveClass();
//     element.classList.add('active');
//   })
// })