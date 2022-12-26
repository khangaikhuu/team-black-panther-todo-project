console.log("day-26")

let promiseFulfilled = false;
let changingVariable;
console.log("First")
console.log(changingVariable);
console.log("first")
const myPromise = new Promise((resolved, rejected) => {

    if (promiseFulfilled) {
        changingVariable = "Promise is fullfilled";
        console.log(changingVariable)
        console.log("second")
        resolved(changingVariable);
    } else {
        rejected("Promise is not full filled")
    }
})

myPromise
    .then(result => {
        console.log("Third")
        console.log(result)
        console.log("Third")
    }).catch(e => {
        console.log(e)

    })


console.log("fourth")
console.log(changingVariable)
console.log("fourth")




//

console.log("a");
console.log("b");
console.log("c");



// myPromise.then(result => {
//     for (let i = 0; i < 1_000_000; i++) {
//         for (let j = 0; j < 1_000_000; j++) {

//         }
//     }

// })

setTimeout(() => {
    for (let i = 0; i < 1_000_000; i++) {
        for (let j = 0; j < 1_000_000; j++) {

        }
    }
},5000)

console.log("final")