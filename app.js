const form = document.getElementById('gif-text');
const searchField = document.getElementById('buscar-gif');
const responseBox = document.getElementById('responseBox');
let searchedForText;

form.addEventListener('button', function (e) {
  e.preventDefault();
  responseBox.innerHTML = '';
  searchedForText = searchField.value;
  getGif();
})

function getGif() {
  const gifRequest = new XMLHttpRequest();
  gifRequest.open('GET', `http://api.giphy.com/v1/gifs/search?q=r${searchedForText}&api_key=Tb52KuUSL6mjFwip7BOnww9FZZNyUiya`);
  gifRequest.onload = addGif;
  gifRequest.onerror = handleError;
  gifRequest.send();
}

function handleError() {
  return responseBox.innerHTML += ("Holi soy un error " + error);
}

function addGif() {
  const data = JSON.parse(this.responseGif);
  const snippet = gifs.snippet;
  


}