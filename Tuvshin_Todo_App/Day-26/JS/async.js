console.log("Async");

async function fryEgg (){
    return 1;
}

console.log(fryEgg);

async function printMyEgg () {
    const result = await fryEgg();
    console.log(result);

    console.log(printMyEgg);
}

