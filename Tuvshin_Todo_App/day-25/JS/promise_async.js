
async function getImage(image) {
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
        imageName: 'My Image',
        type:'png',
        size: '1800x2090'
    }

    const imageResult = getImage(img);
imageResult .then (result => {
    console.log(result);
})
.catch(error => console.log(error))

async function reSizeImage(rightImage) {
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

 async function saveImage(resizedImage) {
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

 async function saveImage(resizedImage) {
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

async function processImages() {
    const getImageResult = await getImage(img);
    const reSizedImageResult = await reSizeImage(getImageResult);
    const saveImageResult = await saveImage(reSizedImageResult);
    console.log(saveImageResult);
}
processImages();