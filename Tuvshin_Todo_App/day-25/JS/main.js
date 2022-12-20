document.getElementById('main1').innerHTML = "neg";
document.getElementById('main2').innerHTML = "hoyor";
document.getElementById('main3').innerHTML = "gurab";
document.getElementById('main4').innerHTML = "duruv";


let timer1 = Math.floor(Math.random() * 1000);
console.log(timer1);

let timer2 = Math.floor(Math.random() * 2000);
console.log(timer2);

let timer3 = Math.floor(Math.random() * 3000);
console.log(timer3);

let timer4 = Math.floor(Math.random() * 5000);
console.log(timer4);


function printMeToDom(value, element) {
    element.innerHTML = value;
}


// setTimeout(() => {
//     printMeToDom('zurag avax', p1);
//     setTimeout(() =>) {
//         printMeToDom('amjilt1', p2);
//         setTimeout(() =>) {
//             printMeToDom('amjilt2', p3)
//             setTimeout(() => {
//                 printMeToDom('amjilt4,', p4)
//             }, paper4);
//         } ,paper3)
//     },paper2
// } ,paper1 )


// setTimeout(() => {
//     printMeToDom('zurag avax', main1)
// }, timer1)

// setTimeout(() => {
//     printMeToDom('zurag avax2', main2)
// }, timer2)

// setTimeout(() => {
//     printMeToDom('zurag avax3', main3)
// }, timer3)

// setTimeout(() => {
//     printMeToDom('zurag avax4', main4)
// }, timer4)


// syntax
// const promise = new Promise((resolve, reject) => {
//     resolve('success')
//     reject('failure')
//     })

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        printMeToDom('zurag avax', main1)
    if ( timer1){
        resolve(main1)
    } else {
        reject('random too baga')
    }
    },3000)

})
console.log(promise);

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        printMeToDom('zurag avax2', main2)
    if ( timer2 > 0){
        resolve(main2)
    } else {
        reject('random too baga')
    }
    },3000)

})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        printMeToDom('zurag avax3', main3)
    if ( timer3 > 0){
        resolve(main3)
    } else {
        reject('random3 too baga')
    }
    },3000)

})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        printMeToDom('zurag avax4', main4)
    if ( timer4 > 0){
        resolve(main4)
    } else {
        reject('random4 too baga')
    }
    },3000)

})



// // Promise
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     const skills = ['html', 'css'];
//     if (skills.length > 0) {
//         resolve(skills);
//     } else {
//         reject("Something wrong has happened");
//     }
//     }, 2000);
// });
 
// console.log(doPromise);

