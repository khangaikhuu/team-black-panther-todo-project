console.log('-------------day-27 Anime ---------------');


const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114';

fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {
        console.log(data);
        console.log(data.data.mal_id);
        console.log(data.data.images.jpg.image_url);

        const mangaDomImage = document.getElementById('manga-image');
        mangaDomImage.src = data.data.images.jpg.image_url;
        document.getElementById('manga-container').getElementsByTagName('h6')[0].textContent = data.data.titles[0].title
        const tv = document.getElementById('manga-container').getElementsByTagName('p')[0].textContent = data.data.type + ', ' + data.data.year + ' | ' + data.data.status.substring(0, 8) + ' | ' + data.data.episodes + ' eps, ' + data.data.duration.substring(0, 6);


        const type = document.querySelector('#manga-container p')
        console.log(type);
        const genresList = document.querySelector('#manga-container ul li');
        // genresList.innerHTML = 'test'
        console.log(genresList);

        let genres = "";
        data.data.genres.map((element) => {
            // console.log(element.name);
            genres += element.name + " ";
        })
        document.querySelector('#genres').innerHTML = genres;
        console.log(genres);







    })
