const jokeText = document.getElementById("jokeText");
const jokeBtn = document.getElementById("getJokeBtn");

// API: Official Joke API (no auth needed)
const JOKE_API = "https://icanhazdadjoke.com/";

async function getJoke() {
  try {
    jokeText.textContent = "Loading... 😂"; // Optional loading text
    
    const response = await fetch(JOKE_API, {
      headers: {
        Accept: "application/json" // Required header for this API
      }
    });
    
    const data = await response.json();
    jokeText.textContent = data.joke; // Set the joke text
  } catch (error) {
    jokeText.textContent = "Oops! Couldn't fetch a joke 😢";
    console.error("Error:", error);
  }
}

// Attach event listener to the button
jokeBtn.addEventListener("click", getJoke);