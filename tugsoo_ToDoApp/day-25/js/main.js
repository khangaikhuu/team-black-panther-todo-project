/////


let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");


let timer1 = Math.floor(Math.random() * 1000)
let timer2 = Math.floor(Math.random() * 1000)
let timer3 = Math.floor(Math.random() * 1000)
let timer4 = Math.floor(Math.random() * 1000)

function printMeToDom(value, element) {
    element.innerHTML = value

}

//   callback hell


async function change1(text, p1, timer) {
    let getPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            printMeToDom('Зураг авах', p1)
        }, timer1)
    })
    return getPromise
}
// change1(p1)
//     .then((p1) => change1(p1))


async function change2(text, p2, timer) {
    let changePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            printMeToDom('Амжилттай бол зургийг өөрчлөх', p2)
        }, timer2)
    })
    return changePromise
}

// change2(p2)
//     .then((p2) => change2(p2))

async function change3(text, p3, timer) {
    let savePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            printMeToDom('Амжилттай бол амжилттай хадгалах', p3)
        }, timer3)
    })
    return savePromise

}
// change3(p3)
//     .then((p3) => change3(p3))

function change4(text, p4, timer) {
    let successPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (p4 == undefined) {
                reject("something wrong")
            } else {
                resolve(printMeToDom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', p4))

            }

        }, timer4)
    })
    return successPromise
}

// change4(p4)
//     .then((p4) => change3(p4))



// change(result)
//     .then((get) => change1(get))
//     .then((change) => change2(change))
//     .then((save) => change3(save))
//     .then((success) => change4(success))


async function printDomNew() {
    const print1 = await change1("Zurag avah", p1, timer1)
    const print2 = await change2("Amjilltai bol zurgiig uurchluh", p2, timer2)
    const print3 = await change3("Amjilttai bol hadgalah", p3, timer3)
    const print4 = await change4("Amjilttai bol Amjilttai gj hevleh", p4, timer4)

    console.log(print1);
    console.log(print2);
    console.log(print3);
    console.log(print4);
}

printDomNew();




