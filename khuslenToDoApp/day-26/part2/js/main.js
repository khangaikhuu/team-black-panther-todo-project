
async function fryEgg() {
    return 1;
}
console.log(fryEgg())

// fryEgg()
// .then(result => {
//     return result
// })

async function printMyEgg() {
    const result = await fryEgg();
    console.log(result);
}
console.log(printMyEgg())

async function fryEgg2() {
    let Promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });
    let result = await Promise;
    console.log(result);
}
console.log("a");
console.log("b");
fryEgg2();
console.log("final");