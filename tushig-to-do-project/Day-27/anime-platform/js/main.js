
const fullMetalAlchemistURL = `https://api.jikan.moe/v4/anime/5114`;
fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {

    // manga-image 
        console.log(data.data.images.jpg.image_url);
        const mangaDomImage = document.getElementById(`manga-image`);
        mangaDomImage.src = data.data.images.jpg.image_url;

    // h6 text garchigiin heseg
        document.getElementById(`manga-container`).
        getElementsByTagName(`h6`)[0].textContent = data.data.titles
        [0].title

    // type list bars
   
        const listBar = document.getElementById('list-1'); // TV
        listBar.textContent = `${data.data.type}, `
        const listBar1 = document.getElementById('list-2'); // 2009
        listBar1.textContent = `${data.data.year} `
        const listBar2 = document.getElementById('list-3'); // Finished
        listBar2.textContent = `${data.data.status.substring(0, 8)} `
        const listbar3 = document.getElementById(`list-4`) // episode 64
        listbar3.textContent = `${data.data.episodes} eps,`
        const listbar4 = document.getElementById(`list-5`) // minute 24
        listbar4.textContent = `${data.data.duration.substring(0, 6)}`
         
        
    // category lists
        const categoryList = document.getElementById('category-list')
        const genres = data.data.genres

        genres.map(element=> {
            console.log(element)
            const a=document.createElement('p');
            a.href=element.url;
            a.textContent=element.name;
            categoryList.appendChild(a).style=" background-color: rgb(255, 200, 69); padding: 2px 10px; border-radius: 15px;";
        })

    // scroll metal alchemist text 
    const animeText = document.querySelector('#metalalchemist-text p')
    const moreText = document.querySelector('#more-text')
    animeText.textContent = data.data.synopsis.slice(0, 375)
    const more = data.data.synopsis
    console.log(more);
    const textLength = more.length;
    const parts = more.slice(375, textLength);
    console.log(parts)
    moreText.textContent = parts;
    moreText.style.display = 'none'

    const moreButton = document.querySelector('#more-button');
    moreButton.addEventListener(`click`, () => {
        if (moreText.style.display == 'none') {
            moreText.style.display = 'block'
        } else {
            moreText.style.display = 'none'
        }
    })

    // anime genres
    document.querySelector('#genres1 a').textContent = data.data.studios[0].name
    document.querySelector('#genres2 a').textContent = data.data.source
    document.querySelector('#genres3 a').textContent = data.data.themes[0].name
    document.querySelector('#genres4 a').textContent = data.data.demographics[0].name



        
    // footer stats list
        const footerStats= document.querySelector('#manga-container');
        footerStats.querySelector('#footer-stats').textContent = data.data.score;
        const footerStats1= document.querySelector('#manga-container');
        footerStats1.querySelector('#footer-stats2').textContent =`${data.data.popularity}.0M`;
})

    