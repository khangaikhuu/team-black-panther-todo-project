const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
})

console.log(promise)

const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ["HTML", "CSS", "JS", "REACT"]
        if (skills.length > 0) {
            resolve(skills)
        } else {
            reject("Something wrong has happened")
        }
    }, 2000);
})

console.log(doPromise)

// doPromise
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => console.log(error))

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

const img = {
    imageName: "My image",
    type: "png",
    size: "1800x2090",
}

// const imageResult = getImage(img)
// imageResult.then(result => {
//     console.log(result)
// })
//     .catch(error => console.log(error))


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

getImage(img)
    .then((image) => reSizeImage(image))
    .then((reSizedImage) => saveImage(reSizedImage))
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
