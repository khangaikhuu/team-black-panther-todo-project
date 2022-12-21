console.log("slider")


// document.getElementsByClassName(col1)[0]
// document.getElementsByClassName(col2)[0]
// document.getElementsByClassName(col3)[0]
// document.getElementsByClassName(col4)[0]
// document.getElementsByClassName(col5)[0]

// let img = document.getElementsByClassName(`col1`)[0];
// img.style = "width:600px"



// let slider = document.getElementsByClassName(`col1`)[0];
// function changeImageSize () {
//     slider.style = "width:600px"
// }
// slider.addEventListener("click", changeImageSize)


// let slider2 = document.getElementsByClassName(`col2`)[0]
// function changeImageSize1 () {
//     slider2.style = "width:200px"
// }
// slider2.addEventListener("click", changeImageSize1)

// let slider3  = document.getElementsByClassName(`col3`)[0]
// function changeImageSize2 () {
//     slider3.style = "width:200px"
// }
// slider3.addEventListener("click", changeImageSize2)

// let slider4  = document.getElementsByClassName(`col4`)[0]
// function changeImageSize3 () {
//     slider4.style = "width:200px"
// }
// slider4.addEventListener("click", changeImageSize3)

// let slider5  = document.getElementsByClassName(`col5`)[0]
// function changeImageSize4 () {
//     slider5.style = "width:200px"
// }
// slider5.addEventListener("click", changeImageSize4)

// shinee ehlev 



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
            self.target.src="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=971&q=80";
        })
    }
})

