let images = document.querySelectorAll(".picture-area-container");
console.log(images);

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

