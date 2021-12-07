const navMenu = document.querySelector('.header__nav');

for (const child of navMenu.children) {
    const url = new URL(child.href);

    if (document.location.pathname === 'itmo-web') {
        const elem = navMenu.querySelector('#itmo-web');

        elem.classList.add('header__nav__page--current');

        break;
    }

    if (document.location.href === url.href) {
        child.classList.add('header__nav__page--current');

        break;
    }
}
