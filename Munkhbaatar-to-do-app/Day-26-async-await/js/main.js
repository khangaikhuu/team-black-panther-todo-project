console.log('Day 26')

let promiseFullfilled = true;
let changingVariable; 
console.log('first')
console.log(changingVariable);
console.log('first')

const myPromise = new Promise((resolved, rejected) => {
    if(promiseFullfilled){
        // changingVariable = 'Promise is fullfilled';
        resolved(changingVariable);
    }
    else {
        rejected('Promise is not fullfilled')
    }
})

myPromise.then(result => {
    changingVariable = 'Promise is fullfilled';
    console.log('second')
    console.log(result)
    console.log('second')
}).catch(e => {
    console.log(e);
})

console.log('third');
console.log(changingVariable);
console.log('third')



console.log('a');
console.log('b');
console.log('c');

setTimeout(() => {
    for (let i = 0; i < 1_000_000; i++) {
        for(let j = 0; j < 1_000_000; j++) {
            
        }
    }
}, 5000)


console.log('final')