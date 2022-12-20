//4 different variables
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");

//random number
let timer1 = Math.floor(Math.random() * 1000);
let timer2 = Math.floor(Math.random() * 2000);
let timer3 = Math.floor(Math.random() * 2500);
let timer4 = Math.floor(Math.random() * 3000);

//function
function printMeToDom(str, first) {
  first.innerHTML = str;
}

//setTimeout

// setTimeout(() => {
//   printMeToDom("Zurag avah", first);
//   setTimeout(() => {
//     printMeToDom("Амжилттай бол зургийг өөрчлөх", second);
//     setTimeout(() => {
//       printMeToDom("Амжилттай бол амжилттай хадгалах", third);
//       setTimeout(() => {
//         printMeToDom(
//           'Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх',
//           fourth
//         );
//       }, timer4);
//     }, timer3);
//   }, timer2);
// }, timer1);

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    printMeToDom("Zurag avah", first);
    if (printMeToDom.length > 0) {
      resolve(printMeToDom);
    } else {
      reject("Something wrong");
    }
  }, 2000);
});
const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    printMeToDom("Амжилттай бол зургийг өөрчлөх", second);
    if (printMeToDom.length > 0) {
      resolve(printMeToDom);
    } else {
      reject("Something wrong");
    }
  }, 2500);
});
const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    printMeToDom("Амжилттай бол амжилттай хадгалах", third);
    if (printMeToDom.length > 0) {
      resolve(printMeToDom);
    } else {
      reject("Something wrong");
    }
  }, 3000);
});
const fourthPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    printMeToDom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', fourth);
    if (printMeToDom.length > 0) {
      resolve(printMeToDom);
    } else {
      reject("Something wrong");
    }
  }, 3500);
});
// function firstTimeout(firsttime){
// const firstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     printMeToDom("Zurag avah", first);
//     if (printMeToDom.length > 0) {
//       resolve(printMeToDom);
//     } else {
//       reject("Something wrong");
//     }
//   });
// });
// return firstPromise;
// }
// function secondTimeout(secondtime){
// const secondPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     printMeToDom("Амжилттай бол зургийг өөрчлөх", second);
//     if (printMeToDom.length > 0) {
//       resolve(printMeToDom);
//     } else {
//       reject("Something wrong");
//     }
//   });
// });
// return secondPromise;
// }
// function thirdTimeout(thirdtime){
// const thirdPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     printMeToDom("Амжилттай бол амжилттай хадгалах", third);
//     if (printMeToDom.length > 0) {
//       resolve(printMeToDom);
//     } else {
//       reject("Something wrong");
//     }
//   });
// });
// return thirdPromise
// }
// function fourthTimeout(fourthtime){
// const fourthPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     printMeToDom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', fourth);
//     if (printMeToDom.length > 0) {
//       resolve(printMeToDom);
//     } else {
//       reject("Something wrong");
//     }
//   });
// });
// return fourthPromise
// }
// firstTimeout(firsttime)
// .then((secondtime)=> thirdTimeout(third))
// .then((third) => fourthTimeout(fourth))


