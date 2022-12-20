
let tag1 = document.getElementById('tag1')
let tag2 = document.getElementById('tag2')
let tag3 = document.getElementById('tag3')
let tag4 = document.getElementById('tag4')


let timer1 = Math.floor(Math.random() * 5000)
let timer2 = Math.floor(Math.random() * 5000)
let timer3 = Math.floor(Math.random() * 5000)
let timer4 = Math.floor(Math.random() * 5000)

function printMeToDom(value, element) {
    element.innerHTML = value
}

setTimeout(() => {
    printMeToDom('Зураг авах', tag1)
    setTimeout(() => {
        printMeToDom('Амжилттай бол зургийг өөрчлөх', tag2)
        setTimeout(() => {
            printMeToDom('Амжилттай бол амжилттай хадгалах', tag3)
            setTimeout(() => {
                printMeToDom('Амжилттай бол Амжилттай хадгалагдлаа" гэж хэвлэх', tag4)
            }, timer4)
        }, timer3)
    }, timer2)
}, timer1)



function Promise() {
let doPromise = new Promise ((resolve, reject) => {
    setTimeout(() =>{
    if (tag1 != undefined) {
        resolve(printMeToDom('Зураг авах', tag1))
    } else {
        reject('something wrong')
    }
    }, Math.floor(Math.random() * 3000))
})
}

// let doPromise2 = new Promise ((resolve, reject) => {

//     setTimeout(() =>{
//     if (tag1 != undefined) {
//         resolve(printMeToDom('Амжилттай бол зургийг өөрчлөх', tag2))
//     } else {
//         reject('something wrong')
//     }
//     }, Math.floor(Math.random() * 3000))
// })

// let doPromise3 = new Promise ((resolve, reject) => {

//     setTimeout(() =>{
//     if (tag1 != undefined) {
//         resolve(printMeToDom('Амжилттай бол амжилттай хадгалах', tag3))
//     } else {
//         reject('something wrong')
//     }
//     }, Math.floor(Math.random() * 3000))
// })

// let doPromise4 = new Promise ((resolve, reject) => {

//     setTimeout(() =>{
//     if (tag1 != undefined) {
//         resolve(printMeToDom('Амжилттай бол Амжилттай хадгалагдлаа" гэж хэвлэх', tag4))
//     } else {
//         reject('something wrong')
//     }
//     }, Math.floor(Math.random() * 3000))
// })






// function printMeToDom()


// getImage(newObjImage, (rightTypeImage, err) => {
//     if (err.length > 0) return err;
//     reSizeImage(rightTypeImage, (resizedImage, err) => {
//         if (err.length > 0) return err;
//         saveImage(resizedImage, (savedImage, err) => {
//             if (err.length > 0) return err;
//             alert("Success");
//         });
//     });
// });


// function getImage(image) {
//     let imagePromise = new Promise((resolve, reject) => {
//         if (image.type != "png") {
//             reject("PNG файл биш байна");
//         } else {
//             resolve(image);
//         }
//     });
//     return imagePromise;
// }

// getImage(newObjImage)
//     .then((image) => console.log(image))
//     .catch((err) => console.log(err));


    




// const promise = new Promise ()

// > new Promise(() => {})

// const promise = new Promise((resolve, reject) => {
//     resolve('success')
//     reject('failure')
// })
