// console.log("Promise");

// const promise = new Promise((resolve, reject) => {
//     resolve('success')
//     reject('failure')
// })

// console.log(promise);

// Promise
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = ['array', 'two', 'three'];
//         if (skills.length > 0) {
//             resolve(skills);
//         } else {
//             reject("Something wrong has happened");
//         }
//     }, 1000);
// });
// console.log(doPromise);


// doPromise.then(result => {
//     console.log(result)
// }).catch(error => console.log(error));

// //    GET Image
// function getImage(image) {
//     let imagePromise = new Promise((resolve, reject) => {
//         if (image.type != "png") {
//             reject("PNG файл биш байна");
//         } else {
//             resolve(image);
//         }
//     });
//     return imagePromise;
// }

// const img = {
//     imageName: 'My Image',
//     type: 'png'
// }

// const imageResult = getImage(img);
// imageResult.then((result) => {
//     console.log(result);
// }).catch(error => console.log(error));

// GET Image
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

function reSizeImage(image) {
    let rightImagePromise = new Promise((resolve, reject) => {
        if (image.size != "1800x2090") {
            reject("зөв хэмжээтэй файл биш байна.");
        } else {
            let resizedImage = image;
            resolve(resizedImage);
        }
    });
    return rightImagePromise;
}
function saveImage(image) {
    let saveImagePromise = new Promise((resolve, reject) => {
        if (image == undefined) {
            reject("Алдаа гарлаа.");
        } else {
            let saveImage = image;
            resolve(saveImage);
        }
    });
    return saveImagePromise;
}

const img = {
    imageName: 'My Image',
    type: 'png',
    size: '1800x2090'
}

// getImage(img)
//     .then((image) => reSizeImage(image))
//     .then((reSizedImage) => saveImage(reSizedImage))
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

//Async version
async function processImage() {
    const getImageResult = await getImage(img);
    const resizeImageResult = await reSizeImage(getImageResult);
    const saveImageResult = await saveImage(resizeImageResult);
    console.log(saveImageResult)
}
processImage();
