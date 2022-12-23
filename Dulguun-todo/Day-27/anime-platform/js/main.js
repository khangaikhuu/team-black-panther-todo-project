const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114';

fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {
        //call
        const mangaContainer = document.getElementById('manga-container');
        const studio = document.getElementsByClassName('studio');
        
        //title
        mangaContainer.getElementsByTagName('h6')[0].textContent = data.data.titles[0].title;

        //informations
        const youtubeLogo = document.getElementsByClassName('youtube-logo');
        const info = document.getElementById('info');
        const streamingLogo = document.getElementsByClassName('streaming-logo');
        info.textContent = `${data.data.type}, ${data.data.year} | ${data.data.status.substring(0,8)} | ${data.data.episodes}eps, ${data.data.duration.substring(0,6)}`;

        //genre
        const genre = document.getElementById("genre");

        for (let i = 0; i < data.data.genres.length; i++) {
            let a = document.createElement("a");
            a.innerHTML = data.data.genres[i].name;
            a.href = data.data.genres[i].url
            genre.append(a)
        }

        //img
        // const mangaDomImage = document.getElementById('manga-img');
        // mangaDomImage.src = data.data.images.jpg.image_url;
        mangaContainer.getElementsByTagName('img')[0].src = data.data.images.jpg.image_url;

        //text
        mangaContainer.getElementsByTagName('p')[0].textContent = data.data.synopsis;
        mangaContainer.getElementsByTagName('p')[1].textContent = `Studio: ${data.data.studios[0].name}`;
        mangaContainer.getElementsByTagName('p')[2].textContent = `Source: ${data.data.source}`;
        mangaContainer.getElementsByTagName('p')[3].textContent = `Theme: ${data.data.themes[0].name}`;
        mangaContainer.getElementsByTagName('p')[4].textContent = `Demographic: ${data.data.demographics[0].name}`;

        //review section
        const score = document.getElementById('score');
        score.innerHTML = `<i class="bi bi-star"></i> ${data.data.score}`;

        const popularity = document.getElementById('popularity');
        popularity.innerHTML = `<i class="bi bi-star"></i> ${data.data.popularity}`
    })