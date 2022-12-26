// console.log("async")

// async function fryEgg() {
//     return 1;

// }
// console.log(fryEgg())

// fryEgg().then(result => {
//     console.log(result)
// })


// async function printMyEgg() {
//     const result = await fryEgg();
//     console.log(result)
// }


// console.log(printMyEgg())



// async function fryEgg2() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done"), 1000)
//     });
//     let result = await promise;
//     console.log(result);

// }

// console.log("a")
// console.log("b")
// fryEgg2();
// console.log("final")


//ASYNCCCC


//end getImage bn
const img = {
    imageName: 'My Image',
    type: 'png',
    size: '1800x2090'
}

function getImage(image) {
    let imagePromise = new Promise((resolve, reject) => {
        if (image.type != "png") {
            reject("PNG файл биш байна");
        } else {
            resolve(image);
        }
    });
    return imagePromise;
}

function reSizeImage(rightImage) {
    let rightImagePromise = new Promise((resolve, reject) => {
        if (rightImage.size != "1800x2090") {
            reject("зөв хэмжээтэй файл биш байна.");
        } else {
            let resizedImage = rightImage;
            resolve(resizedImage);
        }
    });
    return rightImagePromise;
}

function saveImage(resizedImage) {
    let saveImagePromise = new Promise((resolve, reject) => {
        if (resizedImage == undefined) {
            reject("Алдаа гарлаа.");
        } else {
            let saveImage = resizedImage;
            resolve(saveImage);
        }
    });
    return saveImagePromise;
}
//assignment getImage tei hiisen ymaaa async awaits bolgoj huwirga

//.then huwilbar of getImage
// getImage(img)
//     .then((image) => reSizeImage(image))
//     .then((reSizedImage) => saveImage(reSizedImage))
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

//async huwilbar of getImage
async function processImage() {
    const getImageResult = await getImage(img);
    const resizeImageResult = await reSizeImage(getImageResult);
    const saveImageResult = await saveImage(resizeImageResult);
    console.log(saveImageResult);

}
processImage();




// async function addElementsToDom(command, element, timer) {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (element !== undefined) {
//                 printMeToDom(command, element)
//                 resolve(command)
//             } else {
//                 reject('Алдаа гарлаа')
//             }
//         }, timer)
//     })

//     return promise;
// }

// async function printDom() {
//     const printOne = await addElementsToDom('Зураг авах', p1, timer1)
//     const printTwo = await addElementsToDom('Амжилттай бол зургийг өөрчлөх', p2, timer2)
//     const printThree = await addElementsToDom('Амжилттай бол амжилттай хадгалах', p3, timer3)
//     const printFour = await addElementsToDom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', p4, timer4)

//     console.log(printOne);
//     console.log(printTwo)
//     console.log(printThree)
//     console.log(printFour)
// }

// printDom()



// const printDomExp = async function () {
//     const printOne = await addElementsToDom('Зураг авах', p1, timer1)
// }


// const printDomExpArrow = async () => {
//     const printOne = await addElementsToDom('Зураг авах', p1, timer1)
// }
