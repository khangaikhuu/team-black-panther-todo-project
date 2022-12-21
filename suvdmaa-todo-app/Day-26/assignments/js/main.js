let pic1 = document.getElementById('space1')
let pic2 = document.getElementById('space2')
let pic3 = document.getElementById('space3')
let pic4 = document.getElementById('space4')
let pic5 = document.getElementById('space5')


// Annoying way of doing --------------------------------------------------
// pic2.addEventListener('click', () =>{
//     pic1.style = "width: 500px";
//     pic2.style = "width: 2100px";
//     pic3.style = "width: 500px";
//     pic4.style = "width: 500px";
//     pic5.style = "width: 500px";
//     console.log(document.getElementById('container'))

// })

// pic3.addEventListener('click', () =>{
//     pic2.style = "width: 500px";
//     pic3.style = "width: 2100px;"
//     pic4.style = "width: 500px";
//     pic5.style = "width: 500px";
//     pic1.style = "width: 500px";
// })

// pic4.addEventListener('click', () =>{
//     pic3.style = "width: 500px";
//     pic4.style = "width: 2100px;"
//     pic5.style = "width: 500px";
//     pic1.style = "width: 500px";
//     pic2.style = "width: 500px";
// })

// pic5.addEventListener('click', () =>{
//     pic4.style = "width: 500px";
//     pic5.style = "width: 2100px;"
//     pic1.style = "width: 500px";
//     pic2.style = "width: 500px";
//     pic3.style = "width: 500px";
// })

// pic1.addEventListener('click', () =>{
//     pic5.style = "width: 500px";
//     pic1.style = "width: 2100px;"
//     pic2.style = "width: 500px";
//     pic3.style = "width: 500px";
//     pic4.style = "width: 500px";
// })



// More easy way to do it ------------------------------------------------------
const imgContainer = document.getElementById('container')

const children = imgContainer.children;

for (let i = 0; i < children.length; i++) {
    children[i].addEventListener('click', (self) => {
        for (let j = 0; j < children.length; j++) {
            if (i !== j) {
                children[j].style = "width: 300px;"
            }
        }
        self.target.style = "width: 1000px"
    })
}




