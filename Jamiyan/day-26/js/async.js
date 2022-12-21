

console.log("async");

async function fryEgg() {
    return 1;
}

console.log(fryEgg());



async function printMyEgg() {
    const result = await 1;
    console.log(result);
}

printMyEgg();

console.log("hha")

// async function fryEgg2() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done!"))
//     });
//     let result = await promise;
//     console.log(result);
// }

// console.log("a");
// console.log("b");
// fryEgg2();
// console.log("final");