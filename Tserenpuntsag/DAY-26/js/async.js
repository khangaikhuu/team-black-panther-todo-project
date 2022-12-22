

async function fryEgg(){
    return 1;
}
console.log(fryEgg());

//хариугаа авахын тулд заавал .then бичих шаардлагүйгээр ингэж бичиж болно.

async function printMyEgg() {
    const result = await fryEgg();
    console.log(result);
}

console.log(printMyEgg());

