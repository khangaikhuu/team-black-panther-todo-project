const img = {
    imageName: "My Image",
    type: "png",
    size: '1800x2090'
};


// const imageResult = getImage(img);
// imageResult
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => console.log(error));

// //    GET Image
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
// console.log(" Promise ");
// getImage(img)
// .then((image) => reSizeImage(image))
// .then((reSizedImage) => saveImage(reSizedImage))
// .then((res) => console.log(res))
// .catch((err) => console.log(err));


console.log(" Async ashiglav ");

// async function processImages () {
//     const getImageResult = await getImage(img);
//     const reSizedImageResult = await reSizeImage(getImageResult);
//     const saveImageResult = await saveImage(reSizedImageResult);

//     console.log(saveImageResult)
// }

// processImages();


async function imageResult() {
    const printOne = await getImage(img);
    const printTwo = await reSizeImage(printOne);
    const printThree = await saveImage(printTwo);

console.log(printThree);

}
imageResult()