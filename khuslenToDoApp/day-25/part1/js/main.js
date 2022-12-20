
let p1 = document.getElementById("pa1");
let p2 = document.getElementById("pa2");
let p3 = document.getElementById("pa3");
let p4 = document.getElementById("pa4");

let Rdm1 = Math.floor(Math.random() * 1000);
let Rdm2 = Math.floor(Math.random() * 1000);
let Rdm3 = Math.floor(Math.random() * 1000);
let Rdm4 = Math.floor(Math.random() * 1000);

function printMeToDom(star, asd) {
    asd.innerHTML = star;
}


function firstPromise() {
    let FP = new Promise((resolve, reject) => {
        setTimeout(() => {
            printMeToDom("Зураг авах", p1);
        }, Rdm1);
        
    });
    return FP
}
function secondPromise() {
    let SP = new Promise((resolve, reject) => {
        setTimeout(() => {
            printMeToDom("Амжилттай бол зургийг өөрчлөх", p2);
        }, Rdm2)
        
    });
    return SP
}
function thirdPromise() {
    let TP = new Promise((resolve, reject) => {
        setTimeout(() => {
            printMeToDom("Амжилттай бол амжилттай хадгалах", p3);
        }, Rdm3)
        
    });
    return TP
}

function fourthPromise() {
    let FoP = new Promise((resolve, reject) => {
        setTimeout(() => {
            printMeToDom("Амжилттай хадгалагдлаа", p4)
        }, Rdm4)
        
    });
    return FoP
}


firstPromise()
    .then(FP => secondPromise())
    .then(SP => thirdPromise())
    .then(TP => fourthPromise())


// const firstPromise = new Promise((resolve, reject))=> {
//     setTimeout(() => {
//         resolve()
//     })
// }
// firstPromise.then