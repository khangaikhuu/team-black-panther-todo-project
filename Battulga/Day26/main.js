console.log('Day26')


let promiseFulfilled = true
let changingVariable
console.log('first')
console.log(changingVariable)
console.log('first')

const myPromise = new Promise((resolved, rejected) => {
    if (promiseFulfilled) {
        resolved(changingVariable)
    } else {
        rejected('Promise is not fullfiled')
    }
})

myPromise
    .then(result => {
        changingVariable = 'promise is fullfilled'
        console.log('second')
        console.log(changingVariable)
        console.log('second')
    }).catch(e => {
        console.log(e)
    })


console.log('third')
console.log(changingVariable)
console.log('third')


// console.log('a')
// console.log('b')
// console.log('c')
// setTimeout(() => {
// for (let i = 0; i < 1000000; i++) {
//     for (let j = 0; j < 1000000; j++) {
//     }
// }
// }, 5000)

// console.log('final')