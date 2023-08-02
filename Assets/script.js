// Varibale Definition

const jokeOutput = document.querySelector('#joke');
const jokeButton = document.querySelector('#joke-button');

// Methods
function getJoke () {
    console.log('In Get Joke');
    jokeRequest = new XMLHttpRequest();
    jokeRequest.open('GET','https://api.chucknorris.io/jokes/random');
    jokeRequest.send();

    console.log(jokeRequest);

    jokeRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            const jok = "";            
            
            if (this.status === 200) {
                joke = JSON.parse(jokeRequest.responseText);
            }
            else {
                joke = "Something went wrong (not funny)"
            }
            jokeOutput.innerText = joke.value;
        }
        
    }
}


// Event Listeners
jokeButton.addEventListener('click', getJoke);