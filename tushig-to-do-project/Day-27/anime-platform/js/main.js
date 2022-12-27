
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





    // SECOND ------------------------>

    const secondfullMetalAlchemistURL = `https://api.jikan.moe/v4/anime/11757`;
    fetch(secondfullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {

    // manga-image 
        console.log(data.data.images.jpg.image_url);
        const secondmangaDomImage = document.getElementById(`second-manga-image`);
        secondmangaDomImage.src = data.data.images.jpg.image_url;

    // h6 text garchigiin heseg
        document.getElementById(`second-manga-container`).
        getElementsByTagName(`h6`)[0].textContent = data.data.titles
        [0].title

    // type list bars
   
        const secondlistBar = document.getElementById('second-list-1'); // TV
        secondlistBar.textContent = `${data.data.type}, `
        const secondlistBar1 = document.getElementById('second-list-2'); // 2009
        secondlistBar1.textContent = `${data.data.year} `
        const secondlistBar2 = document.getElementById('second-list-3'); // Finished
        secondlistBar2.textContent = `${data.data.status.substring(0, 8)} `
        const secondlistbar3 = document.getElementById(`second-list-4`) // episode 64
        secondlistbar3.textContent = `${data.data.episodes} eps,`
        const secondlistbar4 = document.getElementById(`second-list-5`) // minute 24
        secondlistbar4.textContent = `${data.data.duration.substring(0, 6)}`
         
        
    // category lists
        const secondcategoryList = document.getElementById('second-category-list')
        const secondgenres = data.data.genres

        secondgenres.map(element=> {
            console.log(element)
            const a=document.createElement('p');
            a.href=element.url;
            a.textContent=element.name;
            secondcategoryList.appendChild(a).style=" background-color: rgb(255, 200, 69); padding: 2px 10px; border-radius: 15px;";
        })

    // scroll metal alchemist text 
    const secondanimeText = document.querySelector('#second-metalalchemist-text p')
    const secondmoreText = document.querySelector('#second-more-text')
    secondanimeText.textContent = data.data.synopsis.slice(0, 375)
    const secondmore = data.data.synopsis
    console.log(secondmore);
    const secondtextLength = more.length;
    const secondparts = more.slice(375, secondtextLength);
    console.log(secondparts)
    secondmoreText.textContent = parts;
    secondmoreText.style.display = 'none'

    const secondmoreButton = document.querySelector('#second-more-button');
    secondmoreButton.addEventListener(`click`, () => {
        if (secondmoreText.style.display == 'none') {
            secondmoreText.style.display = 'block'
        } else {
            secondmoreText.style.display = 'none'
        }
    })

    // anime genres
    document.querySelector('#second-genres1 a').textContent = data.data.studios[0].name
    document.querySelector('#second-genres2 a').textContent = data.data.source
    document.querySelector('#second-genres3 a').textContent = data.data.themes[0].name
    document.querySelector('#second-genres4 a').textContent = data.data.demographics[0].name



        
    // footer stats list
        const secondfooterStats= document.querySelector('#second-manga-container');
        secondfooterStats.querySelector('#second-footer-stats').textContent = data.data.score;
        const secondfooterStats1= document.querySelector('#second-manga-container');
        secondfooterStats1.querySelector('#second-footer-stats2').textContent =`${data.data.popularity}.0M`;
})