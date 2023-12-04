var btn = document.querySelector('.modos');
var html = document.querySelector('html');

btn.addEventListener('click', function () {
    if (html.style.background === 'url("image/backClaro.jpg")') {
        html.style.background = 'url("image/backEscuro.png")';
    } else {
        html.style.background = 'url("image/backClaro.jpg")';
    }
});