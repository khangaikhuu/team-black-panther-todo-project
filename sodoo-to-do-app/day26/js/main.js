console.log('day-26');

// let promiseFullFilled = true;

// let changingVariable;
// console.log('first');
// console.log(changingVariable);
// console.log('first');

// const myPromise = new Promise((resolved, rejected) => {
//     if (promiseFullFilled) {


//         resolved('Promise is full filled');
//         console.log(changingVariable);



//         resolved(changingVariable);
//     } else {
//         rejected('Promise is not full filled')
//     }
// })


// myPromise
//     .then(result => {
//         console.log('second');
//         console.log(result);
//         console.log('second');

//     }).catch(e => {
//         console.log(e);
//     })

// console.log('third');
// console.log(changingVariable);
// console.log('third');

// if (changingVariable !== undefined) {
//     console.log('its ok');
// }



// const myPromise = new Promise((resolved, rejected) => {
//     if (promiseFullFilled) {
//         resolved('Promise is full filled');
//     } else {
//         rejected('Promise is not full filled')
//     }
// })

// myPromise.then(result => {
//     console.log('result');
// }).catch(e => {
//     console.log(e);
// })

// myPromise.then(result => {
//     console.log('result');
// }).catch(e => {
//     console.log(e);
// })



console.log('a');
console.log('b');
console.log('c');

setTimeout(() => {
    for (let i = 0; i < 1_000_000; i++) {
        for (let j = 0; j < 1_000_000; j++) {

        }
    }
}, 5000)


console.log('final');