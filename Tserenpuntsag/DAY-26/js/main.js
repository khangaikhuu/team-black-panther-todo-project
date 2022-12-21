let promiseFulfilled = false;

const myPromise = new Promise((resolved, rejected) => {
    if (promiseFulfilled){
        resolved("Promise is fullfilled");
    } else {
        rejected("Promise is not fullfilled");
    }
})

myPromise
    .then(result => {
        console.log(result);
    }) .catch(e => {
        console.log(e);
    })

console.log("a");
console.log("b");
console.log("c");

for(let i = 0; i < 1000000; i++){
    for(let j = 0; j < 1000000; j++){

    }
}

console.log("final");