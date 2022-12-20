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

function effect(first) {
    let rightPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (first == undefined) {
                reject("Something wrong")
            } else {
                resolve(printMeToDom("Take a pic ", first))
            }
        }, a)
    });
    return rightPromise;
    // rightPromise
    //     .then(result => {
    //         console.log(result);
    //     }).catch(error => console.log(error))
}
// effect(first);
function change(second) {
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
    // changePromise
    //     .then(result => {
    //         console.log(result);
    //     }).catch(error => console.log(error))
}
// change(second);
function firstSave(third) {
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
    // savePromise
    //     .then(result => {
    //         console.log(result);
    //     }).catch(error => console.log(error))
}
// firstSave(third);

function loopSave(fourth) {
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
    // lastPromise
    //     .then((result) => {
    //         console.log(result);
    //     }).catch(error => console.log(error));
}
// loopSave(fourth);

// effect(first, a)
// .then((result1) => change(second, b))
// .then((result2) => firstSave(third, c))
// .then((result3) => loopSave(fourth, d))
// .catch((err) => console.log(err));



//teacher's example

function addElementsToDom(command, element, timer){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(element !== undefined){
                printMeToDom(command, element)
                resolve(command)
            } else{
                reject("Алдаа гарлаа")
            }
        }, timer)
    })

    return promise;
}

addElementsToDom("Зураг авах", first, a)
.then((result1) => addElementsToDom("Амжилттай бол зургийг өөрчлөх", second, b))
.then((result2) => addElementsToDom("Амжилттай бол хадгалах", third, c) )
.then((result3) => addElementsToDom("Амжилттай бол амжилттай гэж хэвлэх", fourth, d))
.catch(error => addElementsToDom(error, p5, a))

