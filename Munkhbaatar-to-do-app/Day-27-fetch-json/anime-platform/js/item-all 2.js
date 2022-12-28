

fetch('https://api.jikan.moe/v4/top/anime')
    .then((res) => res.json())
    .then((topAnime) => {
        console.log('topAnim', topAnime);
        const anime = topAnime.data;
        console.log('anime', anime);
        const container = document.querySelector('#all-container');
      
        container.innerHTML = '';
        anime.map((element, index) => {
        container.innerHTML += getAnimes(element, index)
    })
})


async function showMore(event) {
    const elementSynop = document.getElementById(`synopsis_${event.id}`);
    console.log(elementSynop);
    const resultJSON = await fetch('https://api.jikan.moe/v4/top/anime')
    const result = await resultJSON.json();
    const animeData = result.data;
    console.log(animeData);

    const filteredData = animeData.filter((el, index) => {
        if (index == event.id){
          return el;
        }
      })
    
      // const filteredData = animeData.map(el => index == event.id);
    
    // console.log(filteredData[0].synopsis);
    // elementSynop.innerHTML = filteredData[0].synopsis;
    


    console.log(document.querySelector(`#synopsisFull_${event.id}`));
    console.log(document.querySelector(`#synopsis_${event.id}`));

    let fullTxt = document.querySelector(`#synopsisFull_${event.id}`);
    fullTxt.style.display = 'block';

    let halfTxt = document.querySelector(`#synopsis_${event.id}`);
    halfTxt.style.display = 'none'
    
    
    let collapseBtn = document.querySelector(`.collapseBtn_${event.id}`);
    let showMoreBtn = document.querySelector(`.showMoreBtn_${event.id}`);
    collapseBtn.style.display = 'block'
    collapseBtn.style.display = 'flex'
    // collapseBtn.style.width = '100%'
    showMoreBtn.style.display = 'none'
    
}


function collapseBtn(event) {

    console.log(document.querySelector(`#synopsisFull_${event.id}`));
    console.log(document.querySelector(`#synopsis_${event.id}`));
    let fullTxt = document.querySelector(`#synopsisFull_${event.id}`);
    fullTxt.style.display = 'none';
    let halfTxt = document.querySelector(`#synopsis_${event.id}`);
    halfTxt.style.display = 'block'
    
    let collapseBtn = document.querySelector(`.collapseBtn_${event.id}`);
    let showMoreBtn = document.querySelector(`.showMoreBtn_${event.id}`);
    collapseBtn.style.display = 'none'
    showMoreBtn.style.display = 'block'
    showMoreBtn.style.display = 'flex'
    
    

}







const card = document.querySelector('#card');
function getAnimes(data, index) {


    const genres = data.genres.map(genre => {
        const result = `<a>${genre.name}</a>`;
        return result;
    })

    const themes = data.themes.map(themes => {
        const result = `<a href='${themes.url}'> ${themes.name}</a>`;
        return result;
    })

    const demographics = data.demographics.map(themes => {
        const result = `${data.demographics[0].name}`;
        return result;
    })


    return `
<div id="anime-container">
    <h4>${data.title}</h4>
    <div class="type-container">
        <div class="play-icon">
            <i class="bi bi-play-btn-fill"></i>
        </div>
        
        <div id='type-all'>
            <span id="type">${data.type}</span>,
            <span id="year">${data.year}</span> | 
            <span id="status">${data.status}</span> | 
            <span id="eps">${data.episodes}</span> 
        </div>
        <div class="play-icon">
            <i class="bi bi-broadcast fa-10x"></i>
        </div>
    </div>
    
    <div id="genres">${genres.join('')}</div>
    <div class="text-img">
        <img  src=${data.images.jpg.image_url} alt="" id="manga-image">
        
        <div id="studio-info">
            <p id = 'synopsis_${index}'>${data.synopsis.slice(0, 300)}</p>
            <p id ='synopsisFull_${index}' style='display:none'>${data.synopsis}</p>
            <a href="#" class="extend showMoreBtn_${index}" id="${index}" onclick="showMore(this)"><i class="bi bi-caret-down-fill"></i> </a>
            <a href="#" class="extend collapseBtn_${index}" id="${index}" onclick="collapseBtn(this)" style="display:none;"><i class="bi bi-caret-up-fill"></i> </a>
            <div id="studio"><strong>Studio:</strong> <a href='${data.studios[0].url}' > ${data.studios[0].name}</a></div>
            <div id="source"><strong>Source:</strong> ${data.source}</div>
            <div id="theme"><strong>Theme:</strong> ${themes}</div>
            <div id="demographic"><strong>Demographic:</strong> ${demographics}</div>
        </div>
    </div>
    <div id="score-member-button"> 
        <div id="score"><i class="bi bi-star"></i> ${data.score}</div> 
        <div id="member"><i class="bi bi-person-fill"></i> ${(data.members/1.0e+6).toFixed(1)}M</div> 
        <a id="add-to-list">Add to List</a>
    </div> 
    
</div>`


}