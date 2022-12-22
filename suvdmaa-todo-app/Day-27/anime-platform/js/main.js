console.log("Anime Platform")

const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114';

fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data =>{
        console.log(data)
        console.log(data.data.images.jpg.image_url)


        document.getElementById('manga-container').getElementsByTagName('a')[0].textContent = data.data.titles[0].title


        const mangaDomImage = document.getElementById('manga-image');
        mangaDomImage.src = data.data.images.jpg.image_url;

        const mangaText = document.getElementById('main-text');
        mangaText.innerHTML = data.data.synopsis

        const textType1 = document.querySelector("#text-type1")
        textType1.getElementsByTagName('p')[0].textContent = data.data.type + "," + " " + data.data.year 

        textType1.getElementsByTagName('p')[1].textContent =  data.data.status

        textType1.getElementsByTagName("p")[2].textContent = data.data.duration

        





       

        

    })