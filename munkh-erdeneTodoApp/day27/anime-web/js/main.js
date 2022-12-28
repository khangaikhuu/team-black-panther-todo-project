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
            ('manga-container');mangaTitle.getElementsByTagName('a')[0].textContent = data.data.titles[0].title;
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
        const genreContainer = document.getElementById('genre-container')

        const genres = data.data.genres

        genres.map(element => {
            console.log(element)
            const a = document.createElement('a');
            a.href = element.url;
            a.textContent = element.name;
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

        const texted = document.querySelector('#manga-container');
        texted.querySelector('#texted').textContent = data.data.synopsis.substring(0,1000);

        
    })

function myFunction() {
    for (let i = 0; i < 100; i++) {
        document.getElementById("#text").style.display = "block";
        document.getElementById("#flip").style.display = "none";
        document.getElementById("#fliped").style.display = "block";
        document.getElementById("#texted").style.display = "none";


    }
}






//swort art online

const swort = 'https://api.jikan.moe/v4/anime/11757';
fetch(swort)
    .then(result => result.json())
    .then(data => {
        //zurag
        console.log(data.data.images.jpg.image_url)
        const secondmangaDomImage = document.getElementById('second-manga-image');
        secondmangaDomImage.src = data.data.images.jpg.image_url;
        //end

        //title

        const secondmangaTitle = document.getElementById
            ('manga-container-second'); secondmangaTitle.getElementsByTagName('a')[0].textContent = data.data.titles[0].title;
        //end

        //first p
        const secondcontainerQuery = document.querySelector('#manga-container-second');
        secondcontainerQuery.querySelector('#second-type').textContent = (data.data.type)+"|";
        //second

        const containerQuer = document.querySelector('#manga-container-second');
        containerQuer.querySelector('#second-type1').textContent = (data.data.status.substring(0,6));

        //thirth
        const containerQue = document.querySelector('#manga-container-second');
        containerQue.querySelector('#second-type2').textContent = "|"+(data.data.episodes)+','+(data.data.duration.substring(0,6));






        // genre uuudan
        const genreContainer = document.getElementById('second-genre-container')

        const genres = data.data.genres

        genres.map(element => {
            console.log(element)
            const a = document.createElement('a');
            a.href = element.url;
            a.textContent = element.name;
            genreContainer.appendChild(a);
        })


        //end



        //zurganii haijuud bga text

        const ogluuber = document.querySelector('#manga-container-second');
        ogluuber.querySelector('#second-text').textContent = data.data.synopsis;




        // haijuud bga textnii dood taliin alert


        //bones

        const alertText=document.getElementById('second-alert-text')

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
        const secondAlert = document.querySelector('#manga-container-second');
        secondAlert.querySelector('#second-alert-text1').textContent = data.data.source;
        //end
        //thenme
        const alertText2=document.getElementById('second-alert-text2')

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
        const alertText3=document.getElementById('second-alert-text3')

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
        const score =document.querySelector('#manga-container-second');
        score.querySelector('#second-score').textContent=data.data.score;


        const view =document.querySelector('#manga-container-second');
        view.querySelector('#second-view').textContent=(data.data.popularity)+'M';

        const texted = document.querySelector('#manga-container-second');
        texted.querySelector('#second-texted').textContent = data.data.synopsis.substring(0,1000);

        
    })

function myFunction() {
    for (let i = 0; i < 100; i++) {
        document.getElementById("#second-text").style.display = "block";
        document.getElementById("#second-flip").style.display = "none";
        document.getElementById("#second-fliped").style.display = "block";
        document.getElementById("#second-texted").style.display = "none";


    }
}




















// gurav buyu naruto


const naruto = 'https://api.jikan.moe/v4/anime/20';
fetch(naruto)
    .then(result => result.json())
    .then(data => {
        //zurag
        console.log(data.data.images.jpg.image_url)
        const mangaDomImage = document.getElementById('gurav-manga-image');
        mangaDomImage.src = data.data.images.jpg.image_url;
        //end

        //title

        const mangaTitle = document.getElementById
            ('gurav-manga-container');mangaTitle.getElementsByTagName('a')[0].textContent = data.data.titles[0].title;
        //end

        //first p
        const containerQuery = document.querySelector('#gurav-manga-container');
        containerQuery.querySelector('#gurav-type').textContent = (data.data.type)+"|";
        //second

        const containerQuer = document.querySelector('#gurav-manga-container');
        containerQuer.querySelector('#gurav-type1').textContent = (data.data.status.substring(0,6));

        //thirth
        const containerQue = document.querySelector('#gurav-manga-container');
        containerQue.querySelector('#gurav-type2').textContent = "|"+(data.data.episodes)+','+(data.data.duration.substring(0,6));






        // genre uuudan
        const genreContainer = document.getElementById('gurav-genre-container')

        const genres = data.data.genres

        genres.map(element => {
            console.log(element)
            const a = document.createElement('a');
            a.href = element.url;
            a.textContent = element.name;
            genreContainer.appendChild(a);
        })


        //end



        //zurganii haijuud bga text

        const ogluuber = document.querySelector('#gurav-manga-container');
        ogluuber.querySelector('#gurav-text').textContent = data.data.synopsis;




        // haijuud bga textnii dood taliin alert


        //bones

        const alertText=document.getElementById('gurav-alert-text')

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
        const secondAlert = document.querySelector('#gurav-manga-container');
        secondAlert.querySelector('#gurav-alert-text1').textContent = data.data.source;
        //end
        //thenme
        const alertText2=document.getElementById('gurav-alert-text2')

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
        const alertText3=document.getElementById('gurav-alert-text3')

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
        const score =document.querySelector('#gurav-manga-container');
        score.querySelector('#gurav-score').textContent=data.data.score;


        const view =document.querySelector('#gurav-manga-container');
        view.querySelector('#gurav-view').textContent=(data.data.popularity)+'M';

        const texted = document.querySelector('#gurav-manga-container');
        texted.querySelector('#gurav-texted').textContent = data.data.synopsis.substring(0,1000);

        
    })

function myFunction() {
    for (let i = 0; i < 100; i++) {
        document.getElementById("gurav-text").style.display = "block";
        document.getElementById("gurav-flip").style.display = "none";
        document.getElementById("gurav-fliped").style.display = "block";
        document.getElementById("gurav-texted").style.display = "none";


    }
}



