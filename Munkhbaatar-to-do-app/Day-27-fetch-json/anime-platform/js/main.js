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
       


        document.querySelector('#manga-container #type').innerHTML = type + ',  ' + year +  "  |  " + status + 
        "  |  " + episodes + 'eps, ' + duration;
        

        genresTemp.map((element) => {

            let content = document.querySelector('#genres');
            let genre = document.createElement('a');
            genre.href = '#'
            genre.innerHTML = element.name;
            content.appendChild(genre);

        })

        let extendBtn = document.querySelector('.extend');
        let fullTxt = document.querySelector('#synopsisFull');
        let halfTxt = document.querySelector('#synopsisHalf');

        fullTxt.style.display = 'none';
        halfTxt.style.display = 'block'

        extendBtn.addEventListener('click', () => {
            if(fullTxt.style.display == 'none' ){
                console.log('test1')
                fullTxt.style.display = 'block'
                halfTxt.style.display = 'none';
                extendBtn.innerHTML = `<i class="bi bi-caret-up-fill"></i>`

            } else {
                fullTxt.style.display = 'none';
                halfTxt.style.display = 'block';
                console.log('test2')
                extendBtn.innerHTML = `<i class="bi bi-caret-down-fill"></i>`
            }
        })

        document.querySelector('#synopsisHalf').innerHTML = (res.data.synopsis).substring(0, 398);
        document.querySelector('#synopsisFull').innerHTML = res.data.synopsis;

        document.querySelector('#studio').innerHTML = '<b>Studio: </b>' + `<a href='${res.data.studios[0].url}' > ${res.data.studios[0].name}</a>`;
        document.querySelector('#source').innerHTML = '<b>Source: </b>' + res.data.source;
        document.querySelector('#theme').innerHTML = '<b>Theme</b>: ' + `<a href='${res.data.themes[0].url}'> ${res.data.themes[0].name}</a>`;
        document.querySelector('#demographic').innerHTML = '<b>Demographic: </b>' + res.data.demographics[0].name;

        
        document.querySelector('#score').innerHTML = '<i class="bi bi-star"></i> ' + res.data.score;
        document.querySelector('#member').innerHTML = '<i class="bi bi-person-fill"></i>' + (res.data.members/1.0e+6).toFixed(1) + " M";
        

    })

