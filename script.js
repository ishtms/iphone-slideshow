'use strict';

window.onload = function () {
  document.querySelector('.workspace').classList.add('active');
};

var gallery = document.querySelectorAll('.gallery-content__img'),
    mobileBody = document.querySelector('.mobile-body'),
    bg = document.querySelector('.bg-content');

gallery.forEach((some)=> {
  some.addEventListener('click', function () {
    var imgSrc = this.dataset.img,
        activeGallery = document.querySelector('.gallery-content__img.active');

    activeGallery.classList.remove('active');
    this.classList.add('active');
    bg.style.backgroundImage = 'url(\'' + imgSrc + '\')';
    mobileBody.style.backgroundImage = 'url(\'' + imgSrc + '\')';
  })
})