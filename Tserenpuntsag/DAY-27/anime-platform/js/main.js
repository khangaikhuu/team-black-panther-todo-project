const fmaURL = "https://api.jikan.moe/v4/anime/5114";

fetch(fmaURL)
    .then(result => result.json())
    .then(data => {
        console.log(data.data.images.jpg.image_url);
        const mangaDomImage = document.getElementById("manga-image");
        mangaDomImage.src = data.data.images.jpg.image_url;

        let mangaTitle = document.getElementById("title");
        mangaTitle.innerHTML = data.data.titles[0].title;

        let headerOne = document.getElementById("headerOne");

        headerOne.innerHTML = `${data.data.type}, ${data.data.aired.prop.from.year}  |  ${data.data.status.substring(0, 8)}  |  ${data.data.episodes} eps, ${data.data.duration.substring(0, 6)}`


        data.data.genres.map((element, i) => {

            const secondDIV = document.getElementById("headerTwo");

            const button = document.createElement("button");

            button.innerHTML = element.name;

            secondDIV.appendChild(button)
        })

        const defP = document.getElementById("defP");
        defP.innerHTML = data.data.synopsis.slice(0, 401);

        const secondP = document.getElementById("secondP")
        secondP.innerHTML = data.data.synopsis.slice(401, 2000)

        const arrowButton = document.getElementById("arrowButton");
        arrowButton.addEventListener("click", () =>{
            if (secondP.style.display == "none"){
                secondP.style.display = "block"
            } else {
                secondP.style.display = "none"
            }
        })

        //information section
        const bottomDIV = document.getElementById("bottomDIV")

        let score = document.getElementById("score")
        let member = document.getElementById("member")
        let button = document.getElementById("button")

        score.innerHTML = ` ${data.data.score}`;
        member.innerHTML = `${data.data.popularity}.0M`;
        list.innerHTML = "Add to List";

    })