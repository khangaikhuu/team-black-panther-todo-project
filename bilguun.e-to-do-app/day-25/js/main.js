let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")
let p3 = document.querySelector("#p3")
let p4 = document.querySelector("#p4")

let timer1 = Math.ceil(Math.random() * 5000)
let timer2 = Math.ceil(Math.random() * 5000)
let timer3 = Math.ceil(Math.random() * 5000)
let timer4 = Math.ceil(Math.random() * 5000)

function printMeToDom(x, y) {
    y.innerHTML = x
}

// setTimeout(() => {
//     printMeToDom("Зураг авах", p1);
//     setTimeout(() => {
//         printMeToDom("Амжилттай бол зургийг өөрчлөх", p2);
//         setTimeout(() => {
//             printMeToDom("Амжилттай бол амжилттай хадгалах", p3);
//             setTimeout(() => {
//                 printMeToDom("Амжилттай бол 'Амжилттай хадгалагдлаа' гэж хэвлэх", p4)
//             }, timer4);
//         }, timer3);
//     }, timer2);
// }, timer1);

function callFirst(timer, element) {
    const startPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element !== undefined) {
                resolve(printMeToDom("Зураг авах", element))
            } else {
                reject("Something wrong has happened")
            }
        }, timer)
    })

    return startPromise
}

function callSecond(timer, element) {
    const startPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element !== undefined) {
                resolve(printMeToDom("Амжилттай бол зургийг өөрчлөх", element))
            } else {
                reject("Something wrong has happened")
            }
        }, timer)
    })

    return startPromise
}

function callThird(timer, element) {
    const startPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element !== undefined) {
                resolve(printMeToDom("Амжилттай бол амжилттай хадгалах", element))
            } else {
                reject("Something wrong has happened")
            }
        }, timer)
    })

    return startPromise
}

function callFourth(timer, element) {
    const startPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element !== undefined) {
                resolve(printMeToDom("Амжилттай бол 'Амжилттай хадгалагдлаа' гэж хэвлэх", element))
            } else {
                reject("Something wrong has happened")
            }
        }, timer)
    })

    return startPromise
}


callFirst(timer1, p1).then(result => console.log(p1))
callSecond(timer2, p2).then(result => console.log(p2))
callThird(timer3, p3).then(result => console.log(p3))
callFourth(timer4, p4).then(result => console.log(p4))