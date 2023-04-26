import apiKey from "./apiKey";

function displayImages(data) {
  const results = data.results;
  const container = document.querySelector(".portfolio-image-cards");

  for (let i = 0; i < 12; i++) {
    const imageUrl = results[i].urls.raw;
    const imageId = results[i].id;

    const div = document.createElement("div");
    div.id = imageId;
    div.classList.add("card");

    const img = document.createElement("img");
    img.src = imageUrl;

    div.appendChild(img);
    container.appendChild(div);
  }
}

const query = "tattoo"; // the keyword you want to search for
const perPage = 20; // the number of results per page

const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&client_id=${apiKey}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    displayImages(data); // call the displayImages function with the search results data
  })
  .catch((error) => {
    console.error(error);
  });
