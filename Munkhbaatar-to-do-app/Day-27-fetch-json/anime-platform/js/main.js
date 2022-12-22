console.log('Anime');

const fullMetalAlchemistUrl = 'https://api.jikan.moe/v4/anime/5114'
fetch(fullMetalAlchemistUrl)
    .then(result => result.json())
    .then(res => {
        console.log(res)
        console.log(res.data.mal_id);

        console.log(res.data.images.jpg.image_url);
        const managaDomImage = document.getElementById('manga-image')

        managaDomImage.src = res.data.images.jpg.image_url;
        
        document.getElementById('manga-container').
        getElementsByTagName('h4')[0].textContent = res.data.titles[0].title;
        // getElementsByTagName('h4')[0].textContent = res.data.title;

        let type = res.data.type;
        let year = res.data.year;
        let status = (res.data.status).substring(0, 8);
        let episodes = res.data.episodes;
        let duration = res.data.duration.substring(0, 6);
        let genresTemp = res.data.genres;
        let genres = [];
        genresTemp.map((element) => {
            element.map()
        })
        console.log(genres);
        document.querySelector('#manga-container #type').innerHTML = type + ', ' + year +  " | " + status + 
        " | " + episodes + 'eps, ' + duration;


    })

