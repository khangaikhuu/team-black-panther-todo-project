console.log('slider')

const imgContainer = document.getElementById('img-container');

const children = imgContainer.children;

for(let i = 0; i< children.length; i++){
    if (i === 0) {
        children[i].style = 'width: 500px;'
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