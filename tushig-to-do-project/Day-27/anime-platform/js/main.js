
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
            categoryList.appendChild(a);
        })

    // footer stats list
        const footerStats= document.querySelector('#manga-container');
        footerStats.querySelector('#footer-stats').textContent = data.data.score;
        const footerStats1= document.querySelector('#manga-container');
        footerStats1.querySelector('#footer-stats2').textContent =`${data.data.popularity}.0M`;
    })

    