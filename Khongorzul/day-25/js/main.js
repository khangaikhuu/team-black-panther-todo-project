let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");

let timer1 = Math.round(Math.random()*1000);
let timer2 = Math.round(Math.random()*1000);
let timer3 = Math.round(Math.random()*1000);
let timer4 = Math.round(Math.random()*1000);


 
// //callback hell
// setTimeout(() => {
//     printMeToDom("Зураг авах", p1)
// }, timer1)

// setTimeout(() => {
//     printMeToDom("Амжилттай бол зургийг өөрчлөх", p2)
// }, timer2)

// setTimeout(() => {
//     printMeToDom("Амжилттай бол амжилттай хадгалах", p3)
// }, timer3)

// setTimeout(() => {
//     printMeToDom("Амжилттай бол 'Амжилттай хадгалагдлаа' гэж хэвлэх", p4)
// }, timer4)


function printMeToDom(str, domEl){
    domEl.innerHTML = str;
}

function addElementsToDom(str, domEl, timer){
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(domEl == undefined){
                reject("Алдаа гарлаа!")
            } 
            else{
                printMeToDom(str, domEl);
                resolve(str)
            }
        }, timer)
    })
    return promise;
}

// addElementsToDom("Зураг авах", p1, timer1)
//     .then((second) => addElementsToDom("Амжилттай бол зургийг өөрчлөх", p2, timer2))
//     .then((third) => addElementsToDom("Амжилттай бол амжилттай хадгалах", p3, timer3))
//     .then((fourth) => addElementsToDom("Амжилттай бол 'Амжилттай хадгалагдлаа' гэж хэвлэх", p4, timer4))
//     .catch(error => addElementsToDom(error, p5, timer1))



async function addElementsToDom(str, domEl, timer){
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(domEl == undefined){
                reject("Алдаа гарлаа!")
            } 
            else{
                printMeToDom(str, domEl);
                resolve(str)
            }
        }, timer)
    })
    return promise;
}

async function printDom(){
    const printOne = await addElementsToDom("Зураг авах", p1, timer1)
    const printTwo = await addElementsToDom("Амжилттай бол зургийг өөрчлөх", p2, timer2)
    const printThree = await addElementsToDom("Амжилттай бол амжилттай хадгалах", p3, timer3)
    const printFour = await addElementsToDom("Амжилттай бол 'Амжилттай хадгалагдлаа' гэж хэвлэх", p4, timer4)

    console.log(printOne);
    console.log(printTwo);
    console.log(printThree);
    console.log(printFour);
}

printDom();


const printDomExp = async function(){
    const printOne = await addElementsToDom("Зураг авах", p1, timer1)
}

const printDomExpArrow = async() => {
    const printOne = await addElementsToDom("Зураг авах", p1, timer1)
}