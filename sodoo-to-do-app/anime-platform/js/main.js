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


        let switcherButton = document.getElementById('switcher');
        switcherButton.addEventListener('click', switchFunc)

        let shortText = true;
        function switchFunc() {

            document.getElementById('synopsis').innerHTML = data.data.synopsis.substring(0, 300)
            // let off = document.getElementById('synopsis').innerHTML = data.data.synopsis;
            console.log('--------------------test');


            if (shortText) {
                document.getElementById('synopsis').innerHTML = data.data.synopsis;
                document.getElementById('switcher').innerHTML = '<i class="bi bi-caret-up"></i>';
                console.log('test');
                shortText = false
            }
            else {
                document.getElementById('synopsis').innerHTML = data.data.synopsis.substring(0, 300);
                document.getElementById('switcher').innerHTML = '<i class="bi bi-caret-down"></i>';
                shortText = true
                console.log('tes2');
            }
        }

        let synopsis = document.getElementById('synopsis').innerHTML = data.data.synopsis.substring(0, 300);

        const studio = document.getElementById('studio').innerHTML = '<b>Studio: </b>' + `<a href="${data.data.studios[0].url}"> ${data.data.studios[0].name}</a>`;
        const source = document.getElementById('source').innerHTML = '<b>Source: </b>' + data.data.source;
        const theme = document.getElementById('theme').innerHTML = '<b>Theme: </b>' + `<a href="${data.data.themes[0].url}"> ${data.data.themes[0].name}</a>`;
        const demo = document.getElementById('demo').innerHTML = '<b>Demographic: </b>' + `<a href="${data.data.demographics[0].url}"> ${data.data.demographics[0].name}</a>`;



        const score = document.getElementById('score').innerHTML = '<i class="bi bi-star"></i> ' + data.data.score;
        const members = document.getElementById('members').innerHTML = '<i class="bi bi-person-fill"></i> ' + (data.data.members / 1.0e+6).toFixed(1) + ' M';


        const type = document.querySelector('#manga-container p')
        console.log(type);
        const genresList = document.querySelector('#manga-container ul li');
        // genresList.innerHTML = 'test'
        console.log(genresList);


        // console.log('---------- map test ---------');
        // let genres = "";
        // data.data.genres.map((element) => {
        //     console.log(element.name);
        //     genres += element.name + " ";
        // })
        // document.querySelector('#genres').innerHTML = genres;
        // console.log(genres);


        console.log('---------- genres map ---------');
        data.data.genres.map((element) => {
            console.log(element.name);

            let content = document.querySelector('#genres');
            let genre = document.createElement('a');
            genre.href = '#'
            genre.innerHTML = element.name;
            content.appendChild(genre)
        })


        // console.log('-------------- genres for -------------');
        // console.log(data.data.genres);
        // console.log(document.getElementById('genres'));
        // console.log(document.querySelectorAll('genres'));

        // for (let i = 0; i < data.data.genres.length; i++) {
        //     document.querySelectorAll('#genres div')[i].textContent = data.data.genres[i].name;
        // }









    })
