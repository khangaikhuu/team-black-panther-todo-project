fetch('https://api.jikan.moe/v4/anime/5114')
    .then((result) => result.json())
    .then((data) => {
        const animeData = data.data;
        const animeBody = document.querySelector(".anime-body");

        // Title
        const title = document.querySelector('#title');
        title.textContent = animeData.title;

        // Information
        const informationList = document.querySelectorAll('.anime-information');
        informationList[0].innerHTML = `
        <i class="fa-brands fa-youtube"></i>
            <div>
                <span id="type">${animeData.type}</span>
                <span id="year">${animeData.year}</span>
                <span id="status">${animeData.status.slice(0, 8)}</span>
                <span id="eps">${animeData.episodes} eps, ${animeData.duration.slice(0, 7)} </span>
            </div>
        <i class="fa-solid fa-signal"></i>`

        //genre
        const genre = document.getElementById("anime-genre");

        for (let i = 0; i < animeData.genres.length; i++) {
            let a = document.createElement("a");
            a.innerHTML = animeData.genres[i].name;
            a.href = animeData.genres[i].url
            genre.append(a)
        }

        // Img
        animeBody.getElementsByTagName('img')[0].src = animeData.images.jpg.image_url;

        // Text content
        const text = document.querySelector('#text p');
        const secondText = document.querySelector('#second-p');
        const more = animeData.synopsis;
        const textLength = more.length;
        const parts = more.slice(375, textLength);
        text.textContent = animeData.synopsis.slice(0, 375);

    })