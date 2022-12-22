console.log("anime platform");

const fullMetalAlchemistURL = "https://api.jikan.moe/v4/anime/5114";

fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {
        console.log(data.data.images.jpg.image_url);
        const mangaDomImage = document.getElementById("manga-image");
        mangaDomImage.src = data.data.images.jpg.image_url;

        const manga_container = document.querySelector("#manga-container")
        
        manga_container.getElementsByTagName('h6')[0].textContent = data.data.titles[0].title

        manga_container.querySelector('#type').textContent = data.data.type
        manga_container.querySelector('#year').textContent = data.data.aired.prop.from.year
        manga_container.querySelector('#status').textContent = data.data.status
        manga_container.querySelector('#episodes').textContent = data.data.episodes + ' eps'
        manga_container.querySelector('#duration').textContent = data.data.duration


        const genres_container = document.querySelector("#genres-container")
        genres_container.textContent = data.data.genres[0].name

        const genres = data.data.genres;
        genres.map(element => {
            console.log(element.name);
        })

    })