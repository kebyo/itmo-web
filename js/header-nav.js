const navMenu = document.querySelector('.header__nav');

if(document.location.pathname === '/itmo-web/') {
    navMenu.querySelector('#main-page-btn').classList.add('header__nav__page--current');
}

if(document.location.pathname === '/itmo-web/code-examples.html') {
    navMenu.querySelector('#code-examples-btn').classList.add('header__nav__page--current');
}
