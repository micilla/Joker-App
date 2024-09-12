// const jokeContainer = document.getElementById("joke");
// const btn = document.getElementById("btn");
// const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single"

// let getjoke = () => {
//     jokeContainer.classList.remove("fade");
//     fetch(url).then(data => data.json())
//     .then(item =>{
//     jokeContainer.textcontent = `${item.joke}`;
//     jokeContainer.classList.add("fade");
// });
// }
// // btn.addEventListener("click", getjoke());
// // getjoke();


document.addEventListener('DOMContentLoaded', () => {
    const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single";
    const jokeContainer = document.getElementById('jokeContainer');
    // const getJokeBtn = document.getElementById('getJokeBtn');
    
    // Function to fetch and display a joke
    const getJoke = () => {
        jokeContainer.classList.add('hidden'); // Hide joke container while loading
        fetch(url)
            .then(response => response.json())  // Convert the response to JSON
            .then(data => {
                if (data.joke) {
                    jokeContainer.textContent = `${data.joke}, 😂`;  // Set the joke text
                } else {
                    jokeContainer.textContent = "No joke available.";  // Fallback text
                }
                jokeContainer.classList.remove('hidden');  // Show joke container
            })
            .catch(error => {
                console.error('Error fetching joke:', error);
                jokeContainer.textContent = "Failed to fetch joke.";  // Error handling
                jokeContainer.classList.remove('hidden');  // Show joke container
            });
    };
    
    // Add event listener to button
    getJokeBtn.addEventListener('click', getJoke);
});