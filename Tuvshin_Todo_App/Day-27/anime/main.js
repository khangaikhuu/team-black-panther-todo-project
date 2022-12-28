

const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114'

fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {
        console.log(data);
        console.log(data.data.mal_id);
        console.log(data.data.images.jpg.image_url);
        const mangaDomImage = document.getElementById('manga-image');
        mangaDomImage.src = data.data.images.jpg.image_url;

        const mangaTitle = document.getElementsByClassName('manga-title')[0].textContent = data.data.titles[0].title;

        //text orulsan
        // const mangaText = document.getElementById('manga-container').
        //     getElementsByClassName('manga-text')[0].textContent = data.data.synopsis;

        // ba filenaas

        
        let switcherButton = document.getElementById('moreBtn');
        switcherButton.addEventListener('click', switchFunc)

        let shortText = true;
        function switchFunc() {

            document.getElementById('manga-text').innerHTML = data.data.synopsis.substring(0, 337)


            if (shortText) {
                document.getElementById('manga-text').innerHTML = data.data.synopsis;
                document.getElementById('moreBtn').innerHTML = '<i class="bi bi-caret-up"></i>';

                shortText = false
            }
            else {
                document.getElementById('manga-text').innerHTML = data.data.synopsis.substring(0, 337);
                document.getElementById('moreBtn').innerHTML = '<i class="bi bi-caret-down"></i>';
                shortText = true

            }
        }

        let synopsis = document.getElementById('manga-text').innerHTML = data.data.synopsis.substring(0, 337);


        // b  filenaas duussan



        const mangaStat = document.getElementsByClassName('manga-stat')[0].innerHTML = data.data.type + "," + " " +
            data.data.year + "  |  " + "  " + data.data.status + "  | " + "  " + data.data.episodes + " eps" + ", " +
            data.data.duration.substring(0, 6);

        const genreContainer = document.getElementById('genre-container')

        const genres = data.data.genres

        genres.map(element => {
            console.log(element)
            const a = document.createElement('a');
            a.href = element.url;
            a.textContent = element.name;
            genreContainer.appendChild(a);
        })

        const mangaTypeStudio = document.getElementById('manga-container').
            getElementsByClassName('manga-type-studio')[0].textContent = " Studio : " + data.data.studios[0].name;

        const mangaTypeStudio2 = document.getElementById('manga-container').
            getElementsByClassName('manga-type-studio2')[0].textContent = " Source : " + data.data['source'];

        const mangaTypeStudio3 = document.getElementById('manga-container').
            getElementsByClassName('manga-type-studio3')[0].textContent = " Theme : " + data.data.themes[0].name;

        const mangaTypeStudio4 = document.getElementById('manga-container').
            getElementsByClassName('manga-type-studio4')[0].textContent = "Demographic:   " + data.data.demographics[0].name;


        const mangaScore = document.getElementById('score').innerHTML = '<i class="fa-sharp fa-solid fa-star"></i>  ' + data.data.score;
        const mangaMember = document.getElementById('member').innerHTML = '<i class="fa-solid fa-eye"></i>  ' + (((data.data.members) / 1_000_000).toFixed(1)) + " M";



    })