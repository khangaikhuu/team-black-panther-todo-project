
const fullMetalAlchemistURL = `https://api.jikan.moe/v4/anime/5114`;
fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {

    // manga-image 
        console.log(data.data.images.jpg.image_url);
        const mangaDomImage = document.getElementById(`manga-image`);
        mangaDomImage.src = data.data.images.jpg.image_url;

    // h6 text garchigiin heseg
        document.getElementById(`manga-container`).
        getElementsByTagName(`h6`)[0].textContent = data.data.titles
        [0].title

    // p id type
        const type = document.querySelector('#manga-container p a');
       console.log(type)
        
        
    // footer-list heseg
        

    })

