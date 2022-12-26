fetch('https://api.jikan.moe/v4/anime/5114')
    .then((result) => result.json())
    .then((data) => {
        const animeData = data.data;
        const animeBody = document.querySelector(".anime-body");

        // Title
        const title = document.querySelector('#title');
        title.textContent = animeData.title;

        // Information
        const informationList = document.querySelectorAll('.anime-status');
        informationList[0].innerHTML = `
        <i class="fa-brands fa-youtube fa-icon"></i>
            <div>
                <span id="type">${animeData.type}</span>
                <span id="year">${animeData.year}</span>
                <span id="status">${animeData.status.slice(0, 8)}</span>
                <span id="eps">${animeData.episodes} eps, ${animeData.duration.slice(0, 7)} </span>
            </div>
            <i class="fa-solid fa-tower-broadcast fa-icon"></i>`

        //genre
        const genre = document.getElementById("anime-genre");

        for (let i = 0; i < animeData.genres.length; i++) {
            let a = document.createElement("a");
            a.innerHTML = animeData.genres[i].name;
            a.href = animeData.genres[i].url
            genre.append(a);
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
        secondText.textContent = parts;
        secondText.style.display = 'none';

        const moreButton = document.querySelector('#moreBtn');

        moreButton.addEventListener('click', () => {
            if (secondText.style.display == 'none') {
                secondText.style.display = 'block';

            } else {
                secondText.style.display = 'none';
            }
        })
        const info = document.getElementById('info');
        info.getElementsByTagName('p')[0].innerHTML = `Studio: <a href="">${animeData.studios[0].name}</a>`;
        info.getElementsByTagName('p')[1].innerHTML = `Source: ${animeData.source}`;
        info.getElementsByTagName('p')[2].innerHTML = `Theme: <a href="">${animeData.themes[0].name}</a>`;
        info.getElementsByTagName('p')[3].innerHTML = `Demographic: ${animeData.demographics[0].name}`;
    })