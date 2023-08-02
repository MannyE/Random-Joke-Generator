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
            let joke = "";            
            
            if (this.status === 200) {
                joke = JSON.parse(jokeRequest.responseText).value;
            }
            else {
                joke = "Something went wrong (not funny)"
            }
            jokeOutput.innerText = joke;
        }
        
    }
}


// Event Listeners
jokeButton.addEventListener('click', getJoke);

// Start Joke

setTimeout (getJoke, 2000);