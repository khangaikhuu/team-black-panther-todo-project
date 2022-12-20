
// Дараа нь main.js дотроо тухайн элементүүдээ DOM-оор ялгаж 4 өөр хувьсагчид хадгална уу. 

let p1 = document.getElementById('p-tag-1');
let p2 = document.getElementById('p-tag-2');
let p3 = document.getElementById('p-tag-3');
let p4 = document.getElementById('p-tag-4');


// Шинээр 4 ширхэг Random тоо хадгалдаг 4 хувьсагч тодорхойлно уу. Жишээ нь: timer1, …
// a.Энэхүү утгууддаа 1000 хүртэл Random утгууд хадгална уу. 
// Утгууд нь заавал бүхэл тооо байх ёстой шүү.
let timer1 = Math.round(Math.random() * 1000);
let timer2 = Math.round(Math.random() * 1000);
let timer3 = Math.round(Math.random() * 1000);
let timer4 = Math.round(Math.random() * 1000);


//Main.js дотроо printMeToDom гэдэг function бичнэ үү. 
//Энэ функц нь 2 параметер авдаг бөгөөд эхний параметер нь string төрөлтэй байна. 
//Дараагийнх нь нэг утга ямар нэгэн DOM элемент орж ирнэ гэж төсөөлнө. Тэгээд дараахыг гүйцэтгэнэ үү.
//Функцын дотор 2-р параметрыг ашиглан түүний innerHTML дээр нь эхний параметер болох утгыг оноож өгнө үү.

function printMeToDom(value, domElement){
    domElement.innerHTML = value;
} 

// setTimeOut ашиглан доорх шиг функцээ 4 удаа 4 өөр timer-аар дуудна уу. 
// Доорх жишээг эхлээд сайн харна уу


//callback hell aimshigtai callback tam

setTimeout(() => {
    printMeToDom('Зураг авах', p1)

    setTimeout(() => {
        printMeToDom('Амжилттай бол зургийг өөрчлөх', p2)
     }, timer2)

     setTimeout(() => {
        printMeToDom('Амжилттай бол амжилттай хадгалах', p3)
        setTimeout(() => {
            printMeToDom('Амжилттай хадгалагдлаа', p4)
         }, timer4)
     }, timer3)

 }, timer1)
  
 setTimeout(() => {
    printMeToDom('Амжилттай хадгалагдлаа', p4)
 }, timer4)
 

// function bolon then oroltsulad callback helliig boliulah
 console.log(`Then, function`)

 console.log(`promise`)






 // CHALLANGE STARTED -----------------------------------------------------
 const promise = new Promise ((resolve, reject) => {
     resolve(`success`)
     reject(`failure`)
 })
 console.log(promise);
 
// PROMISE 1 -----------------------------------------------------
const Promise1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        const printMeToDom = (`Zurag avah` , p1)
        if(printMeToDom > 0) {
            resolve(printMeToDom);
        } else {
            reject(`Zurag avagdsangui ymr neg aldaa baina!!!`)
        }
    }, 2000)
})



// Promise 1 function -----------------------------------------------------
console.log(`// Promise 1 function  start----->`)
function getImage(image) {
    let imagePromise1 = new Promise((resolve, reject) => {
        if (image.type != 'p1') {
            reject(image)
        } else {
            resolve('Амжилттай бол зургийг өөрчлөх', p2)
        }
    })
    return imagePromise1
}

console.log (Promise1)

Promise1
    .then(result =>{
        console.log(result)
    })
    .catch(error => console.log(error))

console.log(`// Promise 1 function  end----->`)

// // PROMISE 2 ---------------------------------------------------------------
// const Promise2 = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         const printMeToDom = ('Амжилттай бол зургийг өөрчлөх', p2)
//         if(printMeToDom > 0) {
//             resolve(printMeToDom);
//         } else {
//             reject(`Amjilttai bolsongui zurag uurchlugduh bolomgui !!!`)
//         }
//     }, 2000)
// })

// Promise2
//     .then(result =>{
//         console.log(result)
//     })
//     .catch(error => console.log(error))

// console.log(Promise2);

// // PROMISE 3 ---------------------------------------------------------------
// const Promise3 = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         const printMeToDom = ('Амжилттай бол амжилттай хадгалах', p3)
//         if(printMeToDom > 0) {
//             resolve(printMeToDom);
//         } else {
//             reject(`Amjilttai bolsongui hadgalah bolomjgui !!!`)
//         }
//     }, 2000)
// })

// Promise3
//     .then(result =>{
//         console.log(result)
//     })
//     .catch(error => console.log(error))

// console.log(Promise3);


// addElementsToDom('Зураг авах', p1, timer1) 
// .then((second) => addElementsToDom(('amjilttai', p2, timer2))
// .then((third) => addElementsToDom(('amjilttai', p3, timer3))
// .then((fourth) => console.log(res))
// .catch((err) => console.log(err))
