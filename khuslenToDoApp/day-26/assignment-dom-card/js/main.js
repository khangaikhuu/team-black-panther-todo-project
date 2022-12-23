let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")
let img5 = document.getElementById("img5")
const container = document.getElementById("container")

// console.log(img1)
// console.log(img2)
// console.log(img3)
// console.log(img4)
// console.log(img5)

// function set200(element) {
//     for (let i = 0; i < element.children.length; i++) {
//         element.children[i].style = "width: 200px";
//     }
// }
function slide(element) {
    for (let j = 0; j < element.children.length; j++) {
        element.children[j].addEventlistener("click", (self) => {
            for (let i = 0; i < element.children.length; i++) {
                element.children[i].style = "width: 200px";
            }
            self.target.style = "width: 700px"

        })
    }
}

// const img= document.createElement("img")
// img.src= 'https://images.unsplash.com/photo-1601887389937-0b02c26b602c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80';
// img1.appendChild(img)

// const png= document.createElement("img")
// img.src= 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1386&q=80';
// img2.appendChild(img)


// const png2= document.createElement("img")
// img.src= 'https://images.unsplash.com/photo-1574184824703-1975db1d55e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2003&q=80';
// img3.appendChild(img)


// const png3= document.createElement("img")
// img.src= 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1781&q=80';
// img4.appendChild(img)


// const png4= document.createElement("img")
// img.src= 'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80';
// img5.appendChild(img)




