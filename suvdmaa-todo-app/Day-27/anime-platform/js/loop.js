const container = document.querySelector('#manga-container')

function getAnime(data) {
    return `
    <a id="title-text" class="title-text">${data.data.titles[0].title}</a>
        <div id="text-type1" class="flex text-type1">
            <p><i class="fa-solid fa-circle-play" style="font-size: 16px"></i></p>
            <p id="text1" class="text1"></p>
            <p id="text2" class="text2"></p>
            <p id="text3" class="text3"></p>
            <p> <i class="fa-solid fa-signal" style="font-size: 16px"></i></p>
        </div>
        <div id="text-type2" class="text-type2">
            <a id="text-genre1" class="text-genre"></a>
            <a id="text-genre2" class="text-genre"></a>
            <a id="text-genre3" class="text-genre"></a>
            <a id="text-genre4" class="text-genre"></a>
        </div>
        <div id="main-text" class="flex main-text">
            <img id="manga-image" class="manga-image" 
            src=${data.data.images.jpg.image_url} 
            alt="full-metal">
            <div class="scroll">
                <p id="main-text1" class="main-text1">${data.data.synopsis.slice(0, 375)}</p>
                <p id="second-text-12"></p>
                <button id="moreBtn">
                    <i class="fa-solid fa-angle-down"></i>
                </button>
                <div class="text-container">
                    <p><strong>Studio:</strong><a> Bones</a></p>
                    <p><strong>Source:</strong><a> Manga</a></p>
                    <p><strong>Theme:</strong><a> Military</a></p>
                    <p><strong>Demographic:</strong><a> Shounen</a></p>
                </div>
            </div>
        </div>
        <div id="end-text" class="flex end-text">
            <p id="endtext1" class="end-text1"> <i class="fa-regular fa-star"></i> 9.11</p>
            <p id="end-text2" class="end-text2"><i class="fa-solid fa-user"></i> 3.0M</p>
            <button id="endtext3" class="end-text3"></button>
        </div>`
}