(function iife () {
    const start = Date.now();

    window.addEventListener('load', () => {
        const diff = Date.now() - start;
        const newElement = document.createElement('section');

        const main = document.querySelector('.header__avatar');

        newElement.innerHTML = `<p>Страница была загружена за ${diff} миллисекунд</p>`
        newElement.style.margin = '0';

        main.insertAdjacentElement('beforebegin', newElement);
    })
})();
