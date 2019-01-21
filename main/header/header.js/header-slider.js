var buttonLeft = document.querySelector('.arrow-left')
var buttonRight = document.querySelector('.arrow-right')

buttonRight.onclick = plus;
buttonLeft.onclick = minus;

function plus() {
    var picture = document.querySelector('.header')
    picture.style.background = 'url(main/header/header-img/header-2.jpg)';

}

function minus() {
    var picture = document.querySelector('.header');
    picture.style.background = 'url(main/header/header-img/header.jpg)';
}
