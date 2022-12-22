console.log('Dday26');

let promiseFullFilled = true;
let changingVariable;
console.log('first');
console.log(changingVariable);
console.log('first');

const myPromise = new Promise((resolved, rejected) => {
    if (promiseFullFilled) {

        changingVariable = 'Promise is fullfilled';
        console.log(changingVariable);

        resolved(changingVariable);
    } else {
        rejected('not full')
    }
})

myPromise
    .then(result => {
        changingVariable = 'full filled';
        console.log('second');
        console.log(changingVariable);
        console.log('second');

    }).catch(e => {
        console.log(e);
    })

    console.log('third');
    console.log(changingVariable);
    console.log('third');



    console.log('a');
    console.log('b');
    console.log('c');

setTimeout (() => {
    for (let i =0; i<1_000_000; i++){
    } for (let j =0; j<1_000_000; j++){
    }
}, 5000)



