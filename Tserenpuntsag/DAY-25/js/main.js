let p1 = document.getElementById("p-one");
let p2 = document.getElementById("p-two");
let p3 = document.getElementById("p-three");
let p4 = document.getElementById("p-four");

let r1 = Math.floor(Math.random() * 1000);
let r2 = Math.floor(Math.random() * 1000);
let r3 = Math.floor(Math.random() * 1000);
let r4 = Math.floor(Math.random() * 1000);
console.log(r1, r2, r3, r4);



// setTimeout(() => {
//     printMeToDom('Зураг авах', p1)

//     setTimeout(() => {
//         printMeToDom('Амжилттай бол зургийг өөрчлөх', p2)

//         setTimeout(() => {
//             printMeToDom('Амжилттай бол амжилттай хадгалах', p3)

//             setTimeout(() => {
//                 printMeToDom('Амжилттай хадгалагдлаа', p4)
//             }, r4)
//         }, r3)
//     }, r2)
// }, r1)


// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = [];
//         if (skills.length > 0) {
//             resolve(skills);
//         } else {
//             reject("Something wrong has happened");
//         }
//     }, p1);
// });

// doPromise
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => console.log(error))


function printMeToDom(str, element) {
    element.innerHTML = str;
}

function firstLap() {
    const doPromise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            const t1 = "";
            if (t1 !== undefined) {
                resolve(printMeToDom('Зураг авах', p1));
            } else {
                reject("Something wrong has happened");
            }
        }, r1);
    })
    return doPromise1;
}

function secondLap() {
    const doPromise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            const t2 = "";
            if (t2 !== undefined) {
                resolve(printMeToDom('Амжилттай бол зургийг өөрчлөх', p2));
            } else {
                reject("Something wrong has happened");
            }
        }, r2);
    })
    return doPromise2;
}

function thirthLap() {
    const doPromise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            const t3 = "";
            if (t3 !== undefined) {
                resolve(printMeToDom('Амжилттай бол амжилттай хадгалах', p3));
            } else {
                reject("Something wrong has happened");
            }
        }, r3);
    })
    return doPromise3;
}
function fourthLap() {
    const doPromise4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            const t4 = "";
            if (t4 !== undefined) {
                resolve(printMeToDom('Амжилттай хадгалагдлаа', p4));
            } else {
                reject("Something wrong has happened");
            }
        }, r4);
    })
    return doPromise4;
}

// firstLap()
//     .then(doPromise1 => secondLap())
//     .then(doPromise2 => thirthLap())
//     .then(doPromise3 => fourthLap())
//     .catch(error => console.log(error));

async function printResult (){
    const first = await firstLap(p1)
    const second = await secondLap(p2)
    const thirth = await thirthLap(p3)
    const fourth = await fourthLap(p4)
}

printResult();