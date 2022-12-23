const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114'

fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {
        console.log(data);
        console.log(data.data.mal_id);
        console.log(data.data.images.jpg.image_url);
        const mangaDomImage = document.getElementById('manga-image');
        mangaDomImage.src = data.data.images.jpg.image_url;

        const mangaTitle = document.getElementsByTagName('h6')[0].textContent = data.data.titles[0].title

        const mangaText = document.getElementById('manga-container').  //text orulsan 
            getElementsByClassName('manga-text')[0].textContent = data.data.synopsis;

        const mangaStat = document.getElementsByClassName('manga-stat')[0].textContent = data.data.type; 
        const mangaTypeStudio = document.getElementById('manga-container').
            getElementsByClassName('manga-type-studio')[0].textContent = data.data.studios.name;
    })
