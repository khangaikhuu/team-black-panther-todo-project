console.log("Hello Day-25");

let first = document.getElementById("first");

let second = document.getElementById("second");

let third = document.getElementById("third");

let fourth = document.getElementById("fourth");

let a = Math.floor(Math.random() * 1000);
let b = Math.floor(Math.random() * 1000);
let c = Math.floor(Math.random() * 1000);
let d = Math.floor(Math.random() * 1000);


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
        }, 5000)
    });
    // return rightPromise;
    rightPromise
        .then(result => {
            console.log(result);
        }).catch(error => console.log(error))
}
effect(first);
function change(second) {
    let changePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (first == undefined) {
                reject("Something wrong")
            } else {
                resolve(printMeToDom("Change a pic ", second))
            }
        }, 5000)
    });
    changePromise
        .then(result => {
            console.log(result);
        }).catch(error => console.log(error))
}
change(second);




