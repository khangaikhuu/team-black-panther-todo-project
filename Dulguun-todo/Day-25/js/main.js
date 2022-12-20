console.log("Day 25");

let p1 = document.getElementById("one");
let p2 = document.getElementById("two");
let p3 = document.getElementById("three");
let p4 = document.getElementById("four");

let timer1 = Math.floor(Math.random() * 3000);
let timer2 = Math.floor(Math.random() * 3000);
let timer3 = Math.floor(Math.random() * 3000);
let timer4 = Math.floor(Math.random() * 3000);

function printMeToTom(str,call) {
    call.innerHTML = str;
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

function zuragAvah(){
    const zuragPromise = new Promise((resolve, reject) => {
        resolve(
            setTimeout(printMeToTom('zurag avah', p1), 2000)
        );
    })
    return zuragPromise;
};


function changeZurag() {
    const changePromise = new Promise((resolve) => {
        resolve(
            setTimeout(printMeToTom('Амжилттай бол зургийг өөрчлөх', p2), 2000)
        );
    })
    return changePromise;
}


function saveZurag() {
    const savePromise = new Promise((resolve) => {
        resolve(
            setTimeout(printMeToTom('Амжилттай бол амжилттай хадгала', p3), timer3)
        );
    })
    return savePromise;
}

function finalZurag() {
    const finalPromise = new Promise((resolve) => {
        resolve(
            setTimeout(printMeToTom('Амжилттай бол "Амжилттай хадгалагдлаа', p4), timer4)
        );
    })
    return finalPromise;
}


zuragAvah()
    .then(zuragPromise => changeZurag())