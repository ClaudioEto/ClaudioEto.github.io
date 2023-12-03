const scrollButton = document.querySelector('.scroll-up-btn');

scrollButton.addEventListener('click', () => {
    const scrollToTop = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, scrollTop - (2 / 8)); // Ajuste o valor para controlar a velocidade da rolagem
        }
    };
    scrollToTop();
});