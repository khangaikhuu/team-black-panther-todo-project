let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")
let p3 = document.querySelector("#p3")
let p4 = document.querySelector("#p4")

let timer1 = Math.ceil(Math.random() * 3000)
let timer2 = Math.ceil(Math.random() * 3000)
let timer3 = Math.ceil(Math.random() * 3000)
let timer4 = Math.ceil(Math.random() * 3000)

function printMeToDom(x, y) {
    y.innerHTML = x
}

async function addElementsToDom(command, element, timer) {
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

async function callFirst(command, element, timer) {
    const startPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element !== undefined) {
                resolve(printMeToDom(command, element))
            } else {
                reject("Something wrong has happened.")
            }
        }, timer);
    })
    return startPromise
}

async function test() {
    const printOne = await callFirst('Зураг авах', p1, timer1)
}
test()


async function printDom() {
    const printOne = await addElementsToDom('Зураг авах', p1, timer1)
    const printTwo = await addElementsToDom('Амжилттай бол зургийг өөрчлөх', p2, timer2)
    const printThree = await addElementsToDom('Амжилттай бол амжилттай хадгалах', p3, timer3)
    const printFour = await addElementsToDom('Амжилттай бол "Амжилттай хадгалагдлаа" гэж хэвлэх', p4, timer4)

    console.log(printOne);
    console.log(printTwo)
    console.log(printThree)
    console.log(printFour)
}

// printDom()
// const printDomExp = async function () {
//     const printOne = await addElementsToDom('Зураг авах', p1, timer1)
// }
// const printDomExpArrow = async () => {
//     const printOne = await addElementsToDom('Зураг авах', p1, timer1)
// }



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

// getImage(img)
//     .then((image) => reSizeImage(image))
//     .then((reSizedImage) => saveImage(reSizedImage))
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));


const img = {
    imageName: "My image",
    type: "png",
    size: "1800x2090",
}
async function printImg() {
    const printOne = await getImage(img)
    console.log(printOne)
    const printTwo = await reSizeImage(printOne)
    console.log(printTwo)
    const printThree = await saveImage(printTwo)
    console.log(printThree)
}

console.log(printImg())