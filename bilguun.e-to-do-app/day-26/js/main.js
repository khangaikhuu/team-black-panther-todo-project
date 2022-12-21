let a = 10

let promiseFilled = false
let changingVariable;

const myPromise = new Promise((resolved, rejected) => {
    if (promiseFilled) {
        changingVariable = "Promise is fulfilled"
        resolved(changingVariable)
    } else {
        rejected("Promise is not fulfilled")
    }
})

myPromise.then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})

console.log("a")
console.log("b")
console.log("c")


setTimeout(() => {
    for (let i = 0; i < 1_000_000; i++) {
        for (let i = 0; i < 1_000_000; i++) {

        }
    }
}, 5000);

console.log("final")