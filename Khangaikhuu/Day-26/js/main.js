console.log('day 26')

let promiseFulfilled = true;
let changingVariable;
console.log('first')
console.log(changingVariable)
console.log('first')

const myPromise = new Promise((resolved, rejected) => {
    if (promiseFulfilled) {
        resolved(changingVariable);
    } else {
        rejected('Promise is not full filled');
    }
})

myPromise
    .then(result => {
        changingVariable = 'Promise is fullfilled';
        console.log('second')
        console.log(changingVariable)
        console.log('second')
        if (changingVariable !== undefined){
            console.log('its ok');
        }
    }).catch(e => {
        console.log(e)
    })


console.log('third')
console.log(changingVariable);
console.log('third')



// console.log('a');
// setTimeout(() => {
//     console.log('b');
// }, 2000);
// console.log('c');



console.log('a');
console.log('b');
console.log('c');


setTimeout(()=>{
    for (let i = 0; i < 1_000_000; i++){
        for (let j = 0; j < 1_000_000; j++){
            
        }
    }
}, 5000)


console.log("final");