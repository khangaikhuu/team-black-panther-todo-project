const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114';

fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {
        //call
        const mangaContainer = document.getElementById('manga-container');
        const studio = document.getElementsByClassName('studio');


        //img
        const mangaDomImage = document.getElementById('manga-img');
        mangaDomImage.src = data.data.images.jpg.image_url;

        //title
        mangaContainer.getElementsByTagName('h6')[0].textContent = data.data.titles[0].title;

        //text
        mangaContainer.getElementsByTagName('p')[0].textContent = data.data.synopsis;
        mangaContainer.getElementsByTagName('p')[1].textContent = `Studio: ${data.data.studios[0].name}`;
        mangaContainer.getElementsByTagName('p')[2].textContent = `Source: ${data.data.source}`;
        mangaContainer.getElementsByTagName('p')[3].textContent = `Theme: ${data.data.themes[0].name}`;
        mangaContainer.getElementsByTagName('p')[4].textContent = `Demographic: ${data.data.demographics[0].name}`;

    })