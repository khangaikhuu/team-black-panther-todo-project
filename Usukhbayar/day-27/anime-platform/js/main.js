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
      data.data.status +
      " | " +
      data.data.episodes +
      ", " +
      data.data.duration;
    // let button = document.createElement('a');
    // button.id = ('btn');
    // button.innerHTML= 'Action'
    document
      .getElementById("manga-container")
      .getElementsByTagName("p")[1].textContent = data.data.year;
  });
