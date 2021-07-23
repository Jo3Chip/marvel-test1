var baseURL = ('https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=');
var key = ('&apiKey=4a03681667fdda3a1b49ffbf805f1f19');
var searchEntry = document.getElementById('name');
const submitButton = document.getElementById('submitButton');

function searchCharacter() {
    var URL = (baseURL + searchEntry.value + key);
    console.log(URL);
};

submitButton.addEventListener('click', () => {
    searchCharacter();
});
