
console.log('day 25 promise')

const p1 = document.getElementById('msg1');
const p2 = document.getElementById('msg2');
const p3 = document.getElementById('msg3');
const p4 = document.getElementById('msg4');
const p5 = document.getElementById('error');


const timer1 = Math.floor(Math.random() * 1000);
const timer2 = Math.floor(Math.random() * 1000);
const timer3 = Math.floor(Math.random() * 1000);
const timer4 = Math.floor(Math.random() * 1000);






function printMeToDom(value, element) {
    element.innerHTML = value;
}



// setTimeout(() => {
//     console.log('a');
//     console.log('b');

// console.log('c');
// }, 2000);

/// callback hell

// setTimeout(() => {
//     printMeToDom('Зураг авах', p1);
//     setTimeout(() => {
//         printMeToDom('Амжилттай бол зургийг өөрчлөх', p2);
//         setTimeout(() => {
//             printMeToDom('Амжилттай бол амжилттай хадгалах', p3)
//             setTimeout(() => {
//                 printMeToDom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', p4)
//             }, timer4)
//         }, timer3)
//     }, timer2)
// }, timer1)


function addElementsToDom(command, element, timer) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element !== undefined) {
                printMeToDom(command, element)
                resolve(command)
            } else {
                reject('Алдаа гарлаа')
            }
        }, timer)
    })

    return promise;
}

addElementsToDom('Зураг авах', p1, timer1)
    .then((second) => addElementsToDom('Амжилттай бол зургийг өөрчлөх', p2, timer2))
    .then((third) => addElementsToDom('Амжилттай бол амжилттай хадгалах', p3, timer3))
    .then((fourth) => addElementsToDom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', undefined, timer4))
    .catch(error => addElementsToDom(error, p5, timer1))







