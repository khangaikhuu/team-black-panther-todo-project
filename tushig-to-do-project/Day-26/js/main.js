console.log(`----------day 26---------->`);

let promiseFulfilled = false;
let changingVariable;
console.log(`first`)
console.log(changingVariable)
console.log(`first`)

const myPromise = new Promise((resolved, rejected)=> {
    if(promiseFulfilled) {
        changingVariable = `Promise is fullfilled`;
        resolved(changingVariable)
    } else {
        rejected(`Promise is not full filled`)
    }
})

myPromise 
    .then(result => {

        console.log(`second`)
        console.log(result)
        console.log(`second`)


    }).catch(e => {
        console.log(e)
    })

    console.log(`third`)
    console.log(changingVariable)
    console.log(`third`)




// ASYNC AWAIT
console.log(`ASYNC AWAIT----------->`)


console.log(`a`)
console.log(`b`)
console.log(`c`)

setTimeout(()=> {

    for (let i = 0; i < 1_000_000; i++) {
        for(let j = 0; j < 1_000_000; j++) {
            
        }
    }

}, 3000)

console.log(`final`)



