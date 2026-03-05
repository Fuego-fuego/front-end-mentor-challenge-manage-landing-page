const primaryHeader = document.querySelector('#primary-header');
const primaryNav = document.querySelector('#primary-navigation');
const mobileNavToggle = document.querySelector('#mobile-nav-toggle');

mobileNavToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible') ? primaryNav.setAttribute('aria-expanded', false) : primaryNav.setAttribute('aria-expanded', true);
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
})