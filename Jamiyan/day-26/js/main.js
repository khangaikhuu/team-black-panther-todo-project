console.log("day-26")

let promisedFulfilled = false;
let changingVariable;
console.log(changingVariable)

const myPromise = new Promise((resolved, rejected) => {
    if (promisedFulfilled) {
        changingVariable = "Promise is fullfilled";
        resolved(changingVariable);
    } else {
        rejected("Promise is not full filled");
    }
})

myPromise.then(result => {  //.then hamgiin suuld hevlegddeg
    console.log(result);
}).catch(err => {
    console.log(err);
})


console.log("a");
console.log("b");
console.log("c");

setTimeout(() => {
    for (i = 0; i < 1_000_000; i++) {
        for (j = 0; j < 1_000_000; j++) {

        }
    }
}, 5000)

console.log("final");