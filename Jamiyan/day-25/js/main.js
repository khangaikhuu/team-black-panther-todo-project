console.log("day-25");

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");

let r1 = Math.floor(Math.random() * 1000);
let r2 = Math.floor(Math.random() * 1000);
let r3 = Math.floor(Math.random() * 1000);
let r4 = Math.floor(Math.random() * 1000);

console.log(r1 + ` ` + r2 + ` ` + r3 + ` ` + r4);

function printMeToDom(str, dom) {
  dom.innerHTML = str;
}

// setTimeout(() => {
//   printMeToDom("Зураг авах", p1);
//   setTimeout(() => {
//     printMeToDom("Амжилттай бол зургийг өөрчлөх", p2);
//     setTimeout(() => {
//       printMeToDom("Амжилттай бол амжилттай хадгалах", p3);
//       setTimeout(() => {
//         printMeToDom(`Амжилттай бол "Амжилттай хадгалагдлаа гэж хэвлэх"`, p4);
//       }, r4);
//     }, r3);
//   }, r2);
// }, r1);

// function first(){
// const p1Promise = new Promise((resolve, reject) => {
//     setTimeout(() => {

//     if (p1 != undefined) {
//         printMeToDom("Зураг авах", p1);
//         resolve(p1);
//     } else {
//         reject("Алдаа гарлаа.");
//     }
//     }, r1);
// });
// console.log(p1Promise)

// return p1Promise
// }
// function second(){
// const p2Promise = new Promise((resolve, reject) => {
//     setTimeout(() => {

//     if (p2 !== undefined) {
//         printMeToDom("Амжилттай бол зургийг өөрчлөх", p2)
//         resolve(p2);
//     } else {
//         reject("Алдаа гарлаа.");
//     }
//     }, r2);
// })

// return p2Promise
// }

// function third(){
// const p3Promise = new Promise((resolve, reject) => {
//     setTimeout(() => {

//     if (p3 !== undefined) {
//         printMeToDom("Амжилттай бол амжилттай хадгалах", p3);
//         resolve(p3);
//     } else {
//         reject("Алдаа гарлаа.");
//     }
//     }, r3);
// });
// return p3Promise

// }
// function fourth(){
// const p4Promise = new Promise((resolve, reject) => {
//     setTimeout(() => {

//     if (p4 !== undefined) {
//         printMeToDom(`Амжилттай бол "Амжилттай хадгалагдлаа гэж хэвлэх"`, p4);
//         resolve(p4);
//     } else {
//         reject("Алдаа гарлаа.");
//     }
//     }, r4);
// });
//     return p4Promise
// }

// first()
// .then(() => second())
// .then(() => third())
// .then(() => fourth())

function addElementsToDom(command, element, timer) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element !== undefined) {
        printMeToDom(command, element);
        resolve(command);
      } else {
        reject("Алдаа гарлаа");
      }
    }, timer);
  });

  return promise;
}

// addElementsToDom('Зураг авах', p1, r1)
//     .then((result) => addElementsToDom('Амжилттай бол зургийг өөрчлөх', p2,r2))
//     .then((third) => addElementsToDom('Амжилттай бол амжилттай хадгалах', p3, r3))
//     .then((fourth) => addElementsToDom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', p4,r4))

//     async function addElementsToDom(command, element, timer) {
//         const promise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (element !== undefined) {
//                     printMeToDom(command, element)
//                     resolve(command)
//                 } else {
//                     reject('Алдаа гарлаа')
//                 }
//             }, timer)
//         })

//         return promise;
//      }

async function printDom() {
  const printOne = await addElementsToDom("Зураг авах", p1, r1);
  const printTwo = await addElementsToDom(
    "Амжилттай бол зургийг өөрчлөх",
    p2,
    r2
  );
  const printThree = await addElementsToDom(
    "Амжилттай бол амжилттай хадгалах",
    p3,
    r3
  );
  const printFour = await addElementsToDom(
    'Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх',
    p4,
    r4
  );

  console.log(printOne);
  console.log(printTwo);
  console.log(printThree);
  console.log(printFour);
}

printDom();
