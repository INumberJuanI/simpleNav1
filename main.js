const menuToggler = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
menuToggler.addEventListener('click', () => {
    siteNav.classList.toggle("site-nav--open");
    menuToggler.classList.toggle("open");
})