'use strict';

const menu = document.querySelector('.nav');
const burger = document.getElementById("burgerContainer");
const header = document.querySelector(".header");

window.addEventListener('scroll', fixedHeader);


burger.onclick = function () {
  this.classList.toggle("change");

  if (menu.classList.contains('openMenu')) {
    menu.classList.remove('openMenuAnimation');
    setTimeout(() => {
      menu.classList.remove('openMenu');
    },);
  } else {
    menu.classList.add('openMenu');
    setTimeout(() => {
      menu.classList.add('openMenuAnimation');
    },);
  }
};


function fixedHeader() {
  let windowRelativeTop = document.documentElement.getBoundingClientRect().top;

  if (windowRelativeTop < 0) {
    header.classList.add("headerFixed");
  } else {
    header.classList.remove("headerFixed");
  }
}
