let p1 = document.getElementById('tag1');
let p2 = document.getElementById('tag2');
let p3 = document.getElementById('tag3');
let p4 = document.getElementById('tag4');

let max = 5000;
let timer1 = Math.floor(Math.random() * max)
let timer2 = Math.floor(Math.random() * max)
let timer3 = Math.floor(Math.random() * max)
let timer4 = Math.floor(Math.random() * max)


function printMeToDom (string, parameter){
    parameter.innerHTML = string; 
}

// console.log(printMeToDom("Зураг авах", p1))
// console.log("Зураг авах")

/// Daraallalaar unshidaggui harin randomoor hevledeg
// setTimeout( () =>{
//     printMeToDom("Зураг авах", p1)
// }, timer1)

// setTimeout(() =>{
//     printMeToDom("Амжилттай бол зургийг өөрчлөх", p2)
// }, timer2)

// setTimeout(() =>{
//     printMeToDom("Амжилттай бол амжилттай хадгалах", p3)
// }, timer3)

// setTimeout(() =>{
//     printMeToDom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', p4)
// }, timer4)


/// callback ashiglasan random -oor garahgui yag daraalalaar gargah-------------------------
/// callback hell
// setTimeout( () =>{
//     printMeToDom("Зураг авах", p1)
//     setTimeout(() =>{
//         printMeToDom("Амжилттай бол зургийг өөрчлөх", p2)
//         setTimeout(() =>{
//             printMeToDom("Амжилттай бол амжилттай хадгалах", p3)
//             setTimeout(() =>{
//                 printMeToDom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', p4)
//             }, timer4)
//         }, timer3)
//     }, timer2)
// }, timer1)


/// promise ashiglasan --------------------------------------------------------------------
function promise1 (promise){
    const doPromise1 = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(promise !== undefined){
                printMeToDom("Зураг авах", p1);
                resolve("Зураг авах") 
            } else {
                reject("Something wrong has happened");
            }}, timer1)
    })
    return doPromise1;
}

promise1(p1).then((result)=>console.log(result))


function promise2 (promise){
    const doPromise2 = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(promise !== undefined){
                printMeToDom("Амжилттай бол зургийг өөрчлөх", p2);
                resolve("Амжилттай бол зургийг өөрчлөх")
            } else {
                reject("Something wrong has happened");
            }
            
        }, timer2)
    })
    return doPromise2;
}

promise2(p2).then((result)=>console.log(result))


function promise3 (promise){
    const doPromise3 = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(promise !== undefined){
                printMeToDom("Амжилттай бол амжилттай хадгалах", p3);
                resolve("Амжилттай бол амжилттай хадгалах")
            } else {
                reject("Something wrong has happened");
            }
        }, timer3) 
    })
    return doPromise3
}

promise3(p3).then((result) => console.log(result))


function promise4(promise){
    const doPromise4 = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(promise !== undefined){
                printMeToDom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', p4);
                resolve('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх')
            } else {
                reject("Something wrong has happened");
            }
        }, timer4)
    })
    return doPromise4
}

promise4(p4).then((result)=> console.log(result))


/// Promise iluu hylbarshilsan ni --------------------------------------------------------

function addElementsToDom(command, element, timer){
    const promise = new Promise ((resolve, reject)=>{
        if(element !== undefined){
            printMeToDom(command, element)
            resolve(command)
        } else {
            reject("Something wrong has happened")
        }
    })
    return promise;
}

addElementsToDom('"Зураг авах"', p1, timer1)
.then((second)=> addElementsToDom("Амжилттай бол зургийг өөрчлөх", p2, timer2))
.then((third)=> addElementsToDom("Амжилттай бол амжилттай хадгалах", p3, timer3))
.then((fourth)=> addElementsToDom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', p4, timer4))
