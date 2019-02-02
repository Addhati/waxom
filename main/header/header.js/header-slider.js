var buttonLeft = document.querySelector('.arrow-left')
var buttonRight = document.querySelector('.arrow-right')

buttonRight.addEventListener('click', plus);
buttonLeft.addEventListener('click', minus);

var sliders = {
    img_1: 'green',
    img_2: 'blue',
    img_3: 'url(main/header/header-img/header.jpg)'
}

function plus() {
    var picture = document.querySelector('.header')
    picture.style.background = sliders.img_2;
    picture.classList.add('img_2');

}

function minus() {
    var picture = document.querySelector('.header');
    picture.style.background = sliders.img_1;
    picture.classList.add('img_1');
}

function newWindow() {

    var newWin = window.open("about:blank", "hello", "width=200,height=200");
    newWin.document.write("Привет, мир!");
}
