const movieTitle = document.getElementById("title");
const movieDescription = document.getElementById("description");
const movieRating = document.getElementById("rating");
const button = document.getElementById("submitButton");

const url = 'https://moviesdatabase.p.rapidapi.com/titles?startYear=1970&endYear=2023';
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
  });
