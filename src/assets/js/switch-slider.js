const btn_prev = document.querySelector('#testimonialsContent .buttonSlider .prev');
const btn_next = document.querySelector('#testimonialsContent .buttonSlider .next');

const images = document.querySelectorAll('#testimonialsItem .testimonialsPhoto img');
let i = 0;

btn_prev.onclick = function () {
  images[i].style.display = 'none';
  i++;
  if (i >= images.length){
    i = 0;
  }
  images[i].style.display = 'block';
};


btn_next.onclick = function () {
  images[i].style.display = 'none';
  i++;
  if (i >= images.length){
    i = 0;
  }
  images[i].style.display = 'block';
};
