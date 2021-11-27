(function iife () {
    window.addEventListener('load', () => {
        const timing = window.performance.timing;
        const pageLoadTime = timing.loadEventStart - timing.navigationStart;
        const newElement = document.createElement('section');

        const main = document.querySelector('.header__avatar');

        newElement.innerHTML = `<p>Страница была загружена за ${pageLoadTime} миллисекунд</p>`
        newElement.style.margin = '0';

        main.insertAdjacentElement('beforebegin', newElement);
    });
})();
