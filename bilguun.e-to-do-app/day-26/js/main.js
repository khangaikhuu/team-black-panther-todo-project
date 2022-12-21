let a = 10

let promiseFilled = true
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



console.log("final")
async function printMyPromise() {
    const result = await myPromise
    console.log(result)
}
printMyPromise()