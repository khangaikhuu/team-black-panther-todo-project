console.log("Anime Platform")

const fullMetalAlchemistURL = 'https://api.jikan.moe/v4/anime/5114';

fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data =>{
        console.log(data)
        console.log(data.data.images.jpg.image_url)


        const container = document.querySelector("#manga-container")
        container.getElementsByTagName('a')[0].textContent = data.data.titles[0].title;
        container.getElementsByTagName('a')[0].style = "font-size: 30px; text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15); color: #3535ff"

        

        const mangaDomImage = document.getElementById('manga-image');
        mangaDomImage.src = data.data.images.jpg.image_url;
       
       

        const mainContainer = document.querySelector('#main-text')
       
        mainContainer.style = "background-color: #94a4ef;"

        const mangaText = document.getElementById('main-text1');
        mangaText.innerHTML = data.data.synopsis;
        mangaText.style = ""
        
     

        const textType1 = document.querySelector("#text-type1")
       
        textType1.getElementsByTagName('p')[0].textContent = data.data.type + "," + " " + data.data.year ;

        textType1.getElementsByTagName('p')[1].textContent =  data.data.status.slice(0, 8)

        textType1.getElementsByTagName("p")[2].textContent =data.data.episodes + " eps " + data.data.duration.slice(0, 6)

        textType1.style = "background-color: #6868ff; color: white; text-shadow: 1px 1px 2px blue, 0 0 1em red, 0 0 0.2em blue;"
        textType1.getElementsByTagName('p')[0].style = "padding: 0px 10px 0px 33%;"

        textType1.getElementsByTagName('p')[1].style = "padding: 0px 10px"

        textType1.getElementsByTagName('p')[2].style = "padding: 0px 10px;"


        const textType2 = document.querySelector('#text-type2');
        textType2.getElementsByTagName('a')[0].textContent = data.data.genres[0].name;

        textType2.getElementsByTagName('a')[1].textContent = data.data.genres[1].name;

        textType2.getElementsByTagName('a')[2].textContent = data.data.genres[2].name;

        textType2.getElementsByTagName('a')[3].textContent = data.data.genres[3].name;

        textType2.style = "padding: 10px; color: white; text-shadow: 0 2px black;"

        textType2.getElementsByTagName('a')[0].style = "background-color: #c1caf6; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; padding: 5px; margin-right: 10px; border-radius: 5px"

        textType2.getElementsByTagName('a')[1].style = "background-color: #c1caf6; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; padding: 5px; margin-right: 10px; border-radius: 5px"

        textType2.getElementsByTagName('a')[2].style = "background-color: #c1caf6; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; padding: 5px; margin-right: 10px; border-radius: 5px"

        textType2.getElementsByTagName('a')[3].style = "background-color: #c1caf6; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; padding: 5px; margin-right: 10px; border-radius: 5px"

        const endText = document.querySelector('#end-text')
        endText.getElementsByTagName('p')[0].textContent ="\u2606 " + data.data.score

        endText.getElementsByTagName('p')[1].innerHTML = "\f007"




        



        





        





       

        

    })