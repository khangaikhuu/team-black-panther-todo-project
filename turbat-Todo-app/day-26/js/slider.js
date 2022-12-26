// function changeSize(newSize) {
//     const elem = document.getElementById("img1");
//     elem.style.width = newSize;
// }

// for(let i = 0; i<6; i++){
//     const elem = document.getElementById("img" + [i]);
//     elem.style.width = newSize;
// }

// function changeSize(newSize) {
//     const elem = document.getElementById("img1");
//     elem.style.width = newSize;
// }




// const img1 = document.getElementById("img1")
// const img2 = document.getElementById("img2")
// const img3 = document.getElementById("img3")
// const img4 = document.getElementById("img4")
// const img5 = document.getElementById("img5")



const imgContainer = document.getElementById('img-container');
const children = imgContainer.children;

console.log(children)



for(let i = 0;i <= children.length; i++) {
    if (i === 0) {
        children[i].style = 'width: 500px;'
    } else{
        children[i].style = 'width:200px;'
    }
}

function img2 () {
    const img2 = document.addEventListener("click").style ="width:100px"
}

