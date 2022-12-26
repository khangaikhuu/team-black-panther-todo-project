const fmaURL = "https://api.jikan.moe/v4/anime/5114";

fetch(fmaURL)
    .then(result => result.json())
    .then(data => {
        console.log(data.data.images.jpg.image_url);
        const mangaDomImage = document.getElementById("manga-image");
        mangaDomImage.src = data.data.images.jpg.image_url;

        let mangaTitle = document.getElementById("title");
        mangaTitle.innerHTML = data.data.titles[0].title;

        let playIMG = document.getElementById("playIMG");
        let radioIMG = document.getElementById("radioIMG");
        playIMG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-badge-hd" viewBox="0 0 16 16">
        <path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11h1.187zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984H8.5zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843v-4.06z"/>
        <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
        </svg>`

        radioIMG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-broadcast-pin" viewBox="0 0 16 16">
        <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z"/>
        </svg>`
        
        let headerOne = document.getElementById("headerOne");

        headerOne.innerHTML = `${data.data.type}, ${data.data.aired.prop.from.year}  |  ${data.data.status.substring(0, 8)}  |  ${data.data.episodes} eps, ${data.data.duration.substring(0, 6)}`

        headerOne.style = "color: gray ; font-size: 11px"

        data.data.genres.map((element, i) => {

            const secondDIV = document.getElementById("headerTwo");

            const button = document.createElement("button");

            button.style = "font-size: 9px; border: 1px solid gray; border-radius: 20px; margin-right: 5px"

            button.innerHTML = element.name;

            secondDIV.appendChild(button)
        })

        const defP = document.getElementById("defP");
        defP.innerHTML = data.data.synopsis.slice(0, 401);

        const secondP = document.getElementById("secondP")
        secondP.innerHTML = data.data.synopsis.slice(401, 2000)

        const arrowButton = document.getElementById("arrowButton");
        arrowButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
        </svg>`
        arrowButton.addEventListener("click", () => {
            if (secondP.style.display == "none") {
                secondP.style.display = "block"
            } else {
                secondP.style.display = "none"
            }
        })

        //information section

        const bottomDIV = document.getElementById("bottomDIV")

        let score = document.getElementById("score")
        let member = document.getElementById("member")
        
        score.innerHTML = ` ${data.data.score}`;
        member.innerHTML = `${data.data.popularity}.0M`;
        list.innerHTML = "Add to List";

        score.style = "font-size: 11px"
        member.style = "font-size: 11px"
        list.style = "font-size: 11px"

    })