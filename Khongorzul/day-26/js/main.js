let promiseFulfilled = true;
let changingVariable;
console.log("first");
console.log(changingVariable);
console.log("first");

const myPromise = new Promise ((resolved, rejected) => {
    if(promiseFulfilled){

        resolved(changingVariable);
    }
    else{
        rejected("Promise is not fulfilled");
    }
});

myPromise
    .then(result => {
        console.log("second")
        console.log(result)
        console.log("second")
    })
    .catch(e => {
        console.log(e);
    })


console.log("third")
console.log(changingVariable);
console.log("third")

setTimeout(()=> {
    for(let i = 0; i < 1_000_000; i++){
        for(let j = 0; j < 1_000_000; j++){
        
        }
    }
}, 5000)
console.log("a");
console.log("b");
console.log("c");

console.log("final");

