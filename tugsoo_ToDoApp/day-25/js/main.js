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


function change1(p1) {
    let getPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            printMeToDom('Зураг авах', p1)
        }, timer1)
    })
    return getPromise
}
change1(p1)
    .then((p1) => change1(p1))


function change2(p2) {
    let changePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            printMeToDom('Амжилттай бол зургийг өөрчлөх', p2)
        }, timer2)
    })
    return changePromise
}

change2(p2)
    .then((p2) => change2(p2))

function change3(save) {
    let savePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            printMeToDom('Амжилттай бол амжилттай хадгалах', p3)
        }, timer3)
    })
    return savePromise

}
change3(p3)
    .then((p3) => change3(p3))

function change4(success) {
    let successPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            printMeToDom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', p4)
        }, timer4)
    })
    return successPromise
}

change4(p4)
    .then((p4) => change3(p4))



// change(result)
//     .then((get) => change1(get))
//     .then((change) => change2(change))
//     .then((save) => change3(save))
//     .then((success) => change4(success))







