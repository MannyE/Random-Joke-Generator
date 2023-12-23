// HTML Elements
const jokeButton = document.getElementById("joke-button");

function getJoke(e) {
  const request = new XMLHttpRequest();
  request.open("Get", "https://api.chucknorris.io/jokes/random");
  request.onreadystatechange = function () {
    if (request.status === 200 && request.readyState === 4) {
      const response = JSON.parse(request.responseText);

      let paragraph = document.getElementsByTagName("p")[0];

      console.log(response.value);
      paragraph.textContent = response.value;
    }
  };

  request.send();
}

// Event Listeners
jokeButton.addEventListener("click", getJoke);

setTimeout(getJoke, 1000);
