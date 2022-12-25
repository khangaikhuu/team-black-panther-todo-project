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
        containerQuery.querySelector('#type').textContent = (data.data.type)+"|";
        //second

        const containerQuer = document.querySelector('#manga-container');
        containerQuer.querySelector('#type1').textContent = (data.data.status.substring(0,6));

        //thirth
        const containerQue = document.querySelector('#manga-container');
        containerQue.querySelector('#type2').textContent = "|"+(data.data.episodes)+','+(data.data.duration.substring(0,6));






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




        // haijuud bga textnii dood taliin alert


        //bones

        const alertText=document.getElementById('alert-text')

        const studios=data.data.studios
       
        studios.map(element=>{
            console.log(element)
            const a=document.createElement('a');
            a.href=element.url;
            a.textContent=element.name;
            alertText.appendChild(a);
        })
        //end

        //manga
        const secondAlert = document.querySelector('#manga-container');
        secondAlert.querySelector('#alert-text1').textContent = data.data.source;
        //end
        //thenme
        const alertText2=document.getElementById('alert-text2')

        const themes=data.data.themes
       
        themes.map(element=>{
            console.log(element)
            const a=document.createElement('a');
            a.href=element.url;
            a.textContent=element.name;
            alertText2.appendChild(a);
        })


        //end

        //shpunen
        const alertText3=document.getElementById('alert-text3')

        const demongraphics=data.data.demographics
       
        demongraphics.map(element=>{
            console.log(element)
            const a=document.createElement('a');
            a.href=element.url;
            a.textContent=element.name;
            alertText3.appendChild(a);
        })
        //end
        //end

        




        //footer 
        const score =document.querySelector('#manga-container');
        score.querySelector('#score').textContent=data.data.score;


        const view =document.querySelector('#manga-container');
        view.querySelector('#view').textContent=(data.data.popularity)+'M';



        
    })
