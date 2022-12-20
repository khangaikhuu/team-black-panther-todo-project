let p1 = document.getElementById('par1');
let p2 = document.getElementById('par2');
let p3 = document.getElementById('par3');
let p4 = document.getElementById('par4');

let timer1 = Math.floor(Math.random() * 2000);
let timer2 = Math.floor(Math.random() * 2000);
let timer3 = Math.floor(Math.random() * 2000);
let timer4 = Math.floor(Math.random() * 2000);



// setTimeout (() => {
//     printMeToDom('Зураг авах', p1);
//     setTimeout (() => {
//         printMeToDom('Амжилттай бол зургийг өөрчлөх', p2);
//         setTimeout (() => {
//             printMeToDom('Амжилттай бол амжилттай хадгалах', p3);
//             setTimeout (() => {
//                 printMeToDom(' Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', p4)
//             }, timer4)
//         }, timer3)
//     }, timer2)
// }, timer1)

function step1(p1) {
    const doPromise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (p1 == undefined) {
                reject("P1 doesnt exist")
            } else {
                printMeToDom('Зураг авах', p1);
                resolve("Success in P1 printing")
            }
        }, timer1)
    });
    return doPromise1;
}

function step2(p2) {
    const doPromise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (p1 == undefined) {
                reject("P2 doesnt exist")
            } else {
                printMeToDom('Амжилттай бол зургийг өөрчлөх', p2);
                resolve("Success in P2 printing")
            }
        }, timer2)
    });
    return doPromise2;
}


function step3(p3) {
    const doPromise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (p1 == undefined) {
                reject("P3 doesnt exist")
            } else {
                printMeToDom('Амжилттай бол амжилттай хадгалах', p3);
                resolve("Success in P2 printing")
            }
        }, timer3)
    });
    return doPromise3;
}

function step4(p4) {
    const doPromise4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (p1 == undefined) {
                reject("P4 doesnt exist")
            } else {
                printMeToDom(' Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', p4)
                resolve("Success in P2 printing")
            }
        }, timer4)
    });
    return doPromise4;
}



function printMeToDom(str, domID) {
    domID.innerHTML = str;
}


// doPromise
//    .then(result => {
//        console.log(result)
//    })
//    .catch(error => console.log(error))


step1(p1)
    .then((result) => {
        console.log(result)
        return step2(p2)
    })
    .then((result2) => step3(p3))
    .then((result3) => step4(p4))
    .catch((err) => console.log(err));

