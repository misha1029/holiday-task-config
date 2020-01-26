'use strict';

export let currentSlide = 0;
let countSlide = 0;

export const clickRadio = (event) => {
  currentSlide = event.target.value;

  changeSlide(currentSlide);
};

export const changeSlide = index => {
  const activeSlide = document.querySelector('.activeSlide');

  activeSlide.classList.remove('activeSlide');

  const changesSlide = document.getElementById(`slide#${index}`);

  changesSlide.classList.add('activeSlide');
};


export const autoChangeSlide = () => {
  currentSlide = (currentSlide + 1) % countSlide;
  changeSlide(currentSlide);
};
export const setCountSlides = count => {
  countSlide = count;
};
