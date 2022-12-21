const { reject } = require("async");

console.log("async");

async function fryEgg() {
    return 1;
}
console.log(fryEgg())


async  function printMyegg() {
    const result = await fryEgg();
    console.log(result);
}

console.log(printMyegg);

async function fryEgg2 (){
    let promise = new Promise((resolve, reject) =>{
        setTimeout(() => resolve("done"), 1000)
    });

    let result = await promise;
    console.log(result);
}
console.log("a");
console.log("b");
fryEgg2();
console.log("final");