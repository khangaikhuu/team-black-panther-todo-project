let first = document.getElementById("first")
let second = document.getElementById("second")
let third = document.getElementById( "third")
let fourth = document.getElementById("fourth")


let timer1 = Math.round(Math.random()*1000);
let timer2 = Math.round(Math.random()*1000);
let timer3 = Math.round(Math.random()*1000);
let timer4 = Math.round(Math.random()*1000);
console.log(timer1);
console.log(timer2);
console.log(timer3);
console.log(timer4);


function printMeDom(str,first) {
    first.innerHTML = str;
    
}


// setTimeout(() => {
//     printMeDom("Zurag darah" ,first);
    
// }, timer1)
// setTimeout(() => {
//     printMeDom("Амжилттай бол зургийг өөрчлөх" ,second);
    
// }, timer2)
// setTimeout(() => {
//     printMeDom("Амжилттай бол амжилттай хадгалах" ,third);
    
// }, timer3)
// setTimeout(() => {
//     printMeDom("Амжилттай бол Амжилттай хадгалагдлаагэж хэвлэх" ,fourth);
    
// }, timer4)


    const firstPromise = new Promise ((resolve, reject) => {
        if (first == undefined) {
            reject("nah")
        } else {
            resolve(printMeDom)
        }
    
    },timer1)

    const secondPromise = new Promise ((resolve, reject) => {
        if (second == undefined) {
            reject("nah")
        } else {
            resolve(printMeDom)
        }
    
    },timer2)

    const thirdPromise = new Promise ((resolve, reject) => {
        if (third ==undefined) {
            reject("nah")
        } else {
            resolve(printMeDom)
        }
    
    })
    const fourthPromise = new Promise ((resolve, reject) => {
        if (fourth == undefined) {
            reject("nah")
        } else {
            resolve(printMeDom)
        }
    
    })





.then((timer1) => setTimeout(timer1))
.then((str) => printMeDom("Zurag darah" ,first))
.then((timer2) => setTimeout(timer2))
.then((str) => printMeDom("Амжилттай бол зургийг өөрчлөх" ,second))
.then((timer3) => setTimeout(timer3))
.then((str) => printMeDom("Амжилттай бол амжилттай хадгалах" ,third))
.then((timer4) => setTimeout(timer4))
.then((str) => printMeDom("Амжилттай бол Амжилттай хадгалагдлаагэж хэвлэх" ,fourth))












// const promise = printMeDom();
// const promise2 = promise.then(printMeDom);
// const promise3 = promise.then(printMeDom);