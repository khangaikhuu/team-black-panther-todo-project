// console.log('async');

// async function fryEgg() {
//     return 1;
// }
// console.log(fryEgg());

// async function printMyEgg() {
//     const result = await fryEgg();
//     console.log(result);
// }

// console.log(printMyEgg());

async function fryEgg2() {
    let promise = new Promise((resolve, reject) =>{
        setTimeout(() => resolve("done!"), 1000)
    });

    // promise.then(result => {
    //     console.log(result);
    // })

    let result = await promise //end 1 sec huleene
    console.log(result);
}

console.log('a');
console.log('b');
fryEgg2();
console.log('final');