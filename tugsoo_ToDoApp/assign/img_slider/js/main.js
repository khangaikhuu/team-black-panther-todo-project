// 

console.log('slider')

const imgContainer = document.getElementById('container');

const children = imgContainer.children;

for(let i = 0; i< children.length; i++){
    if (i === 0) {
        children[i].style = 'width: 400px; height: 400px; border-radius: 50px'
    } else{
        children[i].style = 'width:200px; height:400px; border-radius: 50px'
    }
}

console.log(imgContainer.children);

const img2 = document.getElementById('pic2');

img2.addEventListener('click', (self) => {
    console.log(self.target);
    for (let i = 0; i < imgContainer.children.length; i++) {
        console.log(imgContainer.children[i]);
        imgContainer.children[i].alt='img';
        imgContainer.children[i].style = 'width:200px; height:400px; border-radius: 50px'

        imgContainer.children[i].addEventListener('click', (self)=>{
            console.log(self.target)
            
        })
    }
    self.target.style = 'width:400px; height:400px; border-radius: 50px'

})




