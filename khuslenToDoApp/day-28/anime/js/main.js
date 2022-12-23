const fullMetalAlchemistURL = "https://api.jikan.moe/v4/anime/5114";

fetch(fullMetalAlchemistURL)
    .then(result => result.json())
    .then(data => {

        console.log(data.data.images.jpg.image_url)
        const mangaDomImg = document.getElementById("manga-img");
        mangaDomImg.src = data.data.images.jpg.image_url;

        document.getElementById("mangaContainer").getElementsByTagName("h6")[0].textContent = data.data.titles[0].title;

        let mangaR2 = document.getElementById("mangaRow2");
        

        let h6 = document.createElement("h6");
        console.log(mangaR2)
        mangaR2.appendChild(h6);

        // const mRowP1 = document.getElementById("mangaRowP1");
        // mRowP1.textContent = data.data.type;

        // const mRowP2 = document.getElementById("mangaRowP2");
        // mRowP2.textContent = data.data.year;

        // const mRowP3 = document.getElementById("mangaRowP3");
        // mRowP3.textContent = data.data.status.slice(0, 8);

        // const mRowP4 = document.getElementById("mangaRowP4");
        // mRowP4.textContent = data.data.episodes;

        // const mRowP5 = document.getElementById("mangaRowP5");
        // mRowP5.textContent = data.data.duration.slice(0, 6);
        // console.log(mRowP5)
        
        h6.innerText = `${data.data.type} , ${data.data.year} | ${data.data.status.slice(0, 8)} | ${data.data.episodes}  eps, ${data.data.duration.slice(0, 6)}`;
        console.log(h6)

        const Row4Para= document.getElementById("Row4-Sider-para");
        Row4Para.textContent = data.data.synopsis;
        
        const Row4Para1= document.getElementById("Row4-Sider-para1");

        let BonesA = document.createElement("a")
        Row4Para1.appendChild(BonesA)

        BonesA.textContent = data.data.studios[0].name;
        BonesA.href = data.data.studios[0].url;
       
        
        const Row4Para2= document.getElementById("Row4-Sider-para2")
   
        Row4Para2.textContent = data.data.source;

        let MilitaryA = document.createElement("a")
        Row4Para1.appendChild(BonesA)

        BonesA.textContent = data.data.studios[0].name;
        BonesA.href = data.data.studios[0].url;

        let ShounenA = document.createElement("a")
        Row4Para1.appendChild(BonesA)

        BonesA.textContent = data.data.studios[0].name;
        BonesA.href = data.data.studios[0].url;

       
        
    })