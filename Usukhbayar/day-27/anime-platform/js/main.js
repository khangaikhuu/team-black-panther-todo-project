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
      data.data.episodes +
      " eps" +
      ", " +
      data.data.duration.slice(0, 6);
    document.getElementById("btns").getElementsByTagName("a")[0].textContent =
      "Action";
    document.getElementById("btns").getElementsByTagName("a")[1].textContent =
      "Adventure";
    document.getElementById("btns").getElementsByTagName("a")[2].textContent =
      "Drama";
    document.getElementById("btns").getElementsByTagName("a")[3].textContent =
      "Fantasy";
    document
      .getElementById("txt-container")
      .getElementsByTagName("span")[0].textContent = data.data.synopsis;
    const text = document.querySelector("#txt-container span");
    const secondText = document.querySelector("#second-txt");
    text.textContent = data.data.synopsis.slice(0, 375);
    const more = data.data.synopsis;
    console.log("more", more);
    const textLength = more.length;
    console.log("lenght", textLength);
    const parts = more.slice(375, textLength);
    secondText.textContent = parts;
    secondText.style.display = "none";
    const moreButton = document.querySelector("#btn");

    console.log(moreButton);

    moreButton.addEventListener("click", () => {
      if (secondText.style.display == "none") {
        secondText.style.display = "block";
      } else {
        secondText.style.display = "none";
      }
    });
  });
