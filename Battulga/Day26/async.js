
console.log('Day26: Async')

async function fryEgg (){
    return 1
}
console.log(fryEgg())

async function printMyEgg(){
    const result = await fryEgg()
    console.log(result)
}

console.log(printMyEgg())

async function fryEgg2(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done'), 1000)
    })

    let result = await promise
    console.log(result)
}



