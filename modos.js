var btn = document.querySelector('.modos');
var body = document.querySelector('body');

btn.addEventListener('click', function () {
    if (body.classList.contains('tema1')) {
        body.classList.remove('tema1');
        body.classList.add('tema2');
    } else {
        body.classList.remove('tema2');
        body.classList.add('tema1');
    }
});



/* BOTAO DO MENU MOBILE */
var btn = document.querySelector('.modos1');
var html = document.querySelector('html');

btn.addEventListener('click', function () {
    if (body.classList.contains('tema1')) {
        body.classList.remove('tema1');
        body.classList.add('tema2');
    } else {
        body.classList.remove('tema2');
        body.classList.add('tema1');
    }
});