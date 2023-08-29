const movieTitle = document.getElementById("title");
const releaseDate = document.getElementById("release-date");
const moviePoster = document.getElementById("poster");
const button = document.getElementById("submitButton");

const url =
  "https://moviesdatabase.p.rapidapi.com/titles?startYear=1970&endYear=2023";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "111c1e463emsh19703b54b872450p10a38bjsncfaa181a66d5",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    movieTitle.textContent = data.results[0].originalTitleText.text;
    releaseDate.textContent = data.results[0].releaseYear.year;

    const imageURL = data.results[0].primaryImage.url;

    moviePoster.src = imageURL;
  });
