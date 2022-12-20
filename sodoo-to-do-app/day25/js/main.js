console.log('======Day 25==========');

let text1 = document.getElementById('text1')
let text2 = document.getElementById('text2')
let text3 = document.getElementById('text3')
let text4 = document.getElementById('text4')

let timer1 = Number(Math.floor(Math.random() * 2000) + 1);
let timer2 = Number(Math.floor(Math.random() * 2000) + 1);
let timer3 = Number(Math.floor(Math.random() * 2000) + 1);
let timer4 = Number(Math.floor(Math.random() * 2000) + 1);

function printMeToDom(text, element) {
    element.innerHTML = text;
}

// setTimeout(() => {
//     printMeToDom('Зураг авах', text1);
//     setTimeout(() => {
//         printMeToDom('Амжилттай бол зургийг өөрчлөх', text2);
//         setTimeout(() => {
//             printMeToDom('Амжилттай бол амжилттай хадгалах', text3);
//             setTimeout(() => {
//                 printMeToDom('Амжилттай бол "Амжилттай хадгалагдлаа"', text4);
//             }, timer4);
//         }, timer3);
//     }, timer2);
// }, timer1);


// function printMeToDom(text1, element) {
//     let textPromise1 = new Promise((resolve, reject) = {

//     })
//     return textPromise1;
// }

function callMe1(param, timer) {
    const textPromise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (text1 == undefined) {
                reject('Aldaa garlaa');
            } else {
                resolve(printMeToDom('Зураг авах', param))

            }
        }, timer)
    })
    return textPromise1;
}

function callMe2(param, timer) {
    const textPromise2 = new Promise((resolve, reject) => {
        setTimeout(() => {


            resolve(printMeToDom('Амжилттай бол зургийг өөрчлөх', param))
        }, timer)
    })
    return textPromise2;
}

function callMe3(param, timer) {
    const textPromise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            printMeToDom('Амжилттай бол амжилттай хадгалах', param)
            resolve()
        }, timer)
    })
    return textPromise3;
}

function callMe4(param, timer) {
    const textPromise4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(printMeToDom('Амжилттай бол "Амжилттай хадгалагдлаа"', param))

        }, timer)
    })
    return textPromise4;
}





callMe1(text1, timer1)
    .then((result1) => callMe2(text2, timer2))
    .then((result2) => callMe3(text3, timer3))
    .then((result3) => callMe4(text4, timer4))
    .catch((error) => console.log(error));






