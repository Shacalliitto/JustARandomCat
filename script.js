const photo = document.getElementById('photos')
function randomCat() {
    axios.get('https://api.thecatapi.com/v1/images/search')
        .then(function (response) {
            photo.setAttribute('src', response.data[0].url);
        });
}

randomCat()