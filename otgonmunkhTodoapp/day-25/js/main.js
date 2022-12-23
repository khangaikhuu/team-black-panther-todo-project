console.log("Hello Day-25");

let first = document.getElementById("first");

let second = document.getElementById("second");

let third = document.getElementById("third");

let fourth = document.getElementById("fourth");

let a = Math.floor(Math.random() * 3000);
let b = Math.floor(Math.random() * 3000);
let c = Math.floor(Math.random() * 3000);
let d = Math.floor(Math.random() * 3000);


function printMeToDom(value, element) {
    element.innerHTML = value;


}

// setTimeout(() => {
//     printMeToDom("take a picture", first);

// })

// setTimeout(() => {
//     printMeToDom("change a pic", second);

// });


// setTimeout(() => {
//     printMeToDom("save pic", third);

// })
// setTimeout(() => {
//     printMeToDom("successfull saved", fourth);
// })

function effect( text , first, timer ) {
    let rightPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let text = "Take a pic ";
            if (first == undefined) {
                reject("Something wrong")
            } else {
                resolve(printMeToDom("Take a pic ", first))
            }
        }, a)
    });
    return rightPromise
}

function change(text, second , timer) {
    let changePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (second == undefined) {
                reject("Something wrong")
            } else {
                resolve(printMeToDom("Change a pic ", second))
            }
        }, b)
    });
    return changePromise;
 
}

function firstSave(text, third , timer) {
    let savePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (third == undefined) {
                reject("Something wrong")
            } else {
                resolve(printMeToDom("Save a picture", third))
            }
        }, c)
    });
    return savePromise;

}


function loopSave(text, fourth, timer) {
    let lastPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fourth == undefined) {
                reject("Something wrong")
            } else {
                resolve(printMeToDom("Successfull saved", fourth))
            }

        }, d)
    });
    return lastPromise;
}


async function printDomNew(){
    const printOne = await effect("Зураг авах", first, a)
    const printTwo = await change("Амжилттай бол зургийг өөрчлөх", second, b)
    const printThree = await firstSave("Амжилттай бол хадгалах", third, c)
    const printFourth = await loopSave("Амжилттай бол амжилттай гэж хэвлэх", fourth, d)
    console.log(printOne);
    console.log(printTwo);
    console.log(printThree);
    console.log(printFourth);

}
printDomNew()

// effect(first, a)
// .then((result1) => change(second, b))
// .then((result2) => firstSave(third, c))
// .then((result3) => loopSave(fourth, d))
// .catch((err) => console.log(err));



//teacher's example

// function addElementsToDom(command, element, timer){
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(element !== undefined){
//                 printMeToDom(command, element)
//                 resolve(command)
//             } else{
//                 reject("Алдаа гарлаа")
//             }
//         }, timer)
//     })

//     return promise;
// }

// addElementsToDom("Зураг авах", first, a)
// .then((result1) => addElementsToDom("Амжилттай бол зургийг өөрчлөх", second, b))
// .then((result2) => addElementsToDom("Амжилттай бол хадгалах", third, c) )
// .then((result3) => addElementsToDom("Амжилттай бол амжилттай гэж хэвлэх", fourth, d))
// .catch(error => addElementsToDom(error, p5, a))






// async function addElementsToDom(command, element, timer){
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(element !== undefined){
//                 printMeToDom(command, element)
//                 resolve(command)
//             } else{
//                 reject("Алдаа гарлаа")
//             }
//         }, timer)
//     })

//     return promise;
// }
//  async function printDom(){
//     const printOne =  await addElementsToDom("Take a picture", first, a)
//     const printTwo = await addElementsToDom("Edit a picture", second, b)
//     const printThree = await addElementsToDom("Save a picture", third, c)
//     const printFourth = await addElementsToDom("successfull saved a picture", fourth, d)
//     console.log(printOne);
//     console.log(printTwo);
//     console.log(printThree);
//     console.log(printFourth);
// }

// printDom()