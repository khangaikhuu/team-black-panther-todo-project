console.log('Day 26')

let promiseFulfilled = true;
let changingVariable;
console.log('first');
console.log(changingVariable);
console.log('first');
const myPromise = new Promise((resolved, rejected) => {

    if (promiseFulfilled) {
        changingVariable = 'Promise is fulfilled';
        resolved(changingVariable);
    } else {
        rejected('Promise is not fulfilled');
    }
})

myPromise
    .then(result => {
        console.log('second');
        console.log(result);
        console.log('second');
    }).catch(error => {
        console.log(error);
    })

console.log('third')
console.log(changingVariable);
console.log('third')

console.log('a')
console.log('b')
console.log('c')

setTimout(() => {
    for(let i=0 ;i< 1_000_000; i++){
        for(let j=0;j<1_000_000;j++){

        }
    }
},2000)
console.log('final')