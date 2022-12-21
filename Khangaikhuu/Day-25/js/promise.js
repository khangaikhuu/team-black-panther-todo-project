console.log('promise ')

// const promise = new Promise((resolve, reject) => {
//     resolve('success')
//     reject('failure')
// })

// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ["HTML", "CSS", "JS", "React"];
        if (skills.length > 0) {
            resolve(skills);
        } else {
            reject("Something wrong has happened");
        }
    }, 2000);
});

doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))






// const imageResult = getImage(img);


// imageResult.then((result) => {
//     console.log(result)
// }).catch(error => console.log(error))

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

// getImage(img)
//     .then((image) => reSizeImage(image))
//     .then((reSizedImage) => saveImage(reSizedImage))
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));


