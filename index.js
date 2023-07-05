
const film = (movie) => {
    var Play = document.createElement("div"); // Create a new div element
    Play.innerHTML = `
        <img src="${movie.poster}">
        <h2>${movie.title}</h2>
        <p>${movie.description}</p>
        <p>Showtime: ${movie.showtime}</p>
        <p class="book">Tickets Sold: ${movie.tickets_sold}</p>
        <button>Book Now</button>
    `; // Set the inner HTML of the div element

    document.querySelector(".div2").appendChild(Play); // Append the div element to an element with class "div2"
    console.log(Play); // Output the div element to the console

    Play.querySelector("button").addEventListener("click", () => {
        movie.tickets_sold += 1; // Increment the tickets sold for the movie
        movie.capacity -= 1; // Decrement the remaining capacity for the movie
        Play.querySelector(".book").textContent = movie.tickets_sold; // Update the displayed tickets sold
    });
}

let movieVideo;
const fetchData = () => {
    fetch("http://localhost:3000/films") // Fetch data from the specified URL
    .then(resp => resp.json()) // Parse the response as JSON
    .then(films => films.forEach(movie => film(movie))); // Iterate over the films and call the film function for each movie
}

fetchData(); // Call the fetchData function to initiate data retrieval
