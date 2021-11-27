const navMenu = document.querySelector('.header__nav');

for (const child of navMenu.children) {
    let href = child.href;

    if (href.lastIndexOf('/') === href.length - 1) {
        href = href.substring(0, href.length - 1);
    }

    const splitHref = href.split('/');
    const endpoint = splitHref[splitHref.length - 1];
    const currentEndpoint = document.location.pathname.split('/itmo-web/')[1];

    if (currentEndpoint === '') {
        const elem = navMenu.querySelector('#itmo-web');
        elem.classList.add('header__nav__page--current');

        break;
    }

    if (currentEndpoint === endpoint) {
        const elem = navMenu.querySelector(`#${endpoint}`);
        elem.classList.add('header__nav__page--current');

        break;
    }
}

// if(document.location.pathname === '/itmo-web/') {
//     navMenu.querySelector('#main-page-btn').classList.add('header__nav__page--current');
// }
//
// if(document.location.pathname === '/code-examples.html') {
//     navMenu.querySelector('#code-examples-btn').classList.add('header__nav__page--current');
// }
