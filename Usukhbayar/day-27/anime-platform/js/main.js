console.log("anime");
const fullMetalAlchemistURL = "https://api.jikan.moe/v4/anime/5114";

fetch(fullMetalAlchemistURL)
  .then((result) => result.json())
  .then((data) => {
    console.log(data.data.images.jpg.image_url);
    const mangaDomImage = document.getElementById("m-image");
    mangaDomImage.src = data.data.images.jpg.image_url;
    console.log(data);
    document
      .getElementById("manga-container")
      .getElementsByTagName("h4")[0].textContent = data.data.titles[0].title;
    document
      .getElementById("manga-container")
      .getElementsByTagName("p")[0].textContent =
      data.data.type +
      ", " +
      data.data.year +
      " |  " +
      data.data.status.slice(0, 8) +
      " | " +
      data.data.episodes+ " eps " +
      ", " +
      data.data.duration.slice(0, 6);

      document.getElementById("manga-container").getElementsByTagName("a")[0].textContent = 'Action';
      document.getElementById("manga-container").getElementsByTagName("a")[1].textContent = 'Adventure';
      document.getElementById("manga-container").getElementsByTagName("a")[2].textContent = 'Drama';
      document.getElementById("manga-container").getElementsByTagName("a")[3].textContent = 'Fantasy';
      const mainContainer = document.querySelector('#img-container');
      const mPara = document.getElementById('m-para');
      mPara.innerHTML = data.data.synopsis;
      mPara.style = ""
  });
