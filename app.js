const movieTitle = document.getElementById("title");
const movieDescription = document.getElementById("description");
const movieRating = document.getElementById("rating");
const button = document.getElementById("submitButton");

button.addEventListener("click", async (event) => {
  event.preventDefault();

  try {
    // Retrieve titles from custom list
    const customList = "random_movies"; // Replace with your actual list name
    const url = `https://moviesdatabase.p.rapidapi.com/titles?list=${customList}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "111c1e463emsh19703b54b872450p10a38bjsncfaa181a66d5",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();

    // Make sure the 'results' property exists and is an array
    if (Array.isArray(data.results) && data.results.length > 0) {
      // Select a random title from the list
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const randomTitle = data.results[randomIndex];

      // Display the random title's information
      movieTitle.textContent = `Title: ${randomTitle.titleText}`;
      movieDescription.textContent = `Description: ${randomTitle.plot}`;
      movieRating.textContent = `Rating: ${randomTitle.ratingsSummary.averageRating}`;
      movieContent.classList.remove("invisible");
    } else {
      console.log("No results found in the API response.");
    }
  } catch (error) {
    console.error(error);
  }
});
