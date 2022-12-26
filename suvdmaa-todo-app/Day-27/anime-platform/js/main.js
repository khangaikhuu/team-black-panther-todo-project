console.log("Anime Platform")

const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114';

fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {
        console.log(data)
        console.log(data.data.images.jpg.image_url)

        const titleText = document.querySelector('#title-text')
        titleText.textContent = data.data.titles[0].title;

        const mangaDomImage = document.getElementById('manga-image');
        mangaDomImage.src = data.data.images.jpg.image_url;

        document.getElementById('main-text1').innerHTML = data.data.synopsis.slice(0, 375);

        const more = data.data.synopsis;
        const textLength = more.length;
        const secondText = document.querySelector('#second-text-12')
        secondText.innerHTML = more.slice(375, textLength)
        secondText.style.display = 'none';

        const moreButton = document.querySelector('#moreBtn')

        moreButton.addEventListener('click', () => {
            if (secondText.style.display == "none") {
                secondText.style.display = "block"
            } else {
                secondText.style.display = "none"
            }
        })

        document.querySelector('#text1').textContent = data.data.type + "," + " " + data.data.year;
        document.querySelector('#text2').textContent = data.data.status.slice(0, 8)
        document.querySelector('#text3').textContent = data.data.episodes + " eps " + data.data.duration.slice(0, 6)


        document.querySelector('#text-genre1').textContent = data.data.genres[0].name;
        document.querySelector('#text-genre2').textContent = data.data.genres[1].name;
        document.querySelector('#text-genre3').textContent = data.data.genres[2].name;
        document.querySelector('#text-genre4').textContent = data.data.genres[3].name;

        document.querySelector('#endtext3').textContent = "Add to List"
    })







const fairytail = "https://api.jikan.moe/v4/anime/22043";

fetch(fairytail)
    .then(result => result.json())
    .then(data => {
        const randomAnime = data.data;

        document.querySelector('#second-title').innerHTML = randomAnime.titles[0].title
        document.querySelector('#second-title-text').innerHTML = randomAnime.titles[3].title

        const status = document.querySelectorAll('.anime-status');

        document.querySelector('#image-id').src = randomAnime.images.jpg.image_url;

        status[0].innerHTML = `<i class="fa-solid fa-circle-play" style="font-size: 16px"></i>
       <div>
        <span id="type">${randomAnime.type}</span>
        <span id="year">${randomAnime.year}</span>
        <span id="status">${randomAnime.status.slice(0, 8)}</span>
        <span id="eps">${randomAnime.episodes} eps, ${randomAnime.duration.slice(0, 7)} </span>
      </div>
      <i class="fa-solid fa-signal" style="font-size: 16px"></i>`;



        document.getElementById('text').innerHTML = data.data.synopsis.slice(0, 375);

        const more = data.data.synopsis;
        const textLength = more.length;
        const secondText = document.querySelector('#second-p')
        secondText.innerHTML = more.slice(375, textLength);
        secondText.style.display = 'none';

        const moreButton = document.querySelector('#moreBtn')

        moreButton.addEventListener('click', () => {
            if (secondText.style.display == "none") {
                secondText.style.display = "block"
            } else {
                secondText.style.display = "none"
            }
        })

    })

