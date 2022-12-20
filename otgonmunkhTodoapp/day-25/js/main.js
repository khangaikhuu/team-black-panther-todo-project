console.log("Hello Day-25");

let first = document.getElementById("first");

let second = document.getElementById("second");

let third = document.getElementById("third");

let fourth = document.getElementById("fourth");

let a = Math.floor(Math.random() * 1000);
let b = Math.floor(Math.random() * 1000);
let c = Math.floor(Math.random() * 1000);
let d = Math.floor(Math.random() * 1000);


function printMeToDom(name,  element ){
    element.innerHTML = name;
     

}
setTimeout(() => {
    printMeToDom("take a picture", first);
    setTimeout(() => {
        printMeToDom("change a pic", second);
        setTimeout(() => {
            printMeToDom("save pic", third);
            setTimeout(() => {
                printMeToDom("successfull save", fourth);
            }, d)

        }, c)
    }, b);

}, a)


