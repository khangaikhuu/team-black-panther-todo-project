console.log('-----------Promise----------');

const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
})

console.log(promise);


// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // const skills = ["HTML", "CSS", "JS", "React"];
        const skills = [];
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


// console.log(doPromise);


// const res = doPromise.then((result) => {
//     return result;
// })

// console.log(res);




const img = {
    imageName: 'My Image',
    type: 'png',
    size: '1800x2090',
}

const imageResult = getImage(img);
imageResult
    .then(result => {
        console.log('png mun bn');
    })
    .catch(error => console.log('png bish bn'));




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


async function processImage() {
    const getImageResult = await getImage(img);
    const reSizeImageResult = await reSizeImage(getImageResult);
    const saveImageResult = await saveImage(reSizeImageResult);
    console.log(saveImageResult);
}

processImage();
