const movieTitle = document.getElementById("title");
const releaseDate = document.getElementById("release-date");
const moviePoster = document.getElementById("poster");
const button = document.getElementById("submitButton");
const movieContent = document.getElementById("movieContent");

const url = "https://moviesdatabase.p.rapidapi.com/titles?";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "111c1e463emsh19703b54b872450p10a38bjsncfaa181a66d5",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

// Hide the movie content initially
movieContent.style.display = "none";

button.addEventListener("click", function () {
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      const randomIndex = Math.floor(Math.random() * data.results.length);
      const movie = data.results[randomIndex];
      console.log(movie);

      movieTitle.textContent = movie.originalTitleText.text;
      releaseDate.textContent = movie.releaseYear.year;

      const imageURL = movie.primaryImage.url;
      moviePoster.src = imageURL;

      // Display the content
      movieContent.style.display = "block";
    });
});
