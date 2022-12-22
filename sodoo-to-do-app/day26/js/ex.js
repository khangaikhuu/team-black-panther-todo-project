console.log('======Day 26==========');

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

function callMe1(param, timer) {
    const textPromise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (text1 == undefined) {
                reject('Aldaa garlaa');
            } else {
                printMeToDom('Зураг авах', param);
                resolve('print 1 done')
            }
        }, timer)
    })
    return textPromise1;
}

function callMe2(param, timer) {
    const textPromise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (text1 == undefined) {
                reject('Aldaa garlaa');
            } else {
                printMeToDom('Амжилттай бол зургийг өөрчлөх', param);
                resolve('print 2 done')
            }
        }, timer)
    })
    return textPromise2;
}

function callMe3(param, timer) {
    const textPromise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (text1 == undefined) {
                reject('Aldaa garlaa');
            } else {
                printMeToDom('Амжилттай бол амжилттай хадгалах', param);
                resolve('print 3 done')
            }
        }, timer)
    })
    return textPromise3;
}

function callMe4(param, timer) {
    const textPromise4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (text1 == undefined) {
                reject('Aldaa garlaa');
            } else {
                printMeToDom('Амжилттай бол "Амжилттай хадгалагдлаа"', param);
                resolve('print 4 done')
            }
        }, timer)
    })
    return textPromise4;
}


// callMe1(text1, timer1)
//     .then((result1) => callMe2(text2, timer2))
//     .then((result2) => callMe3(text3, timer3))
//     .then((result3) => callMe4(text4, timer4))
//     .catch((error) => console.log(error));




async function printDom() {
    let result1 = await callMe1(text1, timer1);
    let result2 = await callMe2(text2, timer2);
    let result3 = await callMe3(text3, timer3);
    let result4 = await callMe4(text4, timer4);

    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);
}

printDom();