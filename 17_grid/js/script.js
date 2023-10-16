let burger = document.querySelector('.menu-btn');
let menu = document.querySelector('.head-nav');
let menuLinks = menu.querySelectorAll('.headUl')


burger.addEventListener('click',

    function () {

        burger.classList.toggle('menu-btn--active');

        menu.classList.toggle('head-nav--active');
    })

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('menu-btn--active');

        menu.classList.remove('head-nav--active');
    })
});
