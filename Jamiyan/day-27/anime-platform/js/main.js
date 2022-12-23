console.log("anime  ");

const fullMetalAlchemistURL = "https://api.jikan.moe/v4/anime/5114";

fetch(fullMetalAlchemistURL)
        .then(result => result.json())
        .then(data => {
            console.log(data);
            const mangaDomImage = document.getElementById("manga-image");
            
            mangaDomImage.src = data.data.images.jpg.image_url;

            document.getElementById("manga-container").getElementsByTagName("h6")[0].textContent = data.data.titles[0].title

            document.getElementById("inf-p1").textContent = `${data.data.type},${data.data.year} | ${data.data.status.substring(0, 8)} |  ${data.data.episodes}eps, ${data.data.duration.substring(0, 7)}`

            document.getElementById("action").textContent = data.data.genres[0].name
            document.getElementById("adventure").textContent = data.data.genres[1].name
            document.getElementById("drama").textContent = data.data.genres[2].name
            document.getElementById("fantasy").textContent = data.data.genres[3].name

            
            document.getElementById("img-text").textContent = data.data.synopsis.slice(0, 200)
            let color = 1;
            document.getElementById("down").addEventListener("click", () => {
                if(color = 1){
                document.getElementById("img-text").textContent = data.data.synopsis;
                color = 2;
                } else if(color = 2){
                    document.getElementById("img-text").textContent = data.data.synopsis.slice(0, 200);
                    color = 1;
                }
            })


            document.getElementById("img-type1").textContent = `Studio: `
            document.getElementById("img-type2").textContent = `Source: ${data.data.source}`
            document.getElementById("img-type3").textContent = `Theme: `
            document.getElementById("img-type4").textContent = `Demographic: `

            const a1 = document.createElement("a");
            a1.innerHTML = data.data.studios[0].name
            a1.href = data.data.studios[0].url
            document.getElementById("img-type1").appendChild(a1);

            const a2 = document.createElement("a");
            a2.innerHTML = data.data.themes[0].name
            a2.href = data.data.themes[0].url
            document.getElementById("img-type3").appendChild(a2);

            const a3 = document.createElement("a");
            a3.innerHTML = data.data.demographics[0].name
            a3.href = data.data.demographics[0].url
            document.getElementById("img-type4").appendChild(a3);

            document.getElementById("score-number").textContent = data.data.score
            document.getElementById("popularity").textContent = `${data.data.popularity}.0M `;
            document.getElementById("add").textContent = `Add to List`

            const iconStar = document.createElement("p1");
            iconStar.innerHTML = ' <i class="fa-regular fa-star" style= "font-size: 16px"></i> '
            document.getElementById("score").textContent.appendChild(iconStar)
        })