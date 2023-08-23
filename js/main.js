//BURGER
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("burger").addEventListener("click", function() {
		document.querySelector(".header").classList.toggle("open")
})
})

// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
if (e.key === "Escape") {
		// Действие при клике
		document.querySelector(".header").classList.remove("open")
}
});

// Закрыть меню при клике вне его
document.getElementById("menu").addEventListener('click', event => {
event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
if (event._isClickWithInMenu) return;
// Действие при клике
document.querySelector(".header").classList.remove("open")
}); 

//SEARCH
document.querySelector('.header__search-button').addEventListener('click', function(event){
	document.querySelector('.header__search').classList.add('search__form-open');

});
document.querySelector('.header__search-closed').addEventListener('click', function(event){
	document.querySelector('.header__search').classList.remove('search__form-open');
	document.querySelector('.search__form-field').value = "";
});

//SWIPER
const container = document.querySelector(".container");
const swiper = new Swiper(".target__swiper", {
	mousewheel: true,
	keyboard: true,
  speed: 300,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

//TABS
let tabsBtn = document.querySelectorAll('.work__step-button');
let tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
 
    tabsBtn.forEach(function(btn){ btn.classList.remove('work__step-button-active')});
    e.currentTarget.classList.add('work__step-button-active');
 
    tabsItem.forEach(function(element){ element.classList.remove('tabs__item-active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item-active');
  });
});

//ACCORDION
document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.faq__content', {
  duration: 700,
  elementClass:	'faq__item',
  triggerClass: 'faq__btn',
  panelClass: 'faq__accordion',

});
})
