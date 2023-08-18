const movieContent = document.getElementById("movieContent");
const movieTitle = document.getElementById("title");
const movieDescription = document.getElementById("description");
const movieRating = document.getElementById("rating");
const button = document.getElementById("button");

window.addEventListener("click", async (event) => {
  event.preventDefault();
  const url = "https://moviesdatabase.p.rapidapi.com/titles/random";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "111c1e463emsh19703b54b872450p10a38bjsncfaa181a66d5",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});
