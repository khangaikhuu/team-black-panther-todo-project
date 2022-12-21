console.log("Day 25");

let p1 = document.getElementById("one");
let p2 = document.getElementById("two");
let p3 = document.getElementById("three");
let p4 = document.getElementById("four");
let p5 = document.getElementById('error');

let timer1 = Math.floor(Math.random() * 2000);
let timer2 = Math.floor(Math.random() * 2000);
let timer3 = Math.floor(Math.random() * 2000);
let timer4 = Math.floor(Math.random() * 2000);

function printMeToTom(str,ele) {
    ele.innerHTML = str;
}

// setTimeout(() => {
//     printMeToTom('Zurag avah', p1);
//     setTimeout(() => {
//         printMeToTom('Амжилттай бол зургийг өөрчлөх', p2);
//         setTimeout(() => {
//             printMeToTom('Амжилттай бол амжилттай хадгала', p3);
//             setTimeout(() => {
//                 printMeToTom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', p4)
//             }, timer4)
//         }, timer3)
//     }, timer2)
// }, timer1)

// setTimeout(() => {
//     printMeToTom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', p4)
// }, 3000)

// setTimeout(() => {
//     console.log("a");
//     console.log("b");
//     console.log("c");
// }, 5000);



// function zuragAvah(image) {
//     let imagePromise = new Promise((resolve,reject) => {
//         if(image.type !="png") {
//             reject(alert("Zuvhun PNG zurag oruulna uu"));
//         } else {
//             resolve(image);
//         }
//     });
//     return imagePromise;
// }


// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         function zuragAvah(image) {
//             let imagePromise = new Promise((resolve,reject) => {
//                 if(image.type !="png") {
//                     reject(alert("Zuvhun PNG zurag oruulna uu"));
//                 } else {
//                     resolve(printMeToTom('Zurag avah', p1));
//                 }
//             });
//             return imagePromise;
//         }
//     }, 2000);
// })

// function zuragAvah(){
//     const zuragPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(printMeToTom('Zurag avah', p1))
//         }, timer1);
//     })
//     return zuragPromise;
// };


// function changeZurag() {
//     const changePromise = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(printMeToTom('Амжилттай бол зургийг өөрчлөх', p1))
//         }, timer2);
//     })
//     return changePromise;
// }


// function saveZurag() {
//     const savePromise = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(printMeToTom('Амжилттай бол амжилттай хадгалаa', p1))
//         }, timer3);
//     })
//     return savePromise;
// }

// function finalZurag() {
//     const finalPromise = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(printMeToTom('Амжилттай бол "Амжилттай хадгалагдлаа', p1))
//         }, timer4);
//     })
//     return finalPromise;
// }


// // zuragAvah()
// //     .then(zuragPromise => changeZurag())
// //     .then(changePromise => saveZurag())
// //     .then(savePromise => finalZurag())

function addElementsToDom (command, element, timer) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(element !== undefined) {
                printMeToTom(command, element)
                resolve(command)
            } else {
                reject('aldaa ')
            }
        }, timer)
    })
    return promise;
}

addElementsToDom('Зураг авах', p1, timer1)
    .then((second) => addElementsToDom('Амжилттай бол зургийг өөрчлөх', p2, timer2))
    .then((third) => addElementsToDom('Амжилттай бол амжилттай хадгалах', p3, timer3))
    .then((fourth) => addElementsToDom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', p4, timer4))
    .catch(error => addElementsToDom(error, p5, timer1))