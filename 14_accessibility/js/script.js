const container = document.querySelector(".container")
const swiper = new Swiper('.swiper', {

  speed: 300,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  loop: true,
})

document.querySelectorAll('.jop-item__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.jop-item__btn').forEach(function (btn) {
      btn.classList.remove('jop-item__btn--active')
    });
    e.currentTarget.classList.add('process--active');

    document.querySelectorAll('.process').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('process--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('process--active');
  });
});

let burger = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll('.nav__list')


burger.addEventListener('click',

  function () {

    burger.classList.toggle('menu-btn--active');

    menu.classList.toggle('nav--active');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('menu-btn--active');

    menu.classList.remove('nav--active');
  })
})

document.querySelector(".search-visible").addEventListener("click", function () {
  document.querySelector(".search-form").classList.add("search-form__active");
  this.classList.add("active");
})

document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".search-form");

  if (!target.closest(".search")) {
    form.classList.remove("search-form__active");
    form.querySelector("input").value = "";
    document.querySelector(".search-visible").classList.remove("active")
  }
})

document.addEventListener("DOMContentLoaded", function () {
  const close = function () {
    this.closest('.search-form').style.display = 'none';
  }

  let elements = document.querySelectorAll('.search-delete');

  for (let e of elements) {
    e.addEventListener('click', close);
  }
});


new Accordion('.question-ul', {
  elementClass: 'question-li',
  triggerClass: 'question-li__h3',
  panelClass: 'question-text',
  activeClass: 'accordion--active'
})




