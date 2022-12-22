const fullMetal = 'https://api.jikan.moe/v4/anime/5114';
fetch(fullMetal)
    .then(result => result.json())
    .then(data => {
        //zurag
        console.log(data.data.images.jpg.image_url)
        const mangaDomImage = document.getElementById('manga-image');
        mangaDomImage.src = data.data.images.jpg.image_url;
        //end

        //title

        const mangaTitle = document.getElementById
            ('manga-container').getElementsByTagName('a')[0].textContent = data.data.titles[0].title;
        //end

        //first p
        const containerQuery = document.querySelector('#manga-container');
        containerQuery.querySelector('#type').textContent = data.data.type;
        //second

        const containerQuer = document.querySelector('#manga-container');
        containerQuer.querySelector('#type1').textContent = data.data.status;

        //thirth
        const containerQue = document.querySelector('#manga-container');
        containerQue.querySelector('#type2').textContent = (data.data.episodes)+','+(data.data.duration);






        // genre uuudan
        const genreContainer=document.getElementById('genre-container')

        const genres=data.data.genres
       
        genres.map(element=>{
            console.log(element)
            const a=document.createElement('a');
            a.href=element.url;
            a.textContent=element.name;
            genreContainer.appendChild(a);
        })


        //end



        //zurganii haijuud bga text

        const ogluuber = document.querySelector('#manga-container');
        ogluuber.querySelector('#text').textContent = data.data.synopsis;
    })
